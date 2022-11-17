import React from "react";
import Link from "next/link"
import {Menu, Transition} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

const ResponsiveMenu = () => {
    return (
        <Menu as="div" className="md:hidden">
            <Menu.Button>
                {({open}) => (
                    <>
                        {open ? (
                            <XMarkIcon className="w-6 h-6"/>
                        ) : (
                            <Bars3Icon className="w-6 h-6"/>
                        )}
                    </>
                )}
            </Menu.Button>

            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-[20ms]"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-48 py-1 mr-3 origin-top-right rounded-md bg-white dark:bg-slate-800 dark:border-slate-700 border shadow-lg focus:outline-none dark:text-white/80">
                    <Menu.Item>
                        <Link href="/" className="w-full block font-semibold hover:bg-gray-50 dark:hover:bg-white/10 px-4 py-1">Home</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link href="/" className="w-full block font-semibold hover:bg-gray-50 dark:hover:bg-white/10 px-4 py-1">Get Started</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link href="/" className="w-full block font-semibold hover:bg-gray-50 dark:hover:bg-white/10 px-4 py-1">Demo</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link href="https://github.com/onesine/react-tailwindcss-datepicker" target="_blank" className="w-full block font-semibold hover:bg-gray-50 dark:hover:bg-white/10 px-4 py-1">Github</Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default ResponsiveMenu;