import NavigateButton from "../components/navigate-button";

export default function NotFound() {
    return (
        <div className="h-screen p-4 grid place-items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <span className="text-9xl font-black tracking-tighter \
                bg-clip-text text-transparent drop-shadow-md \
                bg-gradient-to-r from-sky-700 via-purple-600 to-blue-800 scale-140">
                    404.
                </span>
                <h1 className="mt-10 inline-block px-2 py-1 text-3xl font-semibold font-oswald text-gray-700">
                    This page could not be found!
                </h1>
                <p className="mt-1 text-lg text-gray-700 tracking-tight max-w-120 mb-8">
                    This page seems to be taking a break. Please check the link again or explore the Workplace again.
                </p>
                <NavigateButton url="/" text="Take me to home page" variant="customGray"/>
            </div>
        </div>
    )
}