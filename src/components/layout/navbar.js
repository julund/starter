import Link from "../link";
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"

const Navbar = props => {
    const [expanded, setExpanded] = useState(false);
    return (
        <nav className="sticky top-0 flex-grow-0 p-4 bg-gray-200">  
        <div className="container mx-auto md:px-4 flex md:flex-row flex-col flex-wrap gap-6 font-title">
            <a role="button" className="justify-self-end block md:hidden select-none" aria-label="menu" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
                {expanded ? <XSolid className="h-6 fill-current"/> : <MenuSolid className="h-6 fill-current"/>}
            </a>
            <Link className={expanded ? "block" : "hidden md:block"} href="/" type="nav">Starter</Link>
            <Link className={expanded ? "block" : "hidden md:block"} href="/services" type="nav">Services</Link>
            <Link className={expanded ? "block" : "hidden md:block"} href="/about-us" type="nav">About us</Link>
            <Link className={expanded ? "block" : "hidden md:block"} href="/contact" type="nav">Contact</Link>
        </div>
        </nav>
    )};

export default Navbar;