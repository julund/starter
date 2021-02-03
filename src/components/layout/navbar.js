import Link from "../link"
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"
import { createBreakpoint } from "react-use"
import { Spring, Trail, config } from 'react-spring/renderprops.cjs'

const useBreakpoint = createBreakpoint({ md: 768, sm: 640 });

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const breakpoint = useBreakpoint();

    const spring = {
        from: { transform: 'translate3D(0,-45%,0)' },
        to: { transform: 'translate3D(0,0%,0)' },
        reset: !isOpen, reverse: !isOpen,
        config: config.wobbly,
    }

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
       const isLarge = (breakpoint !== 'sm')
       if (!isLarge) return (
            <Spring {...spring}>
                {props => <div style={props}  className={`${(isOpen ? "flex" : "hidden")} flex-grow items-center z-10 flex-col gap-2 absolute top-12 left-0 bg-gray-200 p-4 w-full`}>{children}</div>}
            </Spring>)
            else return (
                <div className={`flex flex-grow items-center flex-row gap-4`}>{children}</div>
            )
        // return ( <div className={`${(isOpen || isLarge ? "flex" : "hidden")} flex-grow items-center ${(isLarge) ? "flex-row gap-6" : "flex-col gap-2 absolute top-12 left-0 bg-gray-200 p-4 w-full "}`}
            // >{children}</div>
        // )
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
                { (breakpoint === 'sm' && <Toggle/>)}
            </Header>
            <Menu state={isOpen}>
                { items.map((item, i) => <MenuItem key={i} href={item.href}>{item.text}</MenuItem>)}
                {/* <Trail items={items} keys={items.map((_, i) => i)} {...spring}>
                    {item => props => <MenuItem style={props} href={item.href}>{item.text}</MenuItem>}
                </Trail> */}
            </Menu>
        </Nav>
    );
}