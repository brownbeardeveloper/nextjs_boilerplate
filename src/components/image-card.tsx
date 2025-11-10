import Image from "next/image";

export default function ImageCard({ path, class: className }: { path: string, class: string }) {
    return (
        <div className={className}>
            <Image src={path} alt="Image" width="1000" height="1000" className="w-full h-full object-cover" />
        </div>
    )
}