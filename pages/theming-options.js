import React, {useContext, useLayoutEffect, useState} from "react";
import DocLayout from "../components/DocLayout";
import CodeWindow, {
    FunctionColor, ImportantWord,
    Indent,
    InstallDatepicker,
    Keyword,
    LightBlue,
    ReactImport, Red,
    Separator, StringText,
    Title1,
    Title2
} from "../components/CodeWindow";
import {NavLink} from "../components/utils";
import TailwindColors from "../components/TailwindColors";
import Datepicker from "react-tailwindcss-datepicker";
import ToggleTheme from "../components/ToggleTheme";

const ThemingOptions = () => {
    useLayoutEffect(() => {
        document.title = "Theming options";
    }, [])

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const [color, setColor] = useState("fuchsia");

    const [secondValue, setSecondValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
    };

    const handleSecondValueChange = (newValue) => {
        setSecondValue(newValue);
    };

    return (
        <DocLayout>
            <Title1 id="theming-options">Theming options</Title1>

            <p className="mb-3">React Tailwindcss Datepicker uses the Tailwindcss colors to propose several themes. You can change the theme of your datepicker from a props. React Tailwindcss Datepicker also supports dark mode.</p>

            <Title2 id="tailwind-colors">Tailwind colors supported</Title2>

            <div className="flex justify-center my-5">
                <div className="w-4/5">
                    <TailwindColors changeColor={(newColor) => setColor(newColor)}/>
                </div>
            </div>

            <div className="bg-blue-50/50 text-sm rounded-md border border-blue-300 p-4 text-blue-900/70 dark:border-blue-300/30 dark:text-blue-400 dark:bg-blue-400/10">
                <h4 className="font-bold uppercase mb-3">Info</h4>

                <p>⚠️ If you want to try a theme proposed by one of these colors. You can click disappointed to automatically change the theme of react-tailwindcss-datepicker on this page.</p>
            </div>

            <Separator/>

            <Title2 id="fuchsia-example">{color[0].toUpperCase()}{color.slice(1, color.length)} Exemple</Title2>

            <p>To do this you just need to add the props <ImportantWord>primaryColor</ImportantWord> to your date picker and specify a <ImportantWord>string</ImportantWord> that represents the color.</p>

            <div className="my-7">
                <Datepicker
                    primaryColor={color}
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
                        <Red>startDate</Red><LightBlue>:</LightBlue> <LightBlue>new</LightBlue> <FunctionColor>Date</FunctionColor><LightBlue>(),</LightBlue> <br/>
                        <Red>endDate</Red><LightBlue>:</LightBlue> <LightBlue>new</LightBlue> <FunctionColor>Date</FunctionColor><LightBlue>().</LightBlue><FunctionColor>setMonth</FunctionColor><LightBlue>(</LightBlue><Red>11</Red><LightBlue>)</LightBlue> <br/>
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
                                    <Keyword>primaryColor</Keyword><LightBlue>={"{"}</LightBlue><StringText>{color}</StringText><LightBlue>{"}"}</LightBlue> <br/>
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

            <Title2 id="light-mode">Light mode</Title2>
            <p>The light mode is the default style used by <ImportantWord>react-tailwindcss-datepicker</ImportantWord> with a <ImportantWord>primaryColor</ImportantWord> of <ImportantWord>blue</ImportantWord>.</p>

            <Separator/>

            <Title2 id="light-mode">Dark mode</Title2>

            <p>The dark mode uses the <ImportantWord>dark</ImportantWord> variant of <ImportantWord>tailwind</ImportantWord> to provide a dark theme that should fit your project.</p>
            <br/>
            <p>Use this theme toggle to try the dark mode on the <ImportantWord>react-tailwindcss-datepicker</ImportantWord> below.</p>

            <ToggleTheme/>

            <div className="mt-7 mb-48">
                <Datepicker
                    primaryColor={color}
                    value={secondValue}
                    onChange={handleSecondValueChange}
                    showShortcuts={true}
                    showFooter={true}
                />
            </div>

            <Separator/>

            <div className="flex space-x-4">
                <NavLink href="/demo" position="text-start" page={"Previous"}>Demo</NavLink>
                <NavLink href="/props">Props</NavLink>
            </div>
        </DocLayout>
    );
};

export default ThemingOptions;