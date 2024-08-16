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
import TableContainer from "../components/tables/TableContainer";
import ShortcutTableHead from "../components/tables/ShortcutTableHead";
import {formatDate} from "../helpers";
import InfoAlert from "../components/InfoAlert";

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
                text: "Custom shortcuts",
                url: "#custom-shortcuts"
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

            <p className="leading-7">
                Use the <ImportantWord>shortcuts</ImportantWord> and <ImportantWord>footer</ImportantWord> attributes of the <ImportantWord>configs</ImportantWord> props to configure the <ImportantWord>Shortcuts</ImportantWord> and <ImportantWord>Footer</ImportantWord>.
                By default <ImportantWord>configs</ImportantWord> value is <ImportantWord>null</ImportantWord>.
            </p>

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
                        <Red>startDate</Red><LightBlue>:</LightBlue> <Red>null</Red><LightBlue>,</LightBlue> <br/>
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
                                    <Keyword>showShortcuts</Keyword><LightBlue>={"{"}</LightBlue><Red>true</Red><LightBlue>{"}"}</LightBlue> <br/>
                                    <Keyword>showFooter</Keyword><LightBlue>={"{"}</LightBlue><Red>true</Red><LightBlue>{"}"}</LightBlue> <br/>
                                    <Keyword>configs</Keyword><LightBlue>={"{{"}</LightBlue>
                                        <Indent>
                                            <Red>shortcuts</Red><LightBlue>:{" {"}</LightBlue>
                                            <Indent>
                                                <Red>today</Red><LightBlue>:</LightBlue> <StringText>TText</StringText><LightBlue>,</LightBlue> <br/>
                                                <Red>yesterday</Red><LightBlue>:</LightBlue> <StringText>YText</StringText><LightBlue>,</LightBlue> <br/>
                                                <Red>past</Red><LightBlue>:</LightBlue> <Red>period</Red> <LightBlue>{"=>"} `</LightBlue><StringColor>P-</StringColor>${"{"}period{"}"} <StringColor>Text</StringColor><LightBlue>`,</LightBlue> <br/>
                                                <Red>currentMonth</Red><LightBlue>:</LightBlue> <StringText>CMText</StringText><LightBlue>,</LightBlue> <br/>
                                                <Red>pastMonth</Red><LightBlue>:</LightBlue> <StringText>PMText</StringText> <br/>
                                            </Indent><LightBlue>{"}"},</LightBlue><br/>
                                            <Red>footer</Red><LightBlue>:{" {"}</LightBlue>
                                            <Indent>
                                                <Red>cancel</Red><LightBlue>:</LightBlue> <StringText>CText</StringText><LightBlue>,</LightBlue> <br/>
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

            <Title2 id="custom-shortcuts">Custom shortcuts</Title2>

            <p className="leading-7">
                Use the <ImportantWord>shortcuts</ImportantWord> attribute of the <ImportantWord>configs</ImportantWord> props to configure the <ImportantWord>Custom shortcuts</ImportantWord>.
                By default <ImportantWord>configs</ImportantWord> value is <ImportantWord>null</ImportantWord>.
            </p>

            <h3 className="mt-3 text-xl font-semibold dark:text-white/80">Default keys</h3>

            <TableContainer>
                <ShortcutTableHead/>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>today</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">`Today`</span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the shortcut <ImportantWord>Today</ImportantWord>
                    </td>
                </tr>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>yesterday</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">`Yesterday`</span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the shortcut <ImportantWord>Yesterday</ImportantWord>
                    </td>
                </tr>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>past</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">(period) {"=>"} `Last {"${period}"} days`</span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the shortcuts <ImportantWord>Last 7 days</ImportantWord> and <ImportantWord>Last 30 days</ImportantWord>
                    </td>
                </tr>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>currentMonth</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">`This month`</span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the shortcut <ImportantWord>This month</ImportantWord>
                    </td>
                </tr>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>pastMonth</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">`Last month`</span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the shortcut <ImportantWord>Last month</ImportantWord>
                    </td>
                </tr>
            </TableContainer>

            <h3 className="mt-3 text-xl font-semibold dark:text-white/80">Custom keys</h3>

            <p className="mb-2">To configure your own shortcuts, use a different <ImportantWord>shortcut key</ImportantWord> than the ones used for the default shortcuts.</p>

            <TableContainer>
                <ShortcutTableHead/>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>last3Days</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">
                            <pre>
                                <code>
                                    {"{"} <br/>
                                    {"  text:"} &quot;Last 3 days&quot;<br/>
                                    {"  period:"} {"{"}<br/>
                                    {"    start:"} &quot;{formatDate(new Date(new Date().setDate(new Date().getDate() - 3)))}&quot;<br/>
                                    {"    end:"} &quot;{formatDate(new Date(new Date().setDate(new Date().getDate() - 1)))}&quot;<br/>
                                    {"  }"}<br/>
                                    {"}"}
                                </code>
                            </pre>
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the custom shortcut <ImportantWord>Last 3 days</ImportantWord>
                    </td>
                </tr>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>next8Days</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">
                            <pre>
                                <code>
                                    {"{"} <br/>
                                    {"  text:"} &quot;Next 8 days&quot;<br/>
                                    {"  period:"} {"{"}<br/>
                                    {"    start:"} &quot;{formatDate(new Date(new Date().setDate(new Date().getDate() + 1)))}&quot;<br/>
                                    {"    end:"} &quot;{formatDate(new Date(new Date().setDate(new Date().getDate() + 8)))}&quot;<br/>
                                    {"  }"}<br/>
                                    {"}"}
                                </code>
                            </pre>
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the custom shortcut <ImportantWord>Next 8 days</ImportantWord>
                    </td>
                </tr>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>customToday</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">
                            <pre>
                                <code>
                                    {"{"} <br/>
                                    {"  text:"} &quot;Custom Today&quot;<br/>
                                    {"  period:"} {"{"}<br/>
                                    {"    start:"} &quot;{formatDate(new Date())}&quot;<br/>
                                    {"    end:"} &quot;{formatDate(new Date())}&quot;<br/>
                                    {"  }"}<br/>
                                    {"}"}
                                </code>
                            </pre>
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the custom shortcut <ImportantWord>Custom Today</ImportantWord>
                    </td>
                </tr>
            </TableContainer>

            <div className="my-7">
                <Datepicker
                    value={config}
                    onChange={(value) => setConfig(value)}
                    configs={{
                        shortcuts: {
                            last3Days: {
                                text: 'Last 3 days',
                                period: {
                                    start: new Date(new Date().setDate(new Date().getDate() - 3)),
                                    end: new Date(new Date().setDate(new Date().getDate() - 1))
                                }
                            },
                            yesterday: "Yesterday",
                            customToday: {
                                text: 'Custom Today',
                                period: {
                                    start: new Date(),
                                    end: new Date()
                                }
                            },
                            next8Days: {
                                text: 'Next 8 days',
                                period: {
                                    start: new Date(new Date().setDate(new Date().getDate() + 1)),
                                    end: new Date(new Date().setDate(new Date().getDate() + 8))
                                }
                            },
                        }
                    }}
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
                        <Red>startDate</Red><LightBlue>:</LightBlue> <Red>null</Red><LightBlue>,</LightBlue> <br/>
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
                                    <Keyword>showShortcuts</Keyword><LightBlue>={"{"}</LightBlue><Red>true</Red><LightBlue>{"}"}</LightBlue> <br/>
                                    <Keyword>configs</Keyword><LightBlue>={"{{"}</LightBlue>
                                    <Indent>
                                        <Red>shortcuts</Red><LightBlue>:{" {"}</LightBlue>
                                        <Indent>
                                            <Red>last3Days</Red><LightBlue>: {"{"}</LightBlue> <br/>
                                            <Indent><Red>text</Red><LightBlue>:</LightBlue> <StringText>Last 3 days</StringText><LightBlue>,</LightBlue></Indent>
                                            <Indent><Red>period</Red><LightBlue>: {"{"}</LightBlue></Indent>
                                            <Indent>
                                                <Indent><Red>start</Red><LightBlue>:</LightBlue> <StringText>{formatDate(new Date(new Date().setDate(new Date().getDate() - 3)))}</StringText><LightBlue>,</LightBlue></Indent>
                                                <Indent><Red>end</Red><LightBlue>:</LightBlue> <StringText>{formatDate(new Date(new Date().setDate(new Date().getDate() - 1)))}</StringText></Indent>
                                                <LightBlue>{"}"},</LightBlue> <br/>
                                            </Indent>
                                            <LightBlue>{"}"},</LightBlue> <br/>

                                            <Red>yesterday</Red><LightBlue>:</LightBlue> <StringText>Yesterday</StringText><LightBlue>,</LightBlue> <br/>

                                            <Red>customToday</Red><LightBlue>: {"{"}</LightBlue> <br/>
                                            <Indent><Red>text</Red><LightBlue>:</LightBlue> <StringText>Custom Today</StringText><LightBlue>,</LightBlue></Indent>
                                            <Indent><Red>period</Red><LightBlue>: {"{"}</LightBlue></Indent>
                                            <Indent>
                                                <Indent><Red>start</Red><LightBlue>:</LightBlue> <StringText>{formatDate(new Date())}</StringText><LightBlue>,</LightBlue></Indent>
                                                <Indent><Red>end</Red><LightBlue>:</LightBlue> <StringText>{formatDate(new Date())}</StringText></Indent>
                                                <LightBlue>{"}"},</LightBlue> <br/>
                                            </Indent>
                                            <LightBlue>{"}"},</LightBlue> <br/>

                                            <Red>next8Days</Red><LightBlue>: {"{"}</LightBlue> <br/>
                                            <Indent><Red>text</Red><LightBlue>:</LightBlue> <StringText>Next 8 days</StringText><LightBlue>,</LightBlue></Indent>
                                            <Indent><Red>period</Red><LightBlue>: {"{"}</LightBlue></Indent>
                                            <Indent>
                                                <Indent><Red>start</Red><LightBlue>:</LightBlue> <StringText>{formatDate(new Date(new Date().setDate(new Date().getDate() + 1)))}</StringText><LightBlue>,</LightBlue></Indent>
                                                <Indent><Red>end</Red><LightBlue>:</LightBlue> <StringText>{formatDate(new Date(new Date().setDate(new Date().getDate() + 8)))}</StringText></Indent>
                                                <LightBlue>{"}"},</LightBlue> <br/>
                                            </Indent>
                                            <LightBlue>{"}"}</LightBlue> <br/>
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

            <div className="mt-6">
                <InfoAlert>
                    <ul className="list-disc pl-6">
                        <li>You should not use the default shortcuts keys for your custom shortcuts.</li>
                        <li>You can use a default and custom shortcut at the same time.</li>
                    </ul>
                </InfoAlert>
            </div>

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
                        <Red>startDate</Red><LightBlue>:</LightBlue> <Red>null</Red><LightBlue>,</LightBlue> <br/>
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
                        <Red>startDate</Red><LightBlue>:</LightBlue> <Red>null</Red><LightBlue>,</LightBlue> <br/>
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
                        <Red>startDate</Red><LightBlue>:</LightBlue> <Red>null</Red><LightBlue>,</LightBlue> <br/>
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