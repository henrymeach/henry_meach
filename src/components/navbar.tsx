import localFont from 'next/font/local';
import Link from 'next/link';

const jersey10Font = localFont({ src: '../../public/fonts/Jersey10-Regular.ttf' });

export default function Navbar() {
    return (
        <nav className="flex text-black items-center justify-between">
            <div className="mt-5 text-3xl">
                <h2 className={`${jersey10Font.className}`}>
                    henrymeach.com
                </h2>
            </div>
            <div className="space-x-8">
                <Link href="/projects" className="hover:underline">
                    Projects
                </Link>
                <Link href="/henry" className="hover:underline">
                    About
                </Link>
            </div>
        </nav>
    )
}