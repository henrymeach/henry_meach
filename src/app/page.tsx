import { developmentSkills, languageSkills, projectSkills } from "@/data/skills";
import { IconLinkButton } from "@/components/IconLink";
import RevealPicture from "@/components/RevealPicture";
import Showcase from "@/components/Showcase";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import SkillIcon from "@/components/Icon";

export default function Home() {
  return (
    <div className="flex mt-15 flex-col space-y-15">
      <section className="px-40" >
        <div className="flex flex-row justify-between items-center mb-8">
          <div>
            <RevealPicture>
              <h2 className="h2-default">
                I'm Henry.<sup className="text-xs align-super">(hover over me!)</sup>
              </h2>
            </RevealPicture>
            <div className="flex items-center space-x-1">
              <Image src="/icons/location-pin.svg" alt="Location Pin Icon" width={15} height={15} />
              <p className="p-default">
                Melbourne, Australia
              </p>
            </div>
            
          </div>
          
          <ul className="flex flex-row space-x-3">
            <li>
              <IconLinkButton title="LinkedIn" href="https://linkedin.com/in/henry-meach-26245716b/" src="/logos/linkedin/LI-In-Bug.png"/>
            </li>
            <li>
              <IconLinkButton title="GitHub" href="https://github.com/henrymeach" src="/logos/github/github-mark.png"/>
            </li>
          </ul>
        </div>

        <p className="p-default max-w-2/3">
          I'm a <b>Software Developer</b> who graduated with a Bachelor of Computer Science in 2024, and I'm constantly trying to learn and refine my knowledge of different technologies.
          My hope is that you enjoy this website as much as I did making it.
        </p>
      </section>

      <section className="flex flex-col px-40">
        <Link href="/projects" className="w-fit">
          <h2 className="hover:!text-sky-600 active:!text-sky-700 h2-default">
            Projects ⟶
          </h2>
        </Link>

        <p className="p-default max-w-2/3 mb-10">
          Some of my projects I've completed throughout the years.
        </p>

        <Showcase projects={projects} />

      </section>

      <section className="flex flex-col px-40 mb-20">
          <h2 className="h2-default">
            Skills
          </h2>

          <p className="p-default max-w-2/3 mb-5">
            A variety of tools I've tinkered around with.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="h3-default mb-5">
                Languages
              </h3>

              <div className="grid grid-cols-7 gap-4">
                {languageSkills.map((skill, index) => (
                  <SkillIcon key={index} src={skill.src} alt={skill.src} title={skill.title} description={skill.description} />
                ))}

              </div>
            </div>

            <div>
              <h3 className="h3-default mb-5">
                Development
              </h3>

              <div className="grid grid-cols-7 space-y-5">
                {developmentSkills.map((skill, index) => (
                  <SkillIcon key={index} src={skill.src} alt={skill.src} title={skill.title} description={skill.description} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="h3-default mb-5">
                Project Management & Design
              </h3>
              <div className="grid grid-cols-7 gap-4">
                {projectSkills.map((skill, index) => (
                  <SkillIcon key={index} src={skill.src} alt={skill.src} title={skill.title} description={skill.description} />
                ))}
              </div>
            </div>
          </div>

      </section>

    </div>
  );
}
