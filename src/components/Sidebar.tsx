import Image from "next/image";
import { Links } from "./Navbar";

export interface SidebarProps {
    onExit: () => void;
}

export default function Sidebar({onExit = () => {}}: SidebarProps) {
    return (
        <div className="md:hidden fixed bg-white z-50 top-0 left-0 h-full w-full">
            <button onClick={onExit} className="absolute right-[2%] top-[2%] w-15 h-15 active:drop-shadow-md active:bg-white rounded-lg transition">
                <Image src="/icons/x.svg" alt="Exit sidebar button" fill />
            </button>
            <Links onExit={onExit} />
        </div>
    );
}