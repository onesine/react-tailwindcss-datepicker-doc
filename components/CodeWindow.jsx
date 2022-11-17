import {ClipboardIcon} from "@heroicons/react/24/outline";
import {useRef, useState} from "react";

export const Title1 = ({children, id}) => {
    const [showAnchor, setShowAnchor] = useState(false);

    return (
        <h1 id={id} className="relative text-3xl text-gray-700 mb-4 font-bold dark:text-white/80" onMouseOver={() => setShowAnchor(true)} onMouseLeave={() => setShowAnchor(false)}>
            <span>{children}</span>

            <a href={`#${id}`} className={`absolute -left-7 ${showAnchor ? "inline-block" : "hidden"} w-full text-sky-500`}>#</a>
        </h1>
    );
};

export const Title2 = ({children, id}) => {
    const [showAnchor, setShowAnchor] = useState(false);

    return (
        <h1 id={id} className="relative text-2xl text-gray-700 mb-4 font-bold dark:text-white/80" onMouseOver={() => setShowAnchor(true)} onMouseLeave={() => setShowAnchor(false)}>
            <span>{children}</span>

            <a href={`#${id}`} className={`absolute -left-6 ${showAnchor ? "inline-block" : "hidden"} w-full text-sky-500`}>#</a>
        </h1>
    );
};

export const Separator = () => (
    <hr className="mt-12 mb-6 dark:border-slate-700"/>
);

export const Comment = ({children}) => {
    return (
        <span className="text-[#676E95]">
            {children} <br/>
        </span>
    );
};

export const LightBlue = ({children}) => {
    return (
        <span className="text-[#89DDFF]">
            {children}
        </span>
    );
};

export const Indent = ({children}) => {
    return (
        <span className="pl-5 block">
            {children}
        </span>
    );
};

export const Red = ({children}) => {
    return (
        <span className="text-[#F07178]">
            {children}
        </span>
    );
};

export const StringColor = ({children}) => {
    return (
        <span className="text-[#C3E88D]">
            {children}
        </span>
    );
};

export const StringText = ({children}) => (
    <>
        <LightBlue>"</LightBlue><StringColor>{children}</StringColor><LightBlue>"</LightBlue>
    </>
);

export const ImportantWord = ({children}) => {
    return (
        <span className="bg-gray-200 px-2 py-1 rounded-md text-sm text-sky-800 dark:bg-white/20 dark:text-white/70">{children}</span>
    );
};

export const EndLine = () => (
    <LightBlue>;</LightBlue>
);

export const Coma = () => (
    <LightBlue>,</LightBlue>
)

export const InstallDatepicker = () => (
    <>
        <LightBlue>import</LightBlue> Datepicker <LightBlue>from</LightBlue> <LightBlue>"</LightBlue><StringColor>react-tailwindcss-datepicker</StringColor><LightBlue>"</LightBlue>; <br/>
    </>
);

export const Keyword = ({children}) => (
    <>
        <span className="text-[#C792EA]">{children}</span>
    </>
);

export const ReactImport = () => (
    <>
        <LightBlue>import</LightBlue> React<LightBlue>,</LightBlue> <LightBlue>{"{"}</LightBlue>useState<LightBlue>{"}"}</LightBlue> <LightBlue>from</LightBlue> <LightBlue>"</LightBlue><StringColor>react</StringColor><LightBlue>"</LightBlue><EndLine/> <br/>
    </>
);

export const FunctionColor = ({children}) => (
    <>
        <span className="text-[#82AAFF]">{children}</span>
    </>
)

const CodeWindow = ({children, type = "js"}) => {
    const [showCopied, setShowCopied] = useState(false);
    const codeRef = useRef();

    const onClickCopy = () => {
        setShowCopied(true);
        setTimeout(() => {
            setShowCopied(false);
        }, 3000);

        if (codeRef.current) {
            const text = codeRef.current.innerText;
            if (type === "bash") {
                navigator.clipboard.writeText(text.slice(2, text.length));
            } else {
                navigator.clipboard.writeText(text.slice(text));
            }
        }
    };

    return (
        <div className="relative z-0 overflow-x-auto bg-slate-800 text-[#A6ACCD] text-sm p-5 rounded-md my-3">
            <div className="overflow-x-auto">
                <div className="right-3 top-2.5 absolute flex items-center justify-center space-x-0.5">
                    <div className={`rounded text-xs flex items-center justify-center inline-block w-16 h-10 bg-slate-200/10 ${showCopied ? 'block' : 'hidden'}`}>
                        Copied
                    </div>

                    <button onClick={onClickCopy} className={`transition-all duration-300 flex items-center justify-center hover:bg-slate-200/10 rounded h-10 w-10 ${showCopied ? 'bg-slate-200/10' : ''}`}>
                        <ClipboardIcon className="h-5 w-5"/>
                    </button>
                </div>

                <pre>
                    <code ref={codeRef}>
                        {children}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeWindow;