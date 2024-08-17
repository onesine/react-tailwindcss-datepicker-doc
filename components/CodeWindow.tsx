import { ReactNode, useState } from "react";

export const Title1 = ({ children, id }: { children: ReactNode; id: string }) => {
    const [showAnchor, setShowAnchor] = useState(false);

    return (
        <h1
            id={id}
            className="relative text-3xl text-gray-700 mb-4 font-bold dark:text-white/80"
            onMouseOver={() => setShowAnchor(true)}
            onMouseLeave={() => setShowAnchor(false)}
        >
            <span>{children}</span>

            <a
                href={`#${id}`}
                className={`absolute -left-7 ${showAnchor ? "inline-block" : "hidden"} w-full text-sky-500`}
            >
                #
            </a>
        </h1>
    );
};

export const Title2 = ({ children, id }: { children: ReactNode; id: string }) => {
    const [showAnchor, setShowAnchor] = useState(false);

    return (
        <h2
            id={id}
            className="relative text-2xl text-gray-700 mb-4 font-bold dark:text-white/80"
            onMouseOver={() => setShowAnchor(true)}
            onMouseLeave={() => setShowAnchor(false)}
        >
            <span>{children}</span>

            <a
                href={`#${id}`}
                className={`absolute -left-6 ${showAnchor ? "inline-block" : "hidden"} w-full text-sky-500`}
            >
                #
            </a>
        </h2>
    );
};

export const Separator = () => <hr className="mt-12 mb-6 dark:border-slate-700" />;

export const ImportantWord = ({ children }: { children: ReactNode }) => {
    return (
        <span className="bg-gray-200 px-1.5 py-0.5 md:py-[O.22rem] rounded-md text-xs md:text-sm text-sky-800 dark:bg-white/20 dark:text-white/70">
            {children}
        </span>
    );
};
