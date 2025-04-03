"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Showcase({ projects }: {
    projects: {
        title: string;
        image: string;
        description: string;
        techStack: string;
        href: string;
    }[]
}) {
    const [selected, setSelected] = useState(0);
    const selectedProject = projects[selected]

    return (
        <div className="relative">
            <div className="grid grid-cols-[2fr_3fr_3fr] gap-4">
                <ul className="flex flex-col space-y-2">
                    {projects.map((project, index) => (
                        <Link href={project.href} key={index}>
                            <li
                                className={`${selected === index ? "bg-white shadow-md" : "bg-gray-100"} rounded-2xl px-5 py-5`}
                                onMouseEnter={() => {setSelected(index);
                                    console.log(index);
                                }}
                            >
                                <p className="font-bold">{project.title}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
                <div>
                    <h2>
                        {selectedProject.title}
                    </h2>
                    <p>
                        {selectedProject.description}
                    </p>
                </div>
                <Image 
                    src={selectedProject.image} 
                    alt={`Picture of ${selectedProject.title} project`} 
                    width={1000} 
                    height={1000}
                    className="rounded-xl overflow-hidden"
                />
            </div>
        </div>
    )
}