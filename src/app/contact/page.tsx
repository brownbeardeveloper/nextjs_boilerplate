import ContactForm from "@/components/contact";
import Image from "next/image";
import exampleImage from "../../../public/example.png";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full ">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Send us a message.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 overflow-hidden shadow-sm">
          <div className="p-8 md:p-12 flex items-center">
            <ContactForm />
          </div>
          
          <div className="hidden md:block relative">
            <Image 
              src={exampleImage} 
              alt="Contact us" 
              className="absolute inset-0 w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
