import Image from "next/image";
import Link from "next/link";


export default function IconLink({title, href, src}: {
    title: string;
    href: string;
    src: string;
}) {
    return (
        <Link href={href} className="flex flex-row hover:underline decoration-sky-500 items-center space-x-2">
            <Image src={src} alt={`${title} logo`} width={25} height={25} />
                <p className="p-default !text-black">
                    {title}
                </p>
        </Link>
    )
}
