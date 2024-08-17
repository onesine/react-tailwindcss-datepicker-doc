import { useEffect } from "react";

import AlertWarning from "../components/AlertWarning";
import AsideWindow from "../components/AsideWindow";
import CodeHighlighter from "../components/CodeHighlighter";
import { Separator, Title1, Title2 } from "../components/CodeWindow";
import DocLayout from "../components/DocLayout";
import NavLink from "../components/NavLink";
import { DEPENDENCIES, SIMPLE_USAGE, TAILWIND_CONFIG } from "../constants";

const Install = () => {
    useEffect(() => {
        document.title = "Installation";
    }, []);

    const links = {
        "On this page": [
            {
                text: "Installation",
                url: "#install"
            },
            {
                text: "Install via npm",
                url: "#npm-install"
            },
            {
                text: "Install via yarn",
                url: "#yarn-install"
            },
            {
                text: "Simple usage",
                url: "#simple-usage"
            }
        ]
    };

    return (
        <DocLayout aside={<AsideWindow links={links} />}>
            <Title1 id="install">Installation</Title1>
            <AlertWarning>
                ⚠️ React Tailwindcss Datepicker uses Tailwind CSS 3 (with the @tailwindcss/forms
                plugin) & Dayjs under the hood to work.
            </AlertWarning>

            <Separator />

            <Title2 id="npm-install">Install via npm</Title2>
            <CodeHighlighter code={"npm install react-tailwindcss-datepicker"} language="bash" />

            <Separator />

            <Title2 id="yarn-install">Install via yarn</Title2>
            <CodeHighlighter language="bash" code="yarn add react-tailwindcss-datepicker" />

            <Separator />

            <p className="mb-4">
                Make sure you have installed the peer dependencies as well with the below versions.
            </p>
            <CodeHighlighter language="json" code={DEPENDENCIES} />
            <Separator />

            <Title2 id="simple-usage">Simple Usage</Title2>
            <p>Add the datepicker to your tailwind configuration using this code.</p>

            <CodeHighlighter language="javascript" code={TAILWIND_CONFIG} />

            <p>Then use react-tailwindcss-select in your app:</p>
            <CodeHighlighter language="tsx" code={SIMPLE_USAGE} />

            <Separator />

            <div className="flex justify-end">
                <NavLink href="/demo">Demo</NavLink>
            </div>
        </DocLayout>
    );
};

export default Install;
