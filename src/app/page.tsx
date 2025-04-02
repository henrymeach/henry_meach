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
            Graduated with a Bachelor of Computer Science at Monash University Australia.
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
        <h2 className="text-4xl font-bold">
          Projects
        </h2>
      </div>
    </div>
  );
}
