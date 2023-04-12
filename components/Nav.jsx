import Link from "next/link";
import { useRouter } from "next/router";
import {CalendarDaysIcon} from "@heroicons/react/24/solid";
import {GithubIcon} from "./utils";
import ThemeDropdown from "./ThemeDropdown";
import ResponsiveMenu from "./ResponsiveMenu";

const Nav = () => {
    const router = useRouter();
    const links = [
        {
            text: "Home",
            url: "/"
        },
        {
            text: "Get Started",
            url: "/install"
        },
        {
            text: "Demo",
            url: "/demo"
        }
    ];

    const showLink = ["/install", "/demo", "/theming-options", "/props", "/advanced-features"].includes(router.pathname);

    return (
        <nav className="fixed bg-white z-40 w-full  flex items-center justify-between py-3 md:py-6 px-4 md:px-10 border-b dark:bg-slate-900 dark:border-slate-700">
            <Link href="/" className={`relative group ${router.pathname !== "/" ? "focus:outline-none" : ""}`}>
                <div className={`w-full bg-white text-white/0 dark:bg-slate-900 absolute ${showLink ? 'hidden lg:block' : 'hidden'}`}>.</div>

                <div className="flex item-center space-x-3">
                    <div className="flex items-center space-x-3 cursor-pointer group">
                        <CalendarDaysIcon className="w-6 h-6 text-sky-400"/>

                        <span className="hover:transition-all hover:duration-300 font-medium text-gray-700 group-hover:text-gray-500 dark:text-white/80">React Tailwindcss Datepicker</span>
                    </div>

                    <div className="hidden md:block">
                        <span className="text-xs bg-gray-100 dark:text-white/50 dark:bg-slate-600 dark:border-slate-500 font-semibold text-gray-500 border rounded-full px-2 py-0.5">1.6.0</span>
                    </div>
                </div>
            </Link>

            <div className="flex items-center space-x-6 text-sm font-medium">
                {links.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                        className={`hidden md:block hover:transition-all hover:duration-300 hover:text-sky-500 ${router.pathname === item.url ? "text-sky-500" : "dark:text-white/90"}`}
                    >
                        {item.text}
                    </Link>
                ))}

                <div className="flex items-center space-x-6 md:border-l dark:border-slate-700 md:pl-6">
                    <ThemeDropdown/>

                    <Link className="hidden md:block" href="https://github.com/onesine/react-tailwindcss-datepicker" target="_blank">
                        <GithubIcon className="w-6 h-6 text-gray-500 dark:text-gray-400"/>
                    </Link>

                    <ResponsiveMenu/>
                </div>
            </div>
        </nav>
    );
};

export default Nav;