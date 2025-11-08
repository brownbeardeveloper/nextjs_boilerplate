"use client";
import InstagramIcon from "@/assets/instagram";
import FacebookIcon from "../assets/facebook";
import TwitterIcon from "@/assets/twitter";
import Link from "next/link";

export default function Footer() {

    const linkUnderline = "absolute bottom-3 left-0 w-full h-0.5 transition-all duration-200 rounded \
                                    bg-white scale-x-0 origin-left \
                                    transition-transform duration-300 group-hover:scale-x-100";

    const linkClasses = "block w-full h-full py-5 px-1.5 transform transition-all duration-200 \
                                    tracking-wide uppercase \
                                    text-white \
                                    group-hover:text-white";

    const menuLinks = [
        { url: "/about", label: "Our Story" },
        { url: "/blog", label: "Blog" },
        { url: "/contact", label: "Contact" },
    ];

    const socialLinks = [
        { url: "/#", label: <FacebookIcon className="" size={24} /> },
        { url: "/#", label: <InstagramIcon className="" size={24} /> },
        { url: "/#", label: <TwitterIcon className="" size={24} /> },
    ];

    return (
        <footer>
            <div className="w-full min-h-screen px-5 flex items-center justify-center bg-gradient-to-t from-gray-400 to-gray-300">
                <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
                    <div className="w-full text-7xl font-bold">
                        <p className="w-full">
                        Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="flex mt-8 flex-col justify-center items-start gap-y-5 gap-x-10 md:flex-row md:justify-between md:items-center">
                        <p className="w-full md:w-2/3 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                            justo at blandit feugiat, libero augue convallis lorem, sit amet 
                            consequat urna ipsum non nunc. Integer nec magna eu lorem tincidunt 
                            suscipit et a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                            justo at blandit feugiat, libero augue convallis lorem, sit amet 
                            consequat urna ipsum non nunc. Integer nec magna eu lorem tincidunt 
                            suscipit et a erat.
                        </p>
                    </div>
                    <nav className="flex flex-col">
                        <ul className="flex mt-24 mb-12 justify-between">
                            <div className="flex flex-col md:flex-row">
                                {menuLinks.map((link) => (
                                    <li key={link.url} className="relative group group-hover:cursor-pointer">
                                        <Link href={link.url} className={linkClasses}>
                                            {link.label}
                                        </Link>
                                        <div className={linkUnderline}/>
                                    </li>
                                ))}
                            </div>

                            <div className="flex flex-row space-x-8 items-end md:items-center justify-between">
                                {socialLinks.map((link, index) => (
                                    <Link key={index} href={link.url} className="w-10 h-10 flex justify-center items-center text-white cursor-pointer">
                                        <div className="flex w-10 h-10 justify-center items-center relative">
                                            <div className="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute"/>                
                                            <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute rotate-90"/>
                                            <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute rotate-180"/>
                                            <span className="text-white">{link.label}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </ul>
                        <hr className="border-white" />
                        <p className="w-full text-center my-8 text-white text-xs tracking-wide">
                            &copy; 2025 Frontend Template. All rights reserved. | {" "}
                            <Link href="/copyright" className="hover:text-blue-500 transition-colors underline">
                            Copyright & Terms
                            </Link>
                        </p>
                    </nav>
                </div>
            </div>
        </footer>
    )
}