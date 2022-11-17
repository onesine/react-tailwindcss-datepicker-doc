import React, {useContext} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ComputerDesktopIcon, MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {ThemeContext} from "./ThemeProvider";

const ThemeDropdown = () => {
    const {theme, changeTheme} = useContext(ThemeContext);

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="hidden md:block">
                {theme === "light" && (
                    <SunIcon className="w-6 h-6 text-sky-400"/>
                )}

                {theme === "dark" && (
                    <MoonIcon className="w-6 h-6 text-sky-400"/>
                )}

                {theme === "system" && (
                    <>
                        {window.matchMedia('(prefers-color-scheme: dark)').matches ? (
                            <MoonIcon className="w-6 h-6 text-sky-400"/>
                        ) : (
                            <SunIcon className="w-6 h-6 text-sky-400"/>
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
                <Menu.Items className="absolute right-0 mt-2 w-32 py-1 origin-top-right rounded-md bg-white dark:bg-slate-800 dark:border-slate-700 border shadow-lg focus:outline-none">
                    {["Light", "Dark", "System"].map((item, index) => (
                        <Menu.Item key={index}>
                            <button
                                className={`w-full flex items-center space-x-3 font-semibold hover:bg-gray-50 dark:hover:bg-white/10 px-4 py-1`}
                                onClick={() => changeTheme(item.toLowerCase())}
                            >
                                {item === "Light" && (
                                    <SunIcon className={`w-6 h-6 ${item.toLowerCase() === theme ? "text-sky-500" : "text-gray-400"}`}/>
                                )}

                                {item === "Dark" && (
                                    <MoonIcon className={`w-6 h-6 ${item.toLowerCase() === theme ? "text-sky-500" : "text-gray-400"}`}/>
                                )}

                                {item === "System" && (
                                    <ComputerDesktopIcon className={`w-6 h-6 ${item.toLowerCase() === theme ? "text-sky-500" : "text-gray-400"}`}/>
                                )}

                                <span className={`${item.toLowerCase() === theme ? "text-sky-600" : "text-gray-600 dark:text-white/80"}`}>{item}</span>
                            </button>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default ThemeDropdown;