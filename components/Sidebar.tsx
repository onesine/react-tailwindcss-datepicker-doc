import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter();
    const links = {
        "Get Started": [
            {
                text: "Install",
                url: "/install"
            },
            {
                text: "Demo",
                url: "/demo"
            }
        ],
        Customization: [
            {
                text: "Theming options",
                url: "/theming-options"
            },
            {
                text: "Props",
                url: "/props"
            },
            {
                text: "Advanced Features",
                url: "/advanced-features"
            }
        ]
    };
    return (
        <aside className="transition-all duration-300 lg:duration-[0s] overflow-hidden w-0 lg:w-[272px] h-screen fixed top-0 left-0 bg-zinc-50 dark:bg-slate-800 z-50">
            <Link
                href="/"
                className="h-[72px] w-full flex items-center justify-center font-semibold hover:text-gray-500 truncate"
            >
                React Tailwindcss Datepicker
            </Link>

            <div className="mx-6 text-sm space-y-6">
                {Object.entries(links).map(([key, item], index) => (
                    <div key={index} className="border-t pt-3 dark:border-slate-700">
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
        </aside>
    );
};

export default Sidebar;
