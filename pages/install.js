import {useLayoutEffect} from "react";
import DocLayout from "../components/DocLayout";
import CodeWindow, {
    Separator,
    Title1,
    Title2,
    Comment,
    LightBlue,
    Red,
    Indent,
    StringColor, InstallDatepicker, ReactImport, Coma, Keyword, FunctionColor, StringText
} from "../components/CodeWindow";
import {NavLink} from "../components/utils";

const Install = () => {
    useLayoutEffect(() => {
        document.title = "Installation";
    }, [])

    return (
        <DocLayout>
            <Title1 id="install">Installation</Title1>

            <div className="bg-amber-50/50 text-sm rounded-md border border-amber-300 p-4 text-amber-900/70 dark:border-amber-300/30 dark:text-amber-400 dark:bg-amber-400/10">
                <h4 className="font-bold uppercase mb-3">Warning</h4>

                <p>⚠️ React Tailwindcss Datepicker uses Tailwind CSS 3 (with the @tailwindcss/forms plugin) & Dayjs under the hood to work.</p>
            </div>

            <Separator/>

            <Title2 id="npm-install">Install via npm</Title2>

            <CodeWindow type="bash">
                $ npm install react-tailwindcss-datepicker
            </CodeWindow>

            <Separator/>

            <Title2 id="yarn-install">Install via yarn</Title2>

            <CodeWindow type="bash">
                $ yarn add react-tailwindcss-datepicker
            </CodeWindow>

            <Separator/>

            <p className="mb-4">Make sure you have installed the peer dependencies as well with the below versions.</p>

            <CodeWindow>
                <LightBlue>"</LightBlue><StringColor>dayjs</StringColor><LightBlue>": "</LightBlue><StringColor>^1.11.6</StringColor><LightBlue>"</LightBlue> <br/>
                <LightBlue>"</LightBlue><StringColor>react</StringColor><LightBlue>": "</LightBlue><StringColor>^18.2.0</StringColor><LightBlue>"</LightBlue> <br/>
            </CodeWindow>

            <Separator></Separator>

            <Title2 id="simple-usage">Simple Usage</Title2>

            <p>Add the datepicker to your tailwind configuration using this code.</p>

            <CodeWindow type="bash">
                <Comment>// in your tailwind.config.js</Comment>
                <LightBlue>module.exports = {"{"}</LightBlue> <br/>
                <Indent>
                    <Comment>// ...</Comment>
                    <Red>content</Red><LightBlue>:</LightBlue> [ <br/>
                    <Indent>
                        <LightBlue>"</LightBlue><StringColor>./src/**/*.{"{"}js,jsx,ts,tsx{"}"}</StringColor><LightBlue>"</LightBlue><Coma/>
                    </Indent>

                    <Indent>
                        <LightBlue>"</LightBlue><StringColor>./node_modules/react-tailwindcss-datepicker/dist/index.esm.js</StringColor><LightBlue>"</LightBlue><Coma/>
                    </Indent>
                    <Comment>// ...</Comment>
                </Indent>
                <LightBlue>{"}"}</LightBlue> <br/>
            </CodeWindow>

            Then use react-tailwindcss-select in your app:

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
                                        <Keyword>value</Keyword><LightBlue>={"{"}</LightBlue>value<LightBlue>{"}"}</LightBlue> <br/>
                                        <Keyword>onChange</Keyword><LightBlue>={"{"}</LightBlue>handleValueChange<LightBlue>{"}"}</LightBlue> <br/>
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

            <Separator></Separator>

            <div className="flex justify-end">
                <NavLink href="/demo">Demo</NavLink>
            </div>
        </DocLayout>
    );
};

export default Install;