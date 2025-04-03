import Card from "@/components/card";
import Showcase from "@/components/Showcase";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex mt-30 flex-col space-y-20">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-4xl mb-3 font-bold">
            I'm Henry.
          </h2>
          <p>
            I graduated with a Bachelor of Computer Science in 2024.
          </p>
        </div>
        
        <ul className="flex flex-row space-x-10">
          <li>
            <Link href="https://github.com/henrymeach" className="flex flex-row items-center space-x-2">
              <Image src="/logos/github/github-mark.png" alt="GitHub logo" width={30} height={30} />
              <p className="hover:underline">
                GitHub
              </p>
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/henry-meach-26245716b/" className="flex flex-row items-center space-x-2">
              <Image src="/logos/linkedin/LI-In-Bug.png" alt="LinkedIn logo" width={30} height={30} />
              <p className="hover:underline">
                LinkedIn
              </p>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-4xl mb-3 font-bold">
          Projects
        </h2>

        <p>
          Some of my projects I've worked on throughout the years.
        </p>


        <Showcase projects={[
          {
              title: "Hello",
              description: "This is the description",
              image: "/henry.png",
              techStack: "Python",
              href: "/hello"
          },
          {
              title: "Weather App",
              description: "A simple weather app that fetches real-time weather data.",
              image: "/weather.png",
              techStack: "React, TypeScript, OpenWeather API",
              href: "/weather"
          },
          {
              title: "E-Commerce Platform",
              description: "An online store with product listings, cart, and checkout.",
              image: "/ecommerce.png",
              techStack: "Next.js, Tailwind CSS, Stripe API",
              href: "/ecommerce"
          },
          {
              title: "Portfolio Website",
              description: "A personal portfolio showcasing projects and blog posts.",
              image: "/portfolio.png",
              techStack: "Next.js, Tailwind CSS, MDX",
              href: "/portfolio"
          },
          {
              title: "Task Manager",
              description: "A task management app with drag-and-drop functionality.",
              image: "/taskmanager.png",
              techStack: "React, Redux, Firebase",
              href: "/task-manager"
          }
        ]}/>

        {/* <Card title="Hello" description="This is a sample description lorem ipsum delorums" image="/henry.png" href="ello" /> */}
      </div>
    </div>
  );
}
