"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Showcase({ projects }: {
    projects: {
        title: string;
        image: string;
        description: string;
        techStack: string[];
        href: string;
    }[]
}) {
    const [selected, setSelected] = useState(0);
    const selectedProject = projects[selected]

    return (
        <div className="relative">
            <div className="grid grid-cols-[2fr_3fr_3fr] gap-6">
                <ul className="flex flex-col space-y-3">
                    {projects.map((project, index) => (
                        <Link href={project.href} key={index}>
                            <li
                                className={`${selected === index ? "bg-white shadow-md" : "bg-gray-100"} rounded-2xl px-5 py-5`}
                                onMouseEnter={() => {setSelected(index);
                                    console.log(index);
                                }}
                            >
                                <p className="p-default font-bold">{project.title}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
                <div>
                    <h3 className="h3-default !mt-0">
                        {selectedProject.title}
                    </h3>
                    <p className="p-default mb-3">
                        {selectedProject.description}
                    </p>
                    <ul className="flex flex-row flex-wrap space-y-2 space-x-5 items-start">
                        {selectedProject.techStack.map((tech, techIndex) => (
                            <li key={techIndex} className="bg-gray-200 rounded-lg px-2 py-1">
                                <p className="p-default !text-black !text-sm">{tech}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-64 w-full relative flex items-center justify-center">
                    <Image 
                        src={selectedProject.image} 
                        alt={`Picture of ${selectedProject.title} project`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl overflow-hidden"
                    />
                </div>
            </div>
        </div>
    )
}