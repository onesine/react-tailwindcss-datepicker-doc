import {useRouter} from "next/router";
import Link from "next/link";

const AdvancedFeaturesAside = () => {
    const router = useRouter();
    const links = {
        "On this page": [
            {
                text: "Configs Shortcuts & Footer",
                url: "#configs"
            },
            {
                text: "Localization (i18n)",
                url: "#localization"
            }
        ],
    }
    return (
        <aside className="transition-all duration-300 lg:duration-[0s] overflow-y-auto w-0 xl:w-[272px] h-screen fixed top-0 right-0 pt-32 pb-10">
            <div className="border-l-[.5px] border-gray-500 border-opacity-60">
                <div className="mx-6 text-sm space-y-6">
                    {(Object.entries(links)).map(([key, item], index) => (
                        <div key={index} className="border-t first:border-none pt-3 dark:border-slate-700">
                            <h5 className="font-bold mb-2 truncate">{key}</h5>
                            <ul>
                                {item.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.url}
                                            className={`block font-medium py-1 ${router.pathname === item.url ? "text-sky-500" : "text-gray-500 hover:text-sky-500 truncate"}`}
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
            </div>
                <div className="transition-all duration-300 lg:duration-[0s] bg-gradient-to-b from-transparent via-zinc-50/20 to-zinc-70 dark:via-slate-900/70 dark:to-slate-900 h-16 fixed w-0 xl:w-[272px] bottom-0 right-0 z-10">

                </div>
                <div className="transition-all duration-300 lg:duration-[0s] bg-gradient-to-t from-transparent via-zinc-50/20 to-zinc-70 dark:via-slate-900/70 dark:to-slate-900 h-32 fixed w-0 xl:w-[272px] top-0 right-0 z-10">

                </div>
        </aside>
    );
};

export default AdvancedFeaturesAside;