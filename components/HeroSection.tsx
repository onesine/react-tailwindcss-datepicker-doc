import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row py-8 md:py-12 lg:py-20">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-sky-500 text-3xl md:text-5xl lg:text-6xl font-bold">
                    React Tailwindcss <br className="hidden lg:block" /> Datepicker
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-8 font-medium">
                    A modern date range picker component for React using Tailwind 3 and dayjs.
                </p>

                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-4">
                    <Link
                        href="/install"
                        className="text-xs md:text-sm rounded-full text-white font-medium bg-sky-500 border-sky-600 hover:bg-sky-600 py-2.5 px-6 dark:bg-sky-600"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="https://github.com/onesine/react-tailwindcss-datepicker"
                        target="_blank"
                        className="text-xs md:text-sm rounded-full text-gray-900 font-medium bg-gray-200/50 border hover:bg-gray-300/50 py-2.5 px-6 dark:text-white/80 dark:bg-white/10 dark:hover:bg-white/20 dark:border-slate-700"
                    >
                        View on GitHub
                    </Link>
                    <Link
                        href="/demo"
                        className="text-xs md:text-sm rounded-full text-gray-900 font-medium bg-gray-200/50 border hover:bg-gray-300/50 py-2.5 px-6 dark:text-white/80 dark:bg-white/10 dark:hover:bg-white/20 dark:border-slate-700"
                    >
                        Demo
                    </Link>
                </div>
            </div>

            <div className="flex justify-center lg:justify-start lg:flex-none lg:w-1/2 lg:pl-28 lg:relative">
                <CalendarDaysIcon className="lg:absolute lg:-top-5 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 text-sky-500" />
            </div>
        </div>
    );
};

export default HeroSection;
