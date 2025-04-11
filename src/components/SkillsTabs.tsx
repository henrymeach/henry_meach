'use client';

import { useState } from "react";
import SkillIcon from "./Icon";
import clsx from "clsx";

export default function Tabs({ tabs }: {
    tabs: {
       header: string;
       skills: {
        src: string;
        alt: string;
        title: string;
        description: string;
       }[];
    }[];
}) {
    const [selected, setSelected] = useState(0);
    const selectedTab = tabs[selected];

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row bg-gray-100 justify-around rounded-md p-1.25 space-x-2 mb-2 w-full">
                {/* Tab headers */}
                {tabs.map((tab, index) => (
                    <button key={index} onClick={() => setSelected(index)} 
                        className={clsx(
                            'p-no-colour h-full w-full rounded-xl p-3 font-bold transition duration-200 cursor-pointer',
                            selected === index && "bg-white drop-shadow-sm text-black",
                            selected !== index && "hover:bg-gray-200 active:bg-gray-300 text-gray-700"
                        )}
                    >
                        {tab.header}
                    </button>
                ))}
            </div>
            
            {/* Tab content */}
            <div className="grid grid-cols-7 space-y-4 rounded py-4 w-[97%]">
                {selectedTab.skills.map((skill, index) => (
                    <SkillIcon key={index} src={skill.src} alt={skill.src} title={skill.title} description={skill.description} />
                ))}
            </div>
        </div>
    )
}