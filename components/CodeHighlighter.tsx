import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
    code: string;
    language: string;
    theme?: string;
}

const CodeHighlighter = (props: Props) => {
    const { code, language = "javascript" } = props;

    const [showCopied, setShowCopied] = useState(false);

    const onClickCopy = () => {
        setShowCopied(true);
        setTimeout(() => {
            setShowCopied(false);
        }, 3000);

        navigator.clipboard.writeText(code);
    };

    return (
        <div className="relative rounded-md overflow-hidden text-sm my-3">
            <div className="right-3 top-1.5 absolute flex items-center justify-center space-x-0.5">
                <div
                    className={`rounded text-xs flex items-center justify-center w-16 h-10 text-[#A6ACCD] bg-slate-200/10 ${showCopied ? "block" : "hidden"}`}
                >
                    Copied
                </div>

                <button
                    onClick={onClickCopy}
                    className={`transition-all cursor-pointer duration-300 flex items-center justify-center hover:bg-slate-200/10 rounded h-10 w-10 ${showCopied ? "bg-slate-200/10" : ""}`}
                >
                    <ClipboardIcon className="h-5 w-5 text-[#A6ACCD]" />
                </button>
            </div>

            <SyntaxHighlighter
                language={language}
                style={nightOwl}
                customStyle={{
                    padding: "1rem 0.3rem",
                    margin: 0,
                    backgroundColor: "#1e293b"
                }}
                showLineNumbers={true}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeHighlighter;
