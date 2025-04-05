import { ProjectCard } from "@/components/Card";
import { projects } from "@/data/projects";

export default function Page() {
    return (
        <div className="flex flex-col px-40 space-y-5 my-15">
            <h1 className="h2-default">Projects</h1>
            <section className="grid grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard title={project.title} description={project.description} image={project.image} href={project.href} techStack={project.techStack} />
                    </div>
                ))}
            </section>
        </div>
    )
}