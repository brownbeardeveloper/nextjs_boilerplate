"use client";
import InstagramIcon from "@/assets/instagram";
import FacebookIcon from "../assets/facebook";
import TwitterIcon from "@/assets/twitter";
import Link from "next/link";

export default function Footer() {

    const linkUnderline = "absolute bottom-3 left-0 w-full h-0.5 transition-all duration-200 rounded \
                                    bg-gray-100 dark:bg-blue-500 scale-x-0 origin-left \
                                    transition-transform duration-300 group-hover:scale-x-100";

    const linkClasses = "block w-full h-full py-5 px-1.5 transform transition-all duration-200 \
                                    tracking-wide uppercase \
                                    text-gray-100 dark:text-white \
                                    group-hover:text-gray-100 dark:group-hover:text-blue-400";

    const menuLinks = [
        { url: "/about", label: "Our Story" },
        { url: "/blog", label: "Blog" },
        { url: "/contact", label: "Contact" },
    ];

    const socialLinks = [
        { url: "/facebook", label: <FacebookIcon className="" size={32} /> },
        { url: "/instagram", label: <InstagramIcon className="" size={32} /> },
        { url: "/twitter", label: <TwitterIcon className="" size={32} /> },
    ];

    return (
        <footer>
            <div className="h-30"/>
            <div className="w-full min-h-screen px-5 flex items-center justify-center bg-gradient-to-b from-purple-950 to-slate-900 
                dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
                <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
                    <div className="w-full text-7xl font-bold">
                        <p className="w-full">
                        Discover our vision for personal growth.
                        </p>
                    </div>
                    <div className="flex mt-8 flex-col justify-center items-start gap-y-5 gap-x-10 md:flex-row md:justify-between md:items-center">
                        <p className="w-full md:w-2/3 text-gray-100">
                        We all lose our way sometimes, rushing through the days and forgetting why we started. Innerloop helps you slow down and reconnect with what truly matters. With gentle structure and simple weekly reflection, it becomes easier to build clarity and direction. This is your space to think clearly, act with intention and grow at your own pace. When life gets loud again you will know exactly where to return, to yourself.
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
                                {socialLinks.map((link) => (
                                    <div className="max-w-md rounded-xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                        <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-gray-900">
                                          <li key={link.url} className="relative group group-hover:cursor-pointer">
                                                <Link href={link.url}>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ul>
                        <hr className="border-gray-100" />
                        <p className="w-full text-center my-8 text-gray-100 text-xs tracking-wide">
                            &copy; 2025 Frontend Template. All rights reserved. | {" "}
                            <Link href="/copyright" className="hover:text-blue-400 transition-colors underline">
                            Copyright & Terms
                            </Link>
                        </p>
                    </nav>
                </div>
            </div>
        </footer>
    )
}