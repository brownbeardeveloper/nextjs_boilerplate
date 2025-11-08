"use client";
import NavigateButton from "../components/navigate-button";
import { X } from "lucide-react";

export default function Sidebar({isOpen, toggleSidebar}: {isOpen: boolean, toggleSidebar: () => void}) {

  const sidebarLinks = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
];

  return (
    <aside className={`w-1/4 h-full flex flex-col items-center justify-center bg-gray-100 
    ${isOpen ? "block" : "hidden"} transition-all duration-300`}>
      <button onClick={toggleSidebar} className="absolute top-0 right-0 hover:text-gray-300 transition-all duration-300 cursor-pointer">
        <X size={24} className="hover:text-gray-300 transition-all duration-300 cursor-pointer" />
      </button>
      <nav className="bg-gray-100 p-4 h-full">
        <ul className="flex flex-col gap-2 w-full">
          {sidebarLinks.map((link) => (
            <li key={link.url} className="w-full">
              <NavigateButton url={link.url} variant="customTransparent">{link.label}</NavigateButton>
            </li>  
          ))}
        </ul>  
      </nav>
    </aside>
  );
}