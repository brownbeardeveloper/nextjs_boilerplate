"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SubmitButton({ text, variant }:
    { text: string, variant: "customBlack" | "customGray" }) {

    const baseClasses = "w-full px-6 py-3 bg-black text-white \
            font-medium rounded-md transition-all duration-200 \
            hover:bg-primary/90 active:scale-[0.98] \
            disabled:opacity-50 disabled:cursor-not-allowed \
            focus:outline-none focus:ring-2 focus:ring-black/20";

    const variants = {
        customBlack: "bg-black text-white",
        customGray: "border-gray-300 border-2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 text-gray-800",
    };

    return (
        <button className={`${baseClasses} ${variants[variant]}`}>
            {text}
        </button>
    );
}