import localFont from 'next/font/local';
import Link from 'next/link';

const jersey10Font = localFont({ src: '../../public/fonts/Jersey10-Regular.ttf' });

export default function Navbar({className}: {
    className?: string;
}) {
    return (
        <nav className={`${className} flex text-black items-center justify-between mt-8`}>
            <div>
                <Link href="/">
                    <h2 className={`${jersey10Font.className} text-3xl active:scale-110`}>
                        henrymeach.com
                    </h2>
                </Link>
            </div>
            <ul className='flex flex-row space-x-8 p-default !text-black font-black'>
                <li>
                    <Link href="/">
                        <p className="hover:!text-sky-600 active:scale-110">
                            Home
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <p className="hover:!text-sky-600 active:scale-110">
                            Projects
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/henry">
                        <p className="hover:!text-sky-600 active:scale-110">
                            About
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <p className="hover:!text-sky-600 active:scale-110">
                            Contact
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
