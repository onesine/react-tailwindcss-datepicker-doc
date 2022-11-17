import {useLayoutEffect, useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import DocLayout from "../components/DocLayout";
import CodeWindow, {
    FunctionColor,
    Indent,
    InstallDatepicker,
    Keyword,
    LightBlue,
    ReactImport, Red,
    Separator, StringText,
    Title1
} from "../components/CodeWindow";
import {NavLink} from "../components/utils";

const Demo = () => {
    useLayoutEffect(() => {
        document.title = "Demo";
    }, [])

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
    }


    return (
        <DocLayout>
            <Title1 id="demo">Demo</Title1>

            <div className="my-7">
                <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    showShortcuts={true}
                />
            </div>

            <CodeWindow>
                <ReactImport/>
                <InstallDatepicker/>
                <br/>
                <Keyword>const</Keyword> App <LightBlue>= () {"=>"} {"{"}</LightBlue> <br/>
                <Indent>
                    <Keyword>const</Keyword> [value, setValue] <LightBlue>=</LightBlue> <FunctionColor>useState</FunctionColor><LightBlue>({"{"}</LightBlue> <br/>
                    <Indent>
                        <Red>startDate</Red><LightBlue>:</LightBlue> <Red>null</Red> <br/>
                        <Red>endDate</Red><LightBlue>:</LightBlue> <Red>null</Red> <br/>
                    </Indent>
                    <LightBlue>{"}"});</LightBlue> <br/><br/>

                    <Keyword>const</Keyword> handleValueChange <LightBlue>= (</LightBlue><Red>newValue</Red><LightBlue>) {"=>"} {"{"}</LightBlue>
                    <Indent>
                        console<LightBlue>.</LightBlue><FunctionColor>log</FunctionColor><LightBlue>(</LightBlue><StringText>newValue:</StringText><LightBlue>,</LightBlue> <Red>newValue</Red><LightBlue>);</LightBlue> <br/>
                        <FunctionColor>setValue</FunctionColor><LightBlue>(</LightBlue><Red>newValue</Red><LightBlue>);</LightBlue> <br/>
                    </Indent>
                    <LightBlue>{"}"}</LightBlue> <br/><br/>

                    <Keyword>return</Keyword> (
                    <Indent>
                        <Indent>
                            <LightBlue>{"<"}</LightBlue><Red>Datepicker</Red> <br/>
                            <Indent>
                                <Indent>
                                    <Keyword>value</Keyword><LightBlue>={"{"}</LightBlue>value<LightBlue>{"}"}</LightBlue> <br/>
                                    <Keyword>onChange</Keyword><LightBlue>={"{"}</LightBlue>handleValueChange<LightBlue>{"}"}</LightBlue> <br/>
                                    <Keyword>showShortcuts</Keyword><LightBlue>={"{"}</LightBlue>true<LightBlue>{"}"}</LightBlue> <br/>
                                </Indent>
                            </Indent>
                            <LightBlue>/{">"}</LightBlue> <br/>
                        </Indent>
                    </Indent>
                    );
                </Indent>

                <LightBlue>{"}"};</LightBlue> <br/>

                <Keyword>export</Keyword> <Keyword>default</Keyword> App;
            </CodeWindow>

            <Separator/>

            <div className="flex space-x-4">
                <NavLink href="/install" position="text-start" page={"Previous"}>Installation</NavLink>
                <NavLink href="/theming-options">Theming options</NavLink>
            </div>
        </DocLayout>
    );
};

export default Demo;