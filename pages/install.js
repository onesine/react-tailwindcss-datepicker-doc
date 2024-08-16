import {useEffect} from "react";
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
import {AlertWarning, NavLink} from "../components/utils";
import AsideWindow from "../components/AsideWindow";

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
            },
        ],
    };

    return (
        <DocLayout aside={ <AsideWindow links={links}/> }>
            <Title1 id="install">Installation</Title1>

            <AlertWarning>
                ⚠️ React Tailwindcss Datepicker uses Tailwind CSS 3 (with the @tailwindcss/forms plugin) & Dayjs under the hood to work.
            </AlertWarning>

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
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <LightBlue>"</LightBlue><StringColor>dayjs</StringColor><LightBlue>": "</LightBlue><StringColor>^1.11.6</StringColor><LightBlue>",</LightBlue> <br/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <LightBlue>"</LightBlue><StringColor>react</StringColor><LightBlue>": "</LightBlue><StringColor>^18.2.0</StringColor><LightBlue>"</LightBlue> <br/>
            </CodeWindow>

            <Separator></Separator>

            <Title2 id="simple-usage">Simple Usage</Title2>

            <p>Add the datepicker to your tailwind configuration using this code.</p>

            <CodeWindow type="bash">
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <Comment>// in your tailwind.config.js</Comment>
                <LightBlue>module.exports = {"{"}</LightBlue> <br/>
                <Indent>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <Comment>// ...</Comment>
                    <Red>content</Red><LightBlue>:</LightBlue> [ <br/>
                    <Indent>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <LightBlue>"</LightBlue><StringColor>./src/**/*.{"{"}js,jsx,ts,tsx{"}"}</StringColor><LightBlue>"</LightBlue><Coma/>
                    </Indent>

                    <Indent>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <LightBlue>"</LightBlue><StringColor>./node_modules/react-tailwindcss-datepicker/dist/index.esm.js</StringColor><LightBlue>"</LightBlue><Coma/>
                    </Indent>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
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