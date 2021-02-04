import Link from "../link"
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"
import { createBreakpoint } from "react-use"
import { Spring, animated, config } from 'react-spring/renderprops.cjs'

const useBreakpoint = createBreakpoint({ md: 768, sm: 640 });

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const breakpoint = useBreakpoint();

    const Nav = ({children}) => {
        return (
            <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-4 bg-gray-200">
                <div className="container md:px-4 mx-auto flex flex-wrap items-center justify-between gap-2">
                    {children}
                </div>
            </nav>
        )
    }

    const Logo = () => {
        return (
            <Link className="items-center border-b-4 whitespace-no-wrap text-base" href="/">Starter</Link>
        )
    }

    const Toggle = () => {
        return (
            <a role="button" className="block select-none focus:text-compliment-800" aria-label="menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XSolid className="h-6 fill-current" /> : <MenuSolid className="h-6 fill-current" />}
            </a>
        )
    }
    
    const Menu = ({ children }) => {
         if (!(breakpoint !== 'sm')) return (
                <Spring
                    native
                    force
                    config={config.wobbly}
                    from={{ height: isOpen ? 0 : 'auto' }}
                    to={{ height: isOpen ? 'auto' : 0 }}>
                    {props => (
                        <animated.div 
                            className={`${(isOpen ? "gap-2 p-4" : "gap-0")} overflow-hidden absolute left-0 top-12 flex flex-grow items-center z-10 flex-col bg-gray-200 w-full`} 
                            style={props}>
                            {children}
                        </animated.div>
                    )}
                </Spring>
            )
            else return (
                <div className={`flex flex-grow items-center flex-row gap-4`}>{children}</div>
            )
    }

    const Header = ({ children }) => {
        return (
            <div className="w-full z-20 flex justify-between items-center md:w-auto md:justify-start mr-2 md:mr-6 font-title">{children}</div>
        )
    }

    const MenuItem = ({ children, href, style }) => {
        return (
            <Link onClick={() => setIsOpen(false)} className="items-center border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href={href} style={style}>
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
        <Nav>
            <Header>
                <Logo />
                { (breakpoint == 'sm' && <Toggle/>)}
            </Header>
            <Menu>
                { items.map((item, i) => <MenuItem key={i} href={item.href}>{item.text}</MenuItem>)}
            </Menu>
        </Nav>
    );
}