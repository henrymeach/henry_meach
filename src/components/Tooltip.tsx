export default function Tooltip({text, className}: {
    text: string;
    className?: string;
}) {
    return (
        <div className={`${className} hidden group-active:flex absolute bottom-full bg-gray-900 p-2 rounded left-1/2 -translate-x-1/2 transition`}>
            <p className="p-no-colour text-white !text-sm">
                {text}
            </p>
            <div className="absolute top-full -translate-y-2 left-1/2 -translate-x-1/2  w-3 h-3 bg-gray-900 rotate-45" />
        </div>
    )
}