"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavigateButton({ text, variant, url }:
    { text: string, variant: "customTransparent" | "customGray", url: string }) {

    const router = useRouter();
    const baseClasses = "border shadow-md px-4 py-2 hover:scale-105 rounded-md transition-all duration-300";
    const variants = {
        customTransparent: "bg-transparent text-black",
        customGray: "border-gray-300 border-2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 text-gray-800 shadow-gray-600",
    };

    const onClick = () => {
        router.push(url);
    };

    return (
        <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
            <Link href={url}>
                {text}
            </Link>
        </button>
    );
}