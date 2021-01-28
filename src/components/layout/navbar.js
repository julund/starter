import Link from "../link";
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"

// const Navbar = props => {
//     const [expanded, setExpanded] = useState(false);
//     return (
//         <nav className="sticky top-0 flex-grow-0 p-4 bg-gray-200">  
//         <div className="container mx-auto md:px-4 flex md:flex-row flex-col flex-wrap gap-6 font-title">
//             <a role="button" className="justify-self-end block md:hidden select-none" aria-label="menu" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
//                 {expanded ? <XSolid className="h-6 fill-current"/> : <MenuSolid className="h-6 fill-current"/>}
//             </a>
//             <Link className={expanded ? "block" : "hidden md:block"} href="/" type="nav">Starter</Link>
//             <Link className={expanded ? "block" : "hidden md:block"} href="/services" type="nav">Services</Link>
//             <Link className={expanded ? "block" : "hidden md:block"} href="/about-us" type="nav">About us</Link>
//             <Link className={expanded ? "block" : "hidden md:block"} href="/contact" type="nav">Contact</Link>
//         </div>
//         </nav>
//     )};

// export default Navbar;

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
      <nav className="sticky top-0 flex flex-wrap items-center justify-between p-4 bg-gray-200">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* <div className="w-full relative flex justify-between items-center md:w-auto md:static md:block md:justify-start mr-2 md:mr-6 font-title"> */}
          <div className="w-full flex justify-between items-center md:w-auto md:justify-start mr-2 md:mr-6 font-title">
            <Link className="items-center border-b-4 whitespace-no-wrap" href="/">Starter</Link>
            <a role="button" className="block md:hidden select-none" aria-label="menu" aria-expanded={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
                 {navbarOpen ? <XSolid className="h-6 fill-current"/> : <MenuSolid className="h-6 fill-current"/>}
            </a>
          </div>
          <div className={"md:flex flex-col md:flex-row flex-grow items-center gap-2 md:gap-6" + (navbarOpen ? " flex" : " hidden")}>
              <Link className="items-center border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href="/services">Services</Link>
              <Link className="items-center border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href="/about-us">About us</Link>
              <Link className="items-center border-b-4 hover:border-primary-300" activeClassName="border-primary-300" inactiveClassName="border-transparent" href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
  );
}