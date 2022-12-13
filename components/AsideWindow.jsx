import {useRouter} from "next/router";
import {useEffect, useRef} from "react";

const AsideWindow = ({links = []}) => {
    const verticalDashRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const dash = verticalDashRef?.current;
        if (dash) {
            function moveVerticalDashTo (element) {
                let position = 45;
                for(const value of links["On this page"]) {
                    if ( element === value.url.slice(1, value.url.length) ) {
                        break;
                    }
                    position = position + 28;
                }

                if (dash.classList.contains("opacity-0")) {
                    dash.classList.remove("opacity-0");
                    dash.classList.add("opacity-1");
                }
                dash.style.top = `${position}px`;
            }

            const callback = (entries) => {
                for (const entry of entries) {
                    if (entry.intersectionRatio > 0) {
                        moveVerticalDashTo(entry.target.id);
                    }
                }
            };

            const bottom = Math.round(window.innerHeight * .3);
            const observer = new IntersectionObserver(callback, {
                rootMargin: `0px 0px -${bottom}px 0px`,
            });

            for (const value of links["On this page"]) {
                const element = document.getElementById(value.url.slice(1, value.url.length));
                observer.observe(element)
            }
        }
    }, [links]);

    return (
        <aside className="transition-all duration-300 lg:duration-[0s] overflow-y-auto w-0 xl:w-[272px] h-screen fixed top-0 right-0 pt-32 pb-10">
            <div className="relative border-l border-gray-300 dark:border-slate-700 border-opacity-60">
                <div
                    ref={verticalDashRef}
                    className="absolute transition-all duration-100 h-[18px] border-l left-[-1px] border-sky-500 opacity-0"
                    style={{top: "45px"}}
                />

                <div className="mx-6 text-sm space-y-6">
                    {(Object.entries(links)).map(([key, item], index) => (
                        <div key={index} className="border-t first:border-none pt-3 dark:border-slate-700">
                            <h5 className="font-bold mb-2 truncate">{key}</h5>
                            <ul>
                                {item.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.url}
                                            className={`block font-medium py-1 ${router.pathname === item.url ? "text-sky-500" : "text-gray-500 hover:text-sky-500 truncate"}`}
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="transition-all duration-300 lg:duration-[0s] bg-gradient-to-b from-transparent via-zinc-50/20 to-zinc-70 dark:via-slate-900/70 dark:to-slate-900 h-16 fixed w-0 xl:w-[272px] bottom-0 right-0 z-10"/>
            <div className="transition-all duration-300 lg:duration-[0s] bg-gradient-to-t from-transparent via-zinc-50/20 to-zinc-70 dark:via-slate-900/70 dark:to-slate-900 h-32 fixed w-0 xl:w-[272px] top-0 right-0 z-10"/>
        </aside>
    );
};

export default AsideWindow;