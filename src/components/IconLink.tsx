import Image from "next/image";

export default function IconLink({title, href, src, className}: {
    title?: string;
    href: string;
    src: string;
    className?: string;
}) {
    return (
        <a target="_blank" href={href} className={`${className} flex flex-row font-bold p-no-colour active:scale-95 items-center space-x-1 px-2`}>
            <Image src={src} alt={`${title} logo`} width={18} height={18} />
                {title ?
                <span>
                    {title}
                </span>
                : null
                }
        </a>
    )
}

export function IconLinkButton({title, href, src}: {
    title?: string;
    href: string;
    src: string;
}) {
    return (
        <a target="_blank" href={href} className="flex flex-row font-bold hover:!text-sky-600 p-default decoration-sky-300 items-center space-x-2 p-2 rounded-md hover:bg-sky-100 active:bg-sky-200">
            <Image src={src} alt={`${title} logo`} width={25} height={25} />
                {title ?
                <span>
                    {title}
                </span>
                : null
                }
        </a>
    )
}
