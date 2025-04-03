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
            <div className="rounded outline w-1/3">
                <div className="max-h-40 overflow-hidden">
                    <Image src={image} alt={`${title} image.`} layout="responsive" width={500} height={50} />
                </div>
                <div className="px-5 py-2">
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}