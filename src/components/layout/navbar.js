import Link from "../link"
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"
import { createBreakpoint } from "react-use"
import { Spring, animated, config } from 'react-spring/renderprops.cjs'

const useBreakpoint = createBreakpoint({ md: 768, sm: 640 });

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const useSmallViewport = useBreakpoint() == 'sm';

    const MenuItem = ({ children, href, style }) => {
        return (
            <Link onClick={() => setIsOpen(false)} className="items-center mx-4 my-2 border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href={href} style={style}>
                {children}
            </Link>
        )
    }

    const items = [
        { href: "/services", text: "Services"},
        { href: "/about", text: "About"},
        { href: "/contact", text: "Contact"}
    ]
    
    return (
        <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between pb-2 pt-4 px-4 bg-gray-200">
            <div className="container md:px-4 mx-auto flex flex-wrap items-center justify-between gap-2">
                <div className="w-full z-20 flex justify-between items-center md:w-auto md:justify-start mr-2 md:mr-6 font-title">
                    <Link className="items-center border-b-4 whitespace-no-wrap text-base" href="/">Starter</Link>
                    {(useSmallViewport && <a role="button" className="block select-none focus:text-compliment-800" aria-label="menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XSolid className="h-6 fill-current" /> : <MenuSolid className="h-6 fill-current" />}
                    </a>)}
                </div>
                <Spring native force config={config.default} from={{ height: isOpen ? 0 : 'auto' }} to={{ height: isOpen ? 'auto' : 0 }}>
                    {props => (
                        <animated.div className={`${(useSmallViewport) ? "overflow-hidden absolute left-0 top-12 z-10 flex-col bg-gray-200 w-full" : "flex-row"} flex flex-grow items-center`} style={props}>
                            {items.map((item, i) => <MenuItem key={i} href={item.href}>{item.text}</MenuItem>)}
                        </animated.div>
                    )}
                </Spring>
            </div>
        </nav>
    );
}