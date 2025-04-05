"use client";

import localFont from "next/font/local"
import Image from "next/image";
import { useState } from "react";

const bytesizedFont = localFont({ src: "../../public/fonts/Bytesized-Regular.ttf" });

function TextBox({ text, className }: {
    text: string;
    className?: string;
}) {
    return (
        <div className={`${className} rounded bg-gray-800 p-1`}>
            <p className="p-no-colour !text-sm">
                {text}
            </p>
        </div>
    )
}

export default function Footer({id, className}: {
    id?: string;
    className?: string;
}) {
    const email: string = "henrymeach2@gmail.com";
    const [clicked, setClicked] = useState<boolean>(false);

    const onCopy = async () => {
        await navigator.clipboard.writeText(email).then(() => {
            setClicked(true);
        });

        await new Promise(resolve => setTimeout(resolve, 2000));
        setClicked(false);
    }

    return (
        <footer className={`${className} flex flex-col bg-gray-900 h-screen`} id={id}>
            <section className="my-10 space-y-7 flex-grow">
                <div>
                    <h2 className="h2-no-colour text-white">
                        Contact Me
                    </h2>
                    <p className="p-no-colour">
                        My inbox is always open for opportunities, so feel free to reach out!
                    </p>
                </div>

                <form action="/submit" method="POST">
                    <div className="space-y-3">
                        <div>
                            <label className="block p-no-colour font-bold">
                                Your Email <sup>(required)</sup>
                            </label>
                            <input type="email" required className="rounded bg-stone-200 text-black m-width w-full max-w-[475] px-2 py-1 outline-black outline" />
                        </div>
                        <div>
                            <label className="block p-no-colour font-bold">
                                Message <sup>(required)</sup>
                            </label>
                            <textarea required className="rounded bg-stone-200 text-black m-width w-full max-w-[475] px-2 py-1" />
                        </div>
                    </div>

                    <button className="block rounded bg-blue-500 px-2 py-1" type="submit">
                        <p className="p-no-colour font-bold">
                            Submit
                        </p>
                    </button>
                </form>

                <p className="p-no-colour flex">
                    Alternatively, feel free to send me an email at
                    <button onClick={() => onCopy()} className="flex relative items-center space-x-1 cursor-pointer rounded hover:outline hover:outline-orange-500 text-orange-400 px-1 mx-1 active:scale-105">
                        {clicked ? <TextBox text="Copied!" className="absolute left-1/2 -translate-x-1/2 bottom-[120%]" /> : null}
                        <span className="font-bold">
                            {email}
                        </span>
                        <Image src="/icons/copy.svg" alt="Copy email button" width={20} height={20} />
                    </button>
                </p>
            </section>

            <p className={`p-no-colour flex justify-center mb-3`}>
                {`© ${new Date().getFullYear()} — Henry Meach`}
            </p>
        </footer>
    )
}
