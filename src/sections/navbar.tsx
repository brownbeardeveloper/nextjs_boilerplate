
import Link from "next/link";
import Icon from "../assets/icon";

export default function Navbar() {

  const headerLinks = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
  ];


  return (
    <header className="w-full fixed top-2 left-0">
      <div className="max-w-screen-md mx-auto h-12 px-10 flex justify-between items-center rounded-md shadow-lg shadow-gray-300 \
        border-2 border-gray-300 
        bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 text-gray-800">
        <div className="flex  w-full">

        {/* Logo Section */}
        <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-80 gap-x-2">
          <Icon size={24} className="text-white" />
          <span className="ml-3 font-permanentmarker text-lg tracking-wider uppercase text-gray-600 dark:text-white">
            Template
          </span>
        </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex justify-center w-full">
        <nav className="flex justify-center w-full">
          <ul className="flex justify-center">
            {headerLinks.map((link) => (
              <li key={link.url} className="mx-4 cursor-pointer hover:text-gray-600 transition-all duration-300">
                <Link href={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>

      </div>  
    </header>
  );
}