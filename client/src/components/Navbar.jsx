import { Link } from "react-router-dom";

const links = [
  { href: "/", text: "Home" },
  { href: "/market", text: "Market" },
];

function Navbar() {
  return (
    <nav className="">
      {links.map((link) => {
        return <Link to={link.href}>{link.text}</Link>;
      })}
    </nav>
  );
}

export default Navbar;
