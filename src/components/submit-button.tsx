export default function SubmitButton({ text, variant }:
    { text: string, variant: "customBlack" | "customGray" }) {

    const baseClasses = "w-full px-6 py-3 shadow-md shadow-gray-500 \
            font-medium rounded-md transition-all duration-200 \
            hover:bg-primary/90 active:scale-[0.98] \
            disabled:opacity-50 disabled:cursor-not-allowed \
            focus:outline-none focus:ring-2 focus:ring-black/20";

    const variants = {
        customBlack: "bg-black text-white",
        customGray: "border border-gray-400 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 text-gray-700",
    };

    return (
        <button className={`${baseClasses} ${variants[variant]}`}>
            {text}
        </button>
    );
}