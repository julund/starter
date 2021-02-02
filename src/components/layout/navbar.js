import Link from "../link"
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"
import { createBreakpoint } from "react-use"
import { Trail, animated, config } from 'react-spring/renderprops.cjs'

const useBreakpoint = createBreakpoint({ md: 768, sm: 640 });

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const breakpoint = useBreakpoint();

    const spring = {
        from: { transform: 'translate3D(0,-25px,0', },
        to: { transform: 'translate3D(0,0px,0', },
        config: config.default,
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
        return (
            <div className={`${(isOpen || isLarge ? "flex" : "hidden")} flex-grow items-center text-base ${(isLarge) ? "flex-row gap-6" : "flex-col gap-2"}`}
            >{children}</div>
        )
    }

    const Header = ({ children }) => {
        return (
            <div className="w-full flex justify-between items-center md:w-auto md:justify-start mr-2 md:mr-6 font-title">{children}</div>
        )
    }

    const MenuItem = ({ children, href }) => {
        return (
            <Link onClick={() => setIsOpen(false)} className="items-center border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href={href}>
                {children}
            </Link>
        )
    }

    const items = [
        <MenuItem href="/services">Services</MenuItem>,
        <MenuItem href="/about">About</MenuItem>,
        <MenuItem href="/contact">Contact</MenuItem>
    ]
    return (
        <Nav>
            <Header>
                <Logo />
                { (breakpoint === 'sm' && <Toggle/>)}
            </Header>
            <Menu state={isOpen}>
                <Trail items={items} keys={items.map((_, i) => i)} {...spring} reverse={isOpen}>
                    {item => props => <div style={props}>{item}</div> }
                </Trail>
            </Menu>
        </Nav>
    );
}