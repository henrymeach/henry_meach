import Image from "next/image";
import Link from "next/link";


export default function IconLink({title, href, src}: {
    title: string;
    href: string;
    src: string;
}) {
    return (
        <a target="_blank" href={href} className="flex flex-row hover:!text-sky-600 p-default decoration-sky-300 items-center space-x-2 hover:outline p-2 rounded-md hover:outline-sky-300 hover:bg-sky-100 active:bg-sky-200">
            <Image src={src} alt={`${title} logo`} width={25} height={25} />
                <p>
                    {title}
                </p>
        </a>
    )
}
