import Link from "../link"
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState, forwardRef } from "react"
// import { useWindowSize } from "react-use"
import { useMeasure } from "react-use"
import { Keyframes, animated, config } from 'react-spring/renderprops.cjs'

const Dropdown = Keyframes.Spring({
    initial: { x: 0 },
    open: { x: 0 },
    close: { x: -100 },
    config: config.default
})

const Content = Keyframes.Trail({
    initial: { x: 0, opacity: 1 },
    open: { x: 0, opacity: 1, delay: 100 },
    close: { x: -50, opacity: 0, delay: 0 },
    config: config.wobbly
})

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(undefined);
    // const {width} = useWindowSize();
    const [ref, { width }] = useMeasure();
    // const mobile = width <= 768
    const mobile = width > 0 && width <= 730
    const state = mobile ? isOpen == undefined ? 'close' : isOpen ? 'open' : 'close' : 'initial'

    const MenuItem = forwardRef(({ children, href, style }, ref) => {
        return (
            <Link ref={ref} className="items-center mx-4 my-2 border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href={href} style={style}>
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
        <nav ref={ref} className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-4 bg-gray-200">
            <div className="container md:px-4 mx-auto flex flex-wrap items-center justify-between gap-2">
                <div className="w-full z-20 flex justify-between items-center md:w-auto md:justify-start mr-2 md:mr-6 font-title">
                    <Link className="items-center border-b-4 whitespace-no-wrap text-lg" href="/">Starter</Link>
                    {(mobile && <a role="button" className="block select-none focus:text-compliment-800" aria-label="menu" aria-expanded={(isOpen == undefined ? false : !isOpen)} onClick={() => setIsOpen(isOpen == undefined ? true : !isOpen)}>
                        {(isOpen) ? <XSolid className="h-6 fill-current" /> : <MenuSolid className="h-6 fill-current" />}
                    </a>)}
                </div>
                <Dropdown native state={state}>
                    {({ x }) => (
                        <animated.div
                            className={`${(mobile) ? "overflow-hidden p-4 absolute left-0 top-12 z-10 flex-col bg-gray-200 w-full" : "flex-row"} flex flex-grow items-center`}
                            style={{ transform: x.interpolate(x => `translate3d(0,${x}%,0)`), }}
                        >
                        {mobile ?
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
                        :
                            items.map((item,i) => <MenuItem key={i} href={item.href}>{item.text}</MenuItem>)
                        }
                        </animated.div>)}
                </Dropdown>
            </div>
        </nav>
    );
}