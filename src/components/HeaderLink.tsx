import Link from "next/link";

export default function HeaderLink({title, href}: {
    title: string;
    href: string;
}) {
    return (<Link className="relative" href={href}>
        <h2 className="h2-default">
            {title}
        </h2>
        <div className="absolute top-2/3 bg-sky-100 w-full h-full -z-1" />
    </Link>)
}