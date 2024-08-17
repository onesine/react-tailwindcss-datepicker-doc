import { useEffect, useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

import AsideWindow from "../components/AsideWindow";
import CodeHighlighter from "../components/CodeHighlighter";
import { Separator, Title1 } from "../components/CodeWindow";
import DocLayout from "../components/DocLayout";
import NavLink from "../components/NavLink";
import { SIMPLE_USAGE_WITH_SHORTCUTS } from "../constants";

const Demo = () => {
    useEffect(() => {
        document.title = "Demo";
    }, []);

    const [value, setValue] = useState<DateValueType>({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: DateValueType) => {
        setValue(newValue);
    };

    const links = {
        "On this page": [
            {
                text: "Demo",
                url: "#demo"
            }
        ]
    };

    return (
        <DocLayout aside={<AsideWindow links={links} />}>
            <Title1 id="demo">Demo</Title1>

            <div className="my-7">
                <Datepicker value={value} onChange={handleValueChange} showShortcuts={true} />
            </div>

            <CodeHighlighter code={SIMPLE_USAGE_WITH_SHORTCUTS} language="tsx" />

            <Separator />

            <div className="flex space-x-4">
                <NavLink href="/install" position="text-start" page={"Previous"}>
                    Installation
                </NavLink>

                <NavLink href="/theming-options">Theming options</NavLink>
            </div>
        </DocLayout>
    );
};

export default Demo;
