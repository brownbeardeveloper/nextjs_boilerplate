import NavigateButton from "../components/navigate-button";
import { MenuIcon } from "lucide-react";


export default function Navbar() {

  const headerLinks = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
  ];


  return (
    <header className="w-full gradient-background bg-gradient-to-r from-gray-700 to-gray-800 p-4 
    flex justify-between items-center sticky top-0 z-50">
      <MenuIcon size={24} className="hover:text-gray-300 transition-all duration-300 cursor-pointer"  />
      <nav className="flex justify-center w-full">
        <ul className="flex justify-center">
          {headerLinks.map((link) => (
            <li key={link.url} className="mx-4">
              <NavigateButton url={link.url} variant="customTransparent">{link.label}</NavigateButton>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}