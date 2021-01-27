import Link from "../link";

const Navbar = props => (
    <nav className="sticky top-0 flex-grow-0 p-4 bg-gray-200">
      <div className="container mx-auto md:px-4 flex flex-row flex-wrap gap-6 font-title">
          <Link href="/" type="nav">Home</Link>
          <Link href="/services" type="nav">Services</Link>
          <Link href="/about-us" type="nav">About us</Link>
          <Link href="/contact" type="nav">Contact</Link>
      </div>
    </nav>
);

export default Navbar;