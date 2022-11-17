import {useLayoutEffect, useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Link from "next/link";
import DocLayout from "../components/DocLayout";
import CodeWindow, {
    FunctionColor,
    ImportantWord, Indent,
    InstallDatepicker, Keyword, LightBlue,
    ReactImport, Red,
    Separator, StringColor, StringText,
    Title1,
    Title2
} from "../components/CodeWindow";
import {NavLink} from "../components/utils";

const AdvancedFeatures = () => {
    useLayoutEffect(() => {
        document.title = "Advanced features";
    }, [])

    const defaultValue = {startDate: null, endDate: null};
    const [config, setConfig] = useState(defaultValue);
    const [language, setLanguage] = useState(defaultValue);

    return (
        <DocLayout>
            <Title1 id="advanced-features">Advanced Features</Title1>

            <p>You can also access advanced features, such as applying a different language or customizing your shortcuts.</p>

            <Separator/>

            <Title2 id="configs">Configs Shortcuts & Footer</Title2>

            <p>With the prop <ImportantWord>configs</ImportantWord> you can configure the footer and the shortcuts</p>
            <p>By default this value is <ImportantWord>null</ImportantWord></p>

            <div className="my-7 relative z-30">
                <Datepicker
                    value={config}
                    onChange={(value) => setConfig(value)}
                    configs={{
                        shortcuts: {
                            today: "TText",
                            yesterday: "YText",
                            past: period => `P-${period} text`,
                            currentMonth: "CMText",
                            pastMonth: "PMText",
                        },
                        footer: {
                            cancel: "CText",
                            apply: "AText",
                        }
                    }}
                    showFooter={true}
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
                                    <Keyword>configs</Keyword><LightBlue>={"{{"}</LightBlue>
                                        <Indent>
                                            <Red>shortcuts</Red><LightBlue>:{" {"}</LightBlue>
                                            <Indent>
                                                <Red>today</Red><LightBlue>:</LightBlue> <StringText>TText</StringText> <br/>
                                                <Red>yesterday</Red><LightBlue>:</LightBlue> <StringText>YText</StringText> <br/>
                                                <Red>past</Red><LightBlue>:</LightBlue> <Red>period</Red> <LightBlue>{"=>"} `</LightBlue><StringColor>P-</StringColor>${"{"}period{"}"} <StringColor>Text</StringColor><LightBlue>`</LightBlue> <br/>
                                                <Red>currentMonth</Red><LightBlue>:</LightBlue> <StringText>CMText</StringText> <br/>
                                                <Red>pastMonth</Red><LightBlue>:</LightBlue> <StringText>PMText</StringText> <br/>
                                            </Indent><LightBlue>{"}"},</LightBlue><br/>
                                            <Red>footer</Red><LightBlue>:{" {"}</LightBlue>
                                            <Indent>
                                                <Red>cancel</Red><LightBlue>:</LightBlue> <StringText>CText</StringText> <br/>
                                                <Red>apply</Red><LightBlue>:</LightBlue> <StringText>AText</StringText> <br/>
                                            </Indent><LightBlue>{"}"}</LightBlue>
                                        </Indent>
                                    <LightBlue>{"}}"}</LightBlue> <br/>
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

            <Separator/>

            <Title2 id="localization">Localization (i18n)</Title2>
            <p>React Tailwindcss Datepicker extend to <ImportantWord>dayjs</ImportantWord> which supports <ImportantWord>i18n</ImportantWord>.</p>
            <p><Link href="https://github.com/iamkun/dayjs/tree/dev/src/locale" className="text-sky-500 hover:text-sky-600" target="_blank">List of supported locales</Link></p>
            <p className="mt-2">Use the <ImportantWord>i18n</ImportantWord> props to change the language. Default value is <ImportantWord>en</ImportantWord>.</p>

            <div className="my-7 relative z-20">
                <Datepicker
                    i18n={"fr"}
                    value={language}
                    onChange={(value) => setLanguage(value)}
                    configs={{
                        shortcuts: {
                            today: "Aujourd'hui",
                            yesterday: "Hier",
                            past: period => `Les ${period} derniers jours`,
                            currentMonth: "Ce mois-ci",
                            pastMonth: "Le mois dernier",
                        },
                        footer: {
                            cancel: "Quitter",
                            apply: "Appliquer",
                        }
                    }}
                    showFooter={true}
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
                                    <Keyword>i18n</Keyword><LightBlue>={"{"}</LightBlue><StringText>fr</StringText><LightBlue>{"}"}</LightBlue> <br/>
                                    <Keyword>configs</Keyword><LightBlue>={"{{"}</LightBlue>
                                    <Indent>
                                        <Red>shortcuts</Red><LightBlue>:{" {"}</LightBlue>
                                        <Indent>
                                            <Red>today</Red><LightBlue>:</LightBlue> <StringText>TText</StringText> <br/>
                                            <Red>yesterday</Red><LightBlue>:</LightBlue> <StringText>YText</StringText> <br/>
                                            <Red>past</Red><LightBlue>:</LightBlue> <Red>period</Red> <LightBlue>{"=>"} `</LightBlue><StringColor>P-</StringColor>${"{"}period{"}"} <StringColor>Text</StringColor><LightBlue>`</LightBlue> <br/>
                                            <Red>currentMonth</Red><LightBlue>:</LightBlue> <StringText>CMText</StringText> <br/>
                                            <Red>pastMonth</Red><LightBlue>:</LightBlue> <StringText>PMText</StringText> <br/>
                                        </Indent><LightBlue>{"}"},</LightBlue><br/>
                                        <Red>footer</Red><LightBlue>:{" {"}</LightBlue>
                                        <Indent>
                                            <Red>cancel</Red><LightBlue>:</LightBlue> <StringText>CText</StringText> <br/>
                                            <Red>apply</Red><LightBlue>:</LightBlue> <StringText>AText</StringText> <br/>
                                        </Indent><LightBlue>{"}"}</LightBlue>
                                    </Indent>
                                    <LightBlue>{"}}"}</LightBlue> <br/>
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

            <Separator/>

            <div className="flex justify-start">
                <NavLink href="/props" page={"Previous"} position={"text-start"}>Props</NavLink>
            </div>
        </DocLayout>
    );
};

export default AdvancedFeatures;