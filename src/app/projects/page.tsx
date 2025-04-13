import { ProjectCard } from "@/components/Card";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Projects',
};

export default function Page() {
    return (
        <div className="edge flex flex-col space-y-15 md:my-15 mt-0 mb-15">
            <section>
                <h1 className="h2-default">Projects</h1>
                <p className="p-default md:max-w-65/100">A variety of ideas that have piqued my interest enough for me to develop a project around them.
                    I also like experimenting with different tools to do what I need to do.
                </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard title={project.title} description={project.description} image={project.image} href={project.href} techStack={project.techStack} />
                    </div>
                ))}
            </section>
        </div>
    )
}