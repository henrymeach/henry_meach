import FlashCards from "@/components/FlashCards";
import { images } from "@/data/images";
import Image from "next/image";

export default function Page() {
    const pictures = images;

    return (
        <div className="grid grid-col">
            <section className="grid grid-cols-[3fr_4fr] px-40 bg-emerald-100">
                <div className="flex flex-col justify-center">
                    <h1 className="h2-default inline-block">
                        About Henry
                    </h1>
                    <p className="p-default">
                        Hi, I'm Henry. When I'm not working on my personal projects you can probably find me doomscrolling or playing League of Legends. Developing software is a hobby for me, and I love the design aspect of it.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <FlashCards images={pictures} />
                </div>
            </section>
        </div>
    )
}