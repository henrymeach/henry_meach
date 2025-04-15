import Image from "next/image";

function Tooltip({description, className}: {
    description: string;
    className?: string;
}) {
    return (
        <div data-popper-arrow className={`${className} absolute -translate-y-[110%] bg-gray-800 p-3 rounded`}>
            <p className="p-no-colour text-white !text-xs">
                {description}
            </p>
        </div>
    )
}

export default function SkillIcon({src, alt, title, description, className}: {
    src: string;
    alt: string;
    title: string;
    description: string;
    className?: string;
}) {
    return (
        <div className={`flex flex-col items-center relative group transition`}>
            <Image src={src} alt={alt} width={100} height={100} className={`${className} rounded-xl h-14 w-14 drop-shadow-xl overflow-hidden hover:scale-105 mb-2 transition`} />
            <p className="p-default text-center font-medium">
                {title}
            </p>
            <Tooltip description={description} className="opacity-0 group-active:opacity-100 group-hover:opacity-100 pointer-events-none" />
        </div>
    )
}