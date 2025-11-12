import Image from "next/image";
import exampleImage from "../../../public/example.png";

export default function AboutPage() {

    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="h-200 relative bg-cover bg-center bg-no-repeat flex items-center justify-center shadow-md shadow-gray-300"
          style={{ backgroundImage: `url(${exampleImage.src})` }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-elevated text-center px-4">
            <h1 className="font-permanentmarker text-4xl sm:text-6xl lg:text-8xl font-black text-white 
                leading-none tracking-wider transform -rotate-2">
                <span className="block">Lorem ipsum</span>
                <span className="block">dolor sit amet.</span>
            </h1>
          </div>
        </section>
  
        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight uppercase tracking-wide">
                Lorem ipsum dolor sit amet.
                </h2>
  
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                  </p> 

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                  </p>

                  <p>
                    Welcome to my website.
                  </p>
                </div>
              </div>
  
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-md shadow-gray-300">
                  <Image 
                    src={exampleImage}
                    alt={`Example image`}
                    className="w-full h-full object-cover grayscale"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
      </main>
  )
}