import FlashCards from "@/components/FlashCards";
import { images } from "@/data/images";
import Image from "next/image";

export default function Page() {
    const pictures = images;

    return (
        <div className="grid grid-col">
            <section className="edge grid grid-rows md:grid-cols-[4fr_5fr] md:py-40 pb-15 bg-emerald-50">
                <div className="flex flex-col justify-center mb-20 md:mb-0">
                    <h1 className="h2-default inline-block">
                        About Henry
                    </h1>
                    <p className="p-default !text-lg">
                        Hi, I&apos;m Henry. When I&apos;m not working on my personal projects you can probably find me doomscrolling or playing League of Legends.
                        Going outside is also something I may invest some time into doing occasionally.
                        <br/><br/>
                        I love designing and engineering good-looking and, more importantly, <b>un-frustrating</b> user experiences.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <FlashCards images={pictures} />
                </div>
            </section>
            {/* <section className="px-40">
                <h2 className="h2-default">
                    Type Racing
                </h2>
                <p className="p-default !text-lg">
                    Over the years I've become an esteemed type racer, able to gallop on my trusty keyboard at a max speed of 171 words per minute.
                </p>
            </section> */}
            <section className="flex justify-center items-center my-25">
                <Image src="/images/under_construction.png" alt="Under construction sign" width={200} height={200} />
            </section>
        </div>
    )
}