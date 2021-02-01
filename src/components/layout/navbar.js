import Link from "../link";
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"
// import {useSpring, animated, config} from 'react-spring'

const Menu = ({ children, state }) =>
    <div className={"md:flex flex-col md:flex-row flex-grow items-center gap-2 md:gap-6" + (state ? " flex" : " hidden")}
        // style={props}
    >{children}</div>

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    
    const MenuItem = ({children, href}) => <Link onClick={() => setIsOpen(false)} className="items-center border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href={href}>{children}</Link>    
    // const props = useSpring({
    //     opacity: isOpen ? 1 : 0,
    //     height: isOpen ? 115 : 0,
    //     config: config.default,
    // })

    return (
        <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-4 bg-gray-200">
            <div className="container md:px-4 mx-auto flex flex-wrap items-center justify-between gap-2">
                <div className="w-full flex justify-between items-center md:w-auto md:justify-start mr-2 md:mr-6 font-title">
                    <Link className="items-center border-b-4 whitespace-no-wrap text-base" href="/">Starter</Link>
                    <a role="button" className="block md:hidden select-none" aria-label="menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XSolid className="h-6 fill-current" /> : <MenuSolid className="h-6 fill-current" />}
                    </a>
                </div>
                {/* <Menu props={props} state={isOpen}> */}
                <Menu state={isOpen}>
                        <MenuItem href="/services">Services</MenuItem>
                        <MenuItem href="/about">About</MenuItem>
                        <MenuItem href="/contact">Contact</MenuItem>
                </Menu>
            </div>
        </nav>
    );
}