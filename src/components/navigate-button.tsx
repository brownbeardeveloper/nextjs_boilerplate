"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavigateButton({ children, variant, url }: 
    { children: React.ReactNode, variant: "customTransparent" | "customSilver", url: string }) {
    
        const router = useRouter();
    const baseClasses = "text-white px-4 py-2 rounded-md transition-all duration-300";
    const variants = {
        customTransparent: "border bg-gradient-to-r from-silver-500 to-silver-100 p-2 rounded-md \
        text-black hover:bg-white/50 hover:scale-105",
        customSilver: "border bg-gradient-to-r from-silver-500 to-silver-100 p-2 rounded-md \
            text-black hover:bg-silver-100 hover:text-black",
    };

    const onClick = () => {
      router.push(url);
    };

    return (
        <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
            <Link href={url}>
            {children}
            </Link>
        </button>
    );
}