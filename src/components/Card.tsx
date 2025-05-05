import Image from "next/image";

export function ProjectCard({ title, description, image, href, repo_href, techStack }: {
    title: string;
    description: string;
    image: string;
    href?: string;
    techStack: string[];
    repo_href?: string;
}) {
    return (
        <div className="rounded-2xl outline-2 overflow-hidden bg-white outline-gray-200 hover:shadow-lg hover:-translate-y-1 active:shadow-lg active:-translate-y-1 active:bg-gray-100 active:outline-gray-300 transition">
            <div className="relative aspect-[16/8]">
                <Image src={image} alt={`${title} image.`} fill={true} className="object-cover" />
            </div>
            <div className="space-y-8 px-8 pb-8">
                <div>
                    <h3 className="h3-default">
                        {title}
                    </h3>
                    <p className="p-default">
                        {description}
                    </p>
                </div>
                <div className="flex flex-row flex-wrap space-y-2 space-x-3 items-start">
                    {techStack.map((tech, index) => (
                        <div key={index} className="bg-gray-300 rounded-md px-2 py-1">
                            <p className="p-default font-bold">
                                {tech}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end space-x-6">
                    {repo_href &&
                    <a href={repo_href} target="_blank">
                        <p className='p-no-colour font-bold text-orange-600 hover:text-orange-700 active:text-orange-700'>
                            Code ⟶
                        </p>
                    </a>
                    }
                    { href &&
                    <a href={href} target="_blank">
                        <p className='p-no-colour font-bold text-sky-600 hover:text-sky-700 active:text-sky-700'>
                            View ⟶
                        </p>
                    </a>
                    }
                </div>
            </div>
        </div>
    )
}
