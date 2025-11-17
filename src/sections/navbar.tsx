'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Icon from "../assets/icon";

export default function Navbar() {
  const router = useRouter();
  const headerLinks = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
  ];

  const handleClick = (url: string) => {
    router.push(url);
  };


  return (
    <header className="w-full fixed top-2 left-0 z-50">

      {/* Navbar Container */}
      <div className="max-w-screen-md mx-auto h-12 px-1 flex justify-between items-center rounded-full shadow-sm shadow-gray-400 border-2 border-gray-300 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 text-gray-800">

        {/* Logo and Title Section */}
        <div className="flex w-full">
          <Link href="/" className="flex items-center">
            {/* Logo */}
            <div className="flex items-center p-2 ml-[-2px] bg-gray-800 rounded-full">
              <Icon size={24} className="text-white" />
            </div>

            {/* Title */}
            <div className="flex items-center">
              <span className="ml-5 text-md font-permanentmarker tracking-wide uppercase text-gray-700">
                Welcome to the website
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex justify-center w-full">
          <nav className="flex justify-center w-full">
            <ul className="flex justify-center">
              {/* Header Links */}
              {headerLinks.map((link) => (
                <li key={link.url} className="mx-3 cursor-pointer hover:text-gray-600 transition-all duration-300">
                  <button onClick={() => handleClick(link.url)} 
                    className="text-sm font-semibold tracking-wide uppercase text-gray-600 cursor-pointer shadow-lg shadow-gray-300 transition-all duration-300 hover:scale-105"
                    aria-label={link.label}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}