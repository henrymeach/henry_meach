import localFont from "next/font/local"

const bytesizedFont = localFont({ src: "../../public/fonts/Bytesized-Regular.ttf" });

export default function Footer() {
    return (
        <footer className="flex flex-col px-50 bg-gray-900">
            <form action="/submit" method="POST" className="py-10">
                <div className="mb-3">
                    <h2 className="text-4xl text-white">
                        {`Contact Me`}
                    </h2>
                    <label className="block">
                        My inbox is always open for opportunities, so feel free to reach out!
                    </label>
                </div>

                <div className="space-y-3">
                    <div>
                        <label className="block">
                            Your email
                        </label>
                        <input type="email" required className="rounded bg-stone-200 text-black m-width w-full max-w-[475] pl-2 outline-black outline" />
                    </div>
                    <div>
                        <label className="block">
                            Your message
                        </label>
                        <textarea required className="rounded bg-stone-200 text-black m-width w-full max-w-[475] px-2" />
                    </div>
                </div>

                <button className="block rounded bg-blue-500 px-2 py-1" type="submit">Submit</button>
            </form>
            <p className={`${bytesizedFont.className} text-xl flex justify-center`}>
                {`Henry Meach --- © ${new Date().getFullYear()}`}
            </p>
        </footer>
    )
}