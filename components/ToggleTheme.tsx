import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useContext, useMemo } from "react";

import { ThemeContext } from "./ThemeProvider";

const ToggleTheme = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    const right = useMemo(() => {
        return (
            theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    }, [theme]);

    return (
        <div
            className="my-4 w-12 h-6 bg-gray-100 dark:bg-white/20 cursor-pointer shadow-sm rounded-full"
            onClick={() => {
                changeTheme(theme === "dark" ? "light" : "dark");
            }}
        >
            <div
                className={`transition-all duration-300 h-6 w-6 bg-white dark:bg-slate-800 rounded-full shadow-sm ${right ? "translate-x-full" : ""}`}
            >
                {theme === "light" && <SunIcon className="w-6 h-6 p-1 text-sky-400" />}

                {theme === "dark" && <MoonIcon className="w-6 h-6 p-1 text-sky-400" />}

                {theme === "system" && (
                    <>
                        {window.matchMedia("(prefers-color-scheme: dark)").matches ? (
                            <MoonIcon className="w-6 h-6 p-1 text-sky-400" />
                        ) : (
                            <SunIcon className="w-6 h-6 p-1 text-sky-400" />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ToggleTheme;
