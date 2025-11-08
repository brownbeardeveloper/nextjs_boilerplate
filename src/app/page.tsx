import NavigateButton from "../components/navigate-button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <p className="text-2xl">This is the home page</p>
      <NavigateButton url="/about" variant="customTransparent">
      Go to About
      </NavigateButton>
    </main>  
  );
}
