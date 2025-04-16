import { developmentSkills, languageSkills, projectSkills } from "@/data/skills";
import { IconLinkButton } from "@/components/IconLink";
import RevealPicture from "@/components/RevealPicture";
import Showcase from "@/components/Showcase";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Tabs from "@/components/SkillsTabs";
import ExperienceList from "@/components/ExperienceList";

export default function Home() {
  const skillsTabs = [{
    header: "Languages",
    skills: languageSkills
  }, {
    header: "Development",
    skills: developmentSkills
  }, {
    header: "Project Management",
    skills: projectSkills
  }];

  return (
    <div className="flex md:mt-15 flex-col space-y-15">
      <section className="edge">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center mb-8">
          <div>
            <RevealPicture>
              <h2 className="h2-default">
                I&apos;m <b className="!text-sky-600">Henry</b>.<sup className="text-xs align-super">(hover/tap me!)</sup>
              </h2>
            </RevealPicture>
            <div className="flex space-x-1">
              <Image src="/icons/location-pin.svg" alt="Location Pin Icon" width={15} height={15} />
              <p className="p-default">
                Melbourne, Australia
              </p>
            </div>
            
          </div>
          
          <ul className="flex flex-row space-x-3 -translate-x-2 md:translate-x-2 mt-2 md:mt-0">
            <li>
              <IconLinkButton title="LinkedIn" href="https://linkedin.com/in/henry-meach-26245716b/" src="/logos/linkedin/LI-In-Bug.png"/>
            </li>
            <li>
              <IconLinkButton title="GitHub" href="https://github.com/henrymeach" src="/logos/github/github-mark.png"/>
            </li>
          </ul>
        </div>

        <p className="p-default md:max-w-2/3">
          I&apos;m a <b>Software Developer</b> who graduated with a Bachelor of Computer Science in 2024, and I&apos;m constantly trying to learn and refine my knowledge of different technologies.
          My hope is that you enjoy this website as much as I did making it.
        </p>
      </section>

      <section className="flex flex-col edge space-y-6">
        <ExperienceList />
        <div className="flex justify-end">
          <a href="/documents/henry-meach-cv.pdf" download={"henry-meach-cv"}>
          <button className="flex flex-row space-x-3 rounded px-5 py-2 cursor-pointer transition outline-2 bg-white outline-sky-500 hover:outline-sky-600 active:outline-sky-700 active:drop-shadow-md text-sky-500 hover:text-sky-600 active:text-sky-700">
            <Image src="icons/pdf.svg" alt="pdf icon" width={20} height={20}/>
            <p className="p-no-colour font-bold">
              Download Resume
            </p>
          </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col edge">
        <Link href="/projects" className="w-fit">
          <h2 className="hover:!text-sky-600 active:!text-sky-700 h2-default">
            Projects ⟶
          </h2>
        </Link>

        <p className="p-default md:max-w-2/3 mb-10">
          Some of my projects I&apos;ve completed throughout the years.
        </p>

        <Showcase projects={projects} />

      </section>

      <section className="flex flex-col edge mb-20">
          <h2 className="h2-default">
            Skills
          </h2>

          <p className="p-default md:max-w-2/3 mb-10">
            A variety of tools I&apos;ve tinkered around with.
          </p>

          <Tabs tabs={skillsTabs} />

      </section>

    </div>
  );
}
