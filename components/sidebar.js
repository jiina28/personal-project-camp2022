import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar({ children }) {
    const menuItems = [
        {
            href: '#home',
            title: 'Home',
        },
        {
            href: '#info',
            title: 'Info',
        },
        {
            href: '#favorite',
            title: 'My Favorites',
        },
        {
            href: '#contact',
            title: 'Contact',
        },
    ];

    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col">
                <div className="flex flex-col md:flex-row flex-1">
                <aside className="bg-gray-100 w-full md:w-60 fixed md:h-full">
                    <nav>
                        <ul>
                            {menuItems.map(({ href, title }) => (
                                <li className="m-2" key={title}>
                                    <Link href={href}>
                                        <a className={`flex p-2 bg-gray-200 rounded hover:bg-pink-200 cursor-pointer 
                                        ${router.asPath === href && 'bg-gray-400'}`}>
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}