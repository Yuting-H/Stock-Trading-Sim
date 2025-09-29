import { Link } from "react-router-dom";

const links = [
  { href: "/", text: "Home" },
  { href: "/market", text: "Market" },
];

function Navbar({ onLogin }) {
  return (
    <nav className="flex ">
      {links.map((link) => {
        return <Link to={link.href}>{link.text}</Link>;
      })}

      <button
        className="bg-sky-500 border-2 border-sky-900 ms-auto cursor-pointer"
        onClick={onLogin}
      >
        Log In
      </button>
    </nav>
  );
}

export default Navbar;
