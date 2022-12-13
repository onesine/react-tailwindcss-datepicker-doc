import { Html, Head, Main, NextScript } from 'next/document'
import {useEffect} from "react";

export default function Document() {
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <Html className="scroll-smooth scroll-pt-[85px]">
            <Head />
            <body className="antialiased text-gray-800 dark:text-white dark:bg-slate-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};