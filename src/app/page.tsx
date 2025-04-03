import Card from "@/components/card";
import IconLink from "@/components/IconLink";
import Showcase from "@/components/Showcase";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex mt-30 flex-col space-y-20">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="h2-default">
            I'm Henry.
          </h2>
          <p className="p-default">
            I graduated with a Bachelor of Computer Science in 2024.
          </p>
        </div>
        
        <ul className="flex flex-row space-x-10">
          <li>
            <IconLink title="GitHub" href="https://github.com/henrymeach" src="/logos/github/github-mark.png"/>
          </li>
          <li>
            <IconLink title="LinkedIn" href="https://linkedin.com/in/henry-meach-26245716b/" src="/logos/linkedin/LI-In-Bug.png"/>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="h2-default">
          Projects
        </h2>

        <p className="p-default mb-5">
          Some of my projects I've worked on throughout the years.
        </p>

        <Showcase projects={projects}/>

      </div>
    </div>
  );
}
