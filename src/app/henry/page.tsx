import FlashCards from "@/components/FlashCards";
import { images } from "@/data/images";

export default function Page() {
    const pictures = images;

    return (
        <div className="grid grid-col">
            <section className="grid grid-cols-[4fr_5fr] px-40 h-150 bg-emerald-100">
                <div className="flex flex-col justify-center">
                    <h1 className="h2-default inline-block">
                        About Henry
                    </h1>
                    <p className="p-default !text-lg">
                        Hi, I'm Henry. When I'm not working on my personal projects you can probably find me doomscrolling or playing League of Legends.
                        Going outside is also something I may invest some time into doing occasionally.
                        <br/><br/>
                        I love designing and engineering good-looking and, more importantly, <b>un-frustrating</b> user experiences.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <FlashCards images={pictures} />
                </div>
            </section>
        </div>
    )
}