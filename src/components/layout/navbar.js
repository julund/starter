import Link from "../link"
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState, forwardRef } from "react"
import { createBreakpoint } from "react-use"
import { Keyframes, animated, config } from 'react-spring/renderprops.cjs'

const useBreakpoint = createBreakpoint({ md: 768, sm: 640 });

const Dropdown = Keyframes.Spring({
    default: { x: 0 },
    initial: { x: -100 },
    open: { x: 0 },
    close: { x: -100 },
    config: config.default
})

const Content = Keyframes.Trail({
    default: { x: 0, opacity: 1 },
    initial: { x: 0, opacity: 0 },
    open: { x: 0, opacity: 1, delay: 100 },
    close: { x: -50, opacity: 0, delay: 0 },
    config: config.wobbly
})

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(undefined);
    const breakpoint = useBreakpoint()
    const useSmallViewport = breakpoint == 'sm';
    // console.log(!useSmallViewport && isOpen === undefined)

    const state = !useSmallViewport && isOpen === undefined ? 'default' : isOpen === undefined ? 'initial' : isOpen || !useSmallViewport ? 'open' : 'close'

    const MenuItem = forwardRef(({ children, href, style }, ref) => {
        return (
            <Link ref={ref} onClick={() => setIsOpen(false)} className="items-center mx-4 my-2 border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href={href} style={style}>
                {children}
            </Link>
        )
    })

    const AnimatedMenuItem = animated(MenuItem)

    const items = [
        { href: "/services", text: "Services"},
        { href: "/about", text: "About"},
        { href: "/contact", text: "Contact"}
    ]
    
    return (
        <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-4 bg-gray-200">
            <div className="container md:px-4 mx-auto flex flex-wrap items-center justify-between gap-2">
                <div className="w-full z-20 flex justify-between items-center md:w-auto md:justify-start mr-2 md:mr-6 font-title">
                    <Link className="items-center border-b-4 whitespace-no-wrap text-base" href="/">Starter</Link>
                    {(useSmallViewport && <a role="button" className="block select-none focus:text-compliment-800" aria-label="menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XSolid className="h-6 fill-current" /> : <MenuSolid className="h-6 fill-current" />}
                    </a>)}
                </div>
                <Dropdown native state={state}>
                    {({ x }) => (
                        <animated.div
                            className={`${(useSmallViewport) ? "overflow-hidden absolute left-0 top-12 z-10 flex-col bg-gray-200 w-full" : "flex-row"} flex flex-grow items-center`}
                            style={{ transform: x.interpolate(x => `translate3d(0,${x}%,0)`), }}
                        >
                            <Content native items={items} keys={items.map((_, i) => i)} reverse={!isOpen} state={state}>
                                {(item, i) => ({ x, ...props }) => (
                                <AnimatedMenuItem
                                    key={i} href={item.href}
                                    style={{
                                    transform: x.interpolate(x => `translate3d(0,${x}%,0)`),
                                    ...props,
                                    }}>
                                    {item.text}
                                </AnimatedMenuItem>
                                )}
                            </Content>
                        </animated.div>)}
                </Dropdown>
            </div>
        </nav>
    );
}