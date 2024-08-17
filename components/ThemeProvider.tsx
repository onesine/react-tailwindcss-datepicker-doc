import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

export type ThemeType = "light" | "dark" | "system";

interface ThemeContextType {
    theme: ThemeType;
    changeTheme: (value: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    changeTheme: () => {}
});

interface Props {
    children: ReactNode;
}

const ThemeProvider = (props: Props) => {
    const { children } = props;

    const [theme, setTheme] = useState<ThemeType>("light");

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

        function changeTheme(event: MediaQueryListEvent) {
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
            document.documentElement.classList.add("dark");
        }

        if (theme === "light") {
            document.documentElement.classList.remove("dark");
        }

        if (theme === "system") {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }

        return () => {
            darkModePreference.removeEventListener("change", changeTheme);
        };
    }, [theme]);

    const handleThemeChange = (newTheme: ThemeType) => {
        if (newTheme === "system") {
            localStorage.removeItem("theme");
        } else {
            localStorage.theme = newTheme;
        }
        setTheme(newTheme);
    };

    const value = useMemo(() => {
        return {
            theme,
            changeTheme: handleThemeChange
        };
    }, [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
