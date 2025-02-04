import { useEffect } from "react";

import AlertWarning from "../components/AlertWarning";
import AsideWindow from "../components/AsideWindow";
import CodeHighlighter from "../components/CodeHighlighter";
import { Separator, Title1, Title2 } from "../components/CodeWindow";
import DocLayout from "../components/DocLayout";
import NavLink from "../components/NavLink";
import { DEPENDENCIES, SIMPLE_USAGE, SUPPORTED_VERSIONS_URL, TAILWIND_CONFIG } from "../constants";

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
                text: "Supported versions",
                url: "#supported-version"
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
                text: "Install for react 18",
                url: "#install-for-react18"
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
                ⚠️ React Tailwindcss Datepicker uses Tailwind CSS and Dayjs under the hood to work.
            </AlertWarning>

            <Separator />

            <Title2 id="supported-version">Supported versions</Title2>
            <p className="mb-4">
                Only <strong>react-tailwindcss-datepicker</strong> versions greater than or equal to{" "}
                <strong>2.x</strong> receive bug fixes and new features. The table below lists
                compatibility with the different
                <strong> react</strong> versions:
            </p>

            <table className="table-auto border dark:border-slate-700 text-sm">
                <thead className="border-b dark:border-slate-700 font-semibold">
                    <tr className="text-gray-500 dark:text-white/80 bg-gray-50 dark:bg-slate-900">
                        <th className="px-6 py-3 border-r dark:border-slate-700 text-left text-xs uppercase tracking-wider">
                            Version
                        </th>
                        <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">
                            React version
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-slate-900">
                    <tr>
                        <td className="px-6 py-4 border-r dark:border-slate-700 whitespace-nowrap">
                            <a
                                className="text-sky-500 hover:underline"
                                href={`${SUPPORTED_VERSIONS_URL}/v2.0.0`}
                            >
                                {"2.x"}
                            </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">19.x</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 border-r dark:border-slate-700 whitespace-nowrap">
                            <a
                                className="text-sky-500 hover:underline"
                                href={`${SUPPORTED_VERSIONS_URL}/v1.7.3`}
                            >
                                {"1.x"}
                            </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">17.x, 18.x</td>
                    </tr>
                </tbody>
            </table>

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

            <Title2 id="install-for-react18">Install for react 18</Title2>
            <CodeHighlighter language="bash" code="yarn add react-tailwindcss-datepicker@1.7.3" />

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
