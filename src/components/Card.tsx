import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, image, href }: {
    title: string;
    description: string;
    image: string;
    href: string;
}) {
    return (
        <Link href={href}>
            <div className="rounded-md outline-2 hover:outline-sky-500 hover:bg-sky-100 active:bg-sky-200">
                <div className="overflow-hidden relative aspect-[16/7]">
                    <Image src={image} alt={`${title} image.`} fill={true} className="object-cover" />
                </div>
                <div className="px-5 py-2">
                    <h3 className="h3-default">
                        {title}
                    </h3>
                    <p className="p-default">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}


export function ProjectCard({ title, description, image, href, techStack }: {
    title: string;
    description: string;
    image: string;
    href: string;
    techStack: string[];
}) {
    return (
        <Link href={href}>
            <div className="rounded-2xl outline-2 overflow-hidden bg-white outline-gray-200 hover:shadow-lg hover:-translate-y-2 active:shadow-lg active:-translate-y-2 active:bg-gray-100 active:outline-gray-300 transition">
                <div className="relative aspect-[16/8]">
                    <Image src={image} alt={`${title} image.`} fill={true} className="object-cover" />
                </div>
                <div className="space-y-8 px-8 pb-8">
                    <div>
                        <h3 className="h3-default">
                            {title}
                        </h3>
                        <p className="p-default">
                            {description}
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap space-y-2 space-x-3 items-start">
                        {techStack.map((tech, index) => (
                            <div key={index} className="bg-gray-300 rounded-md px-2 py-1">
                                <p className="p-default font-bold">
                                    {tech}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}
