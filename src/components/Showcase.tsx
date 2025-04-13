"use client";

import Image from "next/image";
import { useState } from "react";

export default function Showcase({ projects, className="" }: {
    projects: {
        title: string;
        image: string;
        description: string;
        techStack: string[];
        href: string;
    }[];
    className?: string;
}) {
    const [selected, setSelected] = useState(0);
    const selectedProject = projects[selected]

    return (
        <div className={`${className} relative`}>
            <div className="grid grid-rows-[1fr_1fr] md:grid-rows-[1fr] md:grid-cols-[2fr_3fr_3fr] gap-6">
                <ul className="hidden md:flex flex-col space-y-3 md:order-1">
                    {projects.map((project, index) => (
                        <li key={index}
                            className={`${selected === index ? "bg-white drop-shadow-lg" : "bg-gray-100"} md:rounded-2xl px-5 py-5 transition`}
                            onMouseEnter={() => {setSelected(index); }}
                        >
                            <p className="p-no-colour font-bold text-black">{project.title}</p>
                        </li>
                    ))}
                </ul>
                <div className="overflow-hidden flex flex-col md:order-2 order-2">
                    <div className="flex-grow">
                        <h3 className="h3-default !mt-0 !mb-2">
                            {selectedProject.title}
                        </h3>
                        <p className="p-default mb-4 !text-sm">
                            {selectedProject.description}
                        </p>
                        <ul className="flex flex-row flex-wrap space-y-2 space-x-3 items-start">
                            {selectedProject.techStack.map((tech, techIndex) => (
                                <li key={techIndex} className="bg-gray-200 rounded-lg px-2 py-1 font-bold">
                                    <p className="p-default !text-black !text-sm">{tech}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a href={selectedProject.href}
                        className="flex flex-col items-end"
                        target="_blank"
                    >
                        <p className="p-no-colour font-bold text-sky-600 hover:text-sky-700 active:scale-95">
                            View ⟶
                        </p>
                    </a>
                </div>
                <div className="h-64 relative flex items-center justify-center md:order-3 order-1">
                    <Image 
                        src={selectedProject.image} 
                        alt={`Picture of ${selectedProject.title} project`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl overflow-hidden"
                    />
                    <button onClick={() => setSelected((selected - 1 + projects.length) % projects.length)} className="md:hidden absolute left-0 bg-gray-200 active:bg-white py-5 px-0.5 active:drop-shadow-md transition rounded-md">
                        <Image src='/icons/left-arrow.svg' alt="Left arrow button" width={30} height={30}/>
                    </button>
                    <button onClick={() => setSelected((selected + 1) % projects.length)} className="md:hidden absolute right-0 bg-gray-200 active:bg-white py-5 px-0.5 active:drop-shadow-md transition rounded-md">
                        <Image src='/icons/right-arrow.svg' alt="Right arrow button" width={30} height={30}/>
                    </button>
                </div>
            </div>
        </div>
    )
}