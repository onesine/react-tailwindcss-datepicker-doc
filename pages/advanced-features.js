import {useEffect, useState} from "react";
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
import AsideWindow from "../components/AsideWindow";

const AdvancedFeatures = () => {
    useEffect(() => {
        document.title = "Advanced features";
    }, [])

    const defaultValue = {startDate: null, endDate: null};
    const [config, setConfig] = useState(defaultValue);
    const [language, setLanguage] = useState(defaultValue);
    const [disabledDatesValue, setDisableDatesValue] = useState(defaultValue);

    const links = {
        "On this page": [
            {
                text: "Configs Shortcuts & Footer",
                url: "#configs"
            },
            {
                text: "Localization (i18n)",
                url: "#localization"
            },
            {
                text: "Start Week On",
                url: "#start-week-on"
            },
            {
                text: "Disabled Dates",
                url: "#disabled-dates"
            },
        ],
    }

    return (
        <DocLayout aside={ <AsideWindow links={links}/> }>
            <Title1 id="advanced-features">Advanced Features</Title1>

            <p>You can also access advanced features, such as applying a different language or customizing your shortcuts.</p>

            <Separator/>

            <Title2 id="configs">Configs Shortcuts & Footer</Title2>

            <p>With the prop <ImportantWord>configs</ImportantWord> you can configure the footer and the shortcuts</p>
            <p>By default this value is <ImportantWord>null</ImportantWord></p>

            <div className="my-7">
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

            <div className="my-7">
                <Datepicker
                    i18n={"fr"}
                    value={language}
                    onChange={(value) => {
                        setLanguage(value)
                    }}
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
                                            <Red>today</Red><LightBlue>:</LightBlue> <StringText>Aujourd{"'"}hui</StringText> <br/>
                                            <Red>yesterday</Red><LightBlue>:</LightBlue> <StringText>Hier</StringText> <br/>
                                            <Red>past</Red><LightBlue>:</LightBlue> <Red>period</Red> <LightBlue>{"=>"} `</LightBlue><StringColor>Les </StringColor>${"{"}period{"}"} <StringColor> derniers jours</StringColor><LightBlue>`</LightBlue> <br/>
                                            <Red>currentMonth</Red><LightBlue>:</LightBlue> <StringText>Ce mois-ci</StringText> <br/>
                                            <Red>pastMonth</Red><LightBlue>:</LightBlue> <StringText>Le mois dernier</StringText> <br/>
                                        </Indent><LightBlue>{"}"},</LightBlue><br/>
                                        <Red>footer</Red><LightBlue>:{" {"}</LightBlue>
                                        <Indent>
                                            <Red>cancel</Red><LightBlue>:</LightBlue> <StringText>Quitter</StringText> <br/>
                                            <Red>apply</Red><LightBlue>:</LightBlue> <StringText>Appliquer</StringText> <br/>
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


            <Title2 id="start-week-on">Start Week On</Title2>
            <p>Use the <ImportantWord>startWeekOn</ImportantWord> props to override the default <ImportantWord>react-tailwindcss-datepicker</ImportantWord> start day of the week.</p>
            <p className="mt-4">Select from <ImportantWord>sun</ImportantWord>, <ImportantWord>mon</ImportantWord>, <ImportantWord>tue</ImportantWord>, <ImportantWord>wed</ImportantWord>, <ImportantWord>thu</ImportantWord>, <ImportantWord>fri</ImportantWord>, or  <ImportantWord>sat</ImportantWord>,</p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    value={defaultValue}
                    startWeekOn="mon"
                    onChange={setDisableDatesValue}
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
                                    <Keyword>startWeekOn</Keyword><LightBlue>={"\""}</LightBlue>mon<LightBlue>{"\""}</LightBlue> <br/>
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


            <Title2 id="disabled-dates">Disabled Dates</Title2>
            <p>Use the <ImportantWord>disabledDates</ImportantWord> to disable set specific date range or group of date range.</p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    value={disabledDatesValue}
                    onChange={setDisableDatesValue}
                    disabledDates={[
                        {
                            startDate: '2023-02-02',
                            endDate: '2023-02-05'
                        },
                        {
                            startDate: '2023-02-11',
                            endDate: '2023-02-12'
                        },
                    ]}
                    startFrom="2023-02-02"
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
                                    <Keyword>disabledDates</Keyword>
                                    <LightBlue>={"{"}</LightBlue><Red>{"["}</Red><br/>
                                        <Indent>
                                            <LightBlue>{"{"}</LightBlue><br/>
                                                <Indent>
                                                    <Keyword>startDate</Keyword>: <LightBlue>{"\""}</LightBlue>2023-02-02<LightBlue>{"\""}</LightBlue>,<br/>
                                                    <Keyword>endDate</Keyword>: <LightBlue>{"\""}</LightBlue>2023-02-05<LightBlue>{"\""}</LightBlue>,<br/>
                                                </Indent>
                                            <LightBlue>{"}"}</LightBlue>,<br/>

                                            <LightBlue>{"{"}</LightBlue><br/>
                                                <Indent>
                                                    <Keyword>startDate</Keyword>: <LightBlue>{"\""}</LightBlue>2023-02-11<LightBlue>{"\""}</LightBlue>,<br/>
                                                    <Keyword>endDate</Keyword>: <LightBlue>{"\""}</LightBlue>2023-02-12<LightBlue>{"\""}</LightBlue>,<br/>
                                                </Indent>
                                            <LightBlue>{"}"}</LightBlue>,
                                        </Indent>
                                    <Red>{"]"}</Red><LightBlue>{"}"}</LightBlue> <br/>
                                    <Keyword>startFrom</Keyword><LightBlue>={"\""}</LightBlue>2023-02-02<LightBlue>{"\""}</LightBlue> <br/>
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