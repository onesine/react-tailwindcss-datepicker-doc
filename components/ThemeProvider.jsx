import {createContext, useEffect, useMemo, useState} from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

        function changeTheme (event) {
            if (!localStorage.theme) {
                if (event.matches && theme !== "dark") {
                    setTheme("dark");
                }

                if (!event.matches && theme !== "light") {
                    setTheme("light");
                }
            }
        }

        darkModePreference.addEventListener("change", changeTheme);

        if (theme === "dark") {
            document.documentElement.classList.add('dark');
        }

        if (theme === "light")
        {
            document.documentElement.classList.remove('dark');
        }

        if (theme === "system") {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        return () => {
            darkModePreference.removeEventListener("change", changeTheme);
        }
    }, [theme]);

    const handleThemeChange = (newTheme) => {
        if (newTheme === "system") {
            localStorage.removeItem('theme');
        } else {
            localStorage.theme = newTheme;
        }
        setTheme(newTheme);
    };

    const value = useMemo(() => {
        return {
            theme,
            changeTheme: handleThemeChange
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;