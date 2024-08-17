import Link from "next/link";
import { useEffect, useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

import AsideWindow from "../components/AsideWindow";
import CodeHighlighter from "../components/CodeHighlighter";
import { ImportantWord, Separator, Title1, Title2 } from "../components/CodeWindow";
import DocLayout from "../components/DocLayout";
import InfoAlert from "../components/InfoAlert";
import NavLink from "../components/NavLink";
import ShortcutTableHead from "../components/tables/ShortcutTableHead";
import TableContainer from "../components/tables/TableContainer";
import {
    CUSTOM_SHORTCUTS,
    DEFAULT_CONFIG,
    DISABLED_DATES,
    LOCALIZATION_I18N,
    START_WEEK_ON
} from "../constants";
import { formatDate } from "../helpers";

const LINKS = {
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
        }
    ]
};

const AdvancedFeatures = () => {
    useEffect(() => {
        document.title = "Advanced features";
    }, []);

    const defaultValue = { startDate: null, endDate: null };
    const [config, setConfig] = useState<DateValueType>(defaultValue);
    const [language, setLanguage] = useState<DateValueType>(defaultValue);
    const [disabledDatesValue, setDisableDatesValue] = useState<DateValueType>(defaultValue);

    return (
        <DocLayout aside={<AsideWindow links={LINKS} />}>
            <Title1 id="advanced-features">Advanced Features</Title1>

            <p>
                You can also access advanced features, such as applying a different language or
                customizing your shortcuts.
            </p>

            <Separator />

            <Title2 id="configs">Configs Shortcuts & Footer</Title2>

            <p className="leading-7">
                Use the <ImportantWord>shortcuts</ImportantWord> and{" "}
                <ImportantWord>footer</ImportantWord> attributes of the{" "}
                <ImportantWord>configs</ImportantWord> props to configure the{" "}
                <ImportantWord>Shortcuts</ImportantWord> and <ImportantWord>Footer</ImportantWord>.
                By default <ImportantWord>configs</ImportantWord> value is{" "}
                <ImportantWord>null</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    showFooter={true}
                    showShortcuts={true}
                    configs={{
                        shortcuts: {
                            today: "TText",
                            yesterday: "YText",
                            past: period => `P-${period} text`,
                            currentMonth: "CMText",
                            pastMonth: "PMText"
                        },
                        footer: {
                            cancel: "CText",
                            apply: "AText"
                        }
                    }}
                    value={config}
                    onChange={value => setConfig(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={DEFAULT_CONFIG} />

            <Separator />

            <Title2 id="custom-shortcuts">Custom shortcuts</Title2>

            <p className="leading-7">
                Use the <ImportantWord>shortcuts</ImportantWord> attribute of the{" "}
                <ImportantWord>configs</ImportantWord> props to configure the{" "}
                <ImportantWord>Custom shortcuts</ImportantWord>. By default{" "}
                <ImportantWord>configs</ImportantWord> value is <ImportantWord>null</ImportantWord>.
            </p>

            <h3 className="mt-3 text-xl font-semibold dark:text-white/80">Default keys</h3>

            <TableContainer>
                <ShortcutTableHead />

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
                        <span className="font-semibold text-gray-700 dark:text-white">
                            `Yesterday`
                        </span>
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
                        <span className="font-semibold text-gray-700 dark:text-white">
                            (period) {"=>"} `Last {"${period}"} days`
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the shortcuts <ImportantWord>Last 7 days</ImportantWord> and{" "}
                        <ImportantWord>Last 30 days</ImportantWord>
                    </td>
                </tr>

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>currentMonth</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">
                            `This month`
                        </span>
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
                        <span className="font-semibold text-gray-700 dark:text-white">
                            `Last month`
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the shortcut <ImportantWord>Last month</ImportantWord>
                    </td>
                </tr>
            </TableContainer>

            <h3 className="mt-3 text-xl font-semibold dark:text-white/80">Custom keys</h3>

            <p className="mb-2">
                To configure your own shortcuts, use a different{" "}
                <ImportantWord>shortcut key</ImportantWord> than the ones used for the default
                shortcuts.
            </p>

            <TableContainer>
                <ShortcutTableHead />

                <tr>
                    <td className="py-3 pl-4 align-baseline sm:pl-0">
                        <ImportantWord>last3Days</ImportantWord>
                    </td>
                    <td className="py-3 align-baseline">
                        <span className="font-semibold text-gray-700 dark:text-white">
                            <pre>
                                <code>
                                    {"{"} <br />
                                    {"  text:"} &quot;Last 3 days&quot;
                                    <br />
                                    {"  period:"} {"{"}
                                    <br />
                                    {"    start:"} &quot;
                                    {formatDate(
                                        new Date(new Date().setDate(new Date().getDate() - 3))
                                    )}
                                    &quot;
                                    <br />
                                    {"    end:"} &quot;
                                    {formatDate(
                                        new Date(new Date().setDate(new Date().getDate() - 1))
                                    )}
                                    &quot;
                                    <br />
                                    {"  }"}
                                    <br />
                                    {"}"}
                                </code>
                            </pre>
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the custom shortcut{" "}
                        <ImportantWord>Last 3 days</ImportantWord>
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
                                    {"{"} <br />
                                    {"  text:"} &quot;Next 8 days&quot;
                                    <br />
                                    {"  period:"} {"{"}
                                    <br />
                                    {"    start:"} &quot;
                                    {formatDate(
                                        new Date(new Date().setDate(new Date().getDate() + 1))
                                    )}
                                    &quot;
                                    <br />
                                    {"    end:"} &quot;
                                    {formatDate(
                                        new Date(new Date().setDate(new Date().getDate() + 8))
                                    )}
                                    &quot;
                                    <br />
                                    {"  }"}
                                    <br />
                                    {"}"}
                                </code>
                            </pre>
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the custom shortcut{" "}
                        <ImportantWord>Next 8 days</ImportantWord>
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
                                    {"{"} <br />
                                    {"  text:"} &quot;Custom Today&quot;
                                    <br />
                                    {"  period:"} {"{"}
                                    <br />
                                    {"    start:"} &quot;{formatDate(new Date())}&quot;
                                    <br />
                                    {"    end:"} &quot;{formatDate(new Date())}&quot;
                                    <br />
                                    {"  }"}
                                    <br />
                                    {"}"}
                                </code>
                            </pre>
                        </span>
                    </td>
                    <td className="py-3 align-baseline">
                        Allows to have the custom shortcut{" "}
                        <ImportantWord>Custom Today</ImportantWord>
                    </td>
                </tr>
            </TableContainer>

            <div className="my-7">
                <Datepicker
                    showShortcuts={true}
                    configs={{
                        shortcuts: {
                            last3Days: {
                                text: "Last 3 days",
                                period: {
                                    start: new Date(new Date().setDate(new Date().getDate() - 3)),
                                    end: new Date(new Date().setDate(new Date().getDate() - 1))
                                }
                            },
                            yesterday: "Yesterday",
                            customToday: {
                                text: "Custom Today",
                                period: {
                                    start: new Date(),
                                    end: new Date()
                                }
                            },
                            next8Days: {
                                text: "Next 8 days",
                                period: {
                                    start: new Date(new Date().setDate(new Date().getDate() + 1)),
                                    end: new Date(new Date().setDate(new Date().getDate() + 8))
                                }
                            }
                        }
                    }}
                    value={config}
                    onChange={value => setConfig(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={CUSTOM_SHORTCUTS} />

            <div className="mt-6">
                <InfoAlert>
                    <ul className="list-disc pl-6">
                        <li>
                            You should not use the default shortcuts keys for your custom shortcuts.
                        </li>
                        <li>You can use a default and custom shortcut at the same time.</li>
                    </ul>
                </InfoAlert>
            </div>

            <Separator />

            <Title2 id="localization">Localization (i18n)</Title2>
            <p>
                React Tailwindcss Datepicker extend to <ImportantWord>dayjs</ImportantWord> which
                supports <ImportantWord>i18n</ImportantWord>.
            </p>
            <p>
                <Link
                    href="https://github.com/iamkun/dayjs/tree/dev/src/locale"
                    className="text-sky-500 hover:text-sky-600"
                    target="_blank"
                >
                    List of supported locales
                </Link>
            </p>
            <p className="mt-2">
                Use the <ImportantWord>i18n</ImportantWord> props to change the language. Default
                value is <ImportantWord>en</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    i18n={"fr"}
                    showFooter={true}
                    showShortcuts={true}
                    configs={{
                        shortcuts: {
                            today: "Aujourd'hui",
                            yesterday: "Hier",
                            past: period => `Les ${period} derniers jours`,
                            currentMonth: "Ce mois-ci",
                            pastMonth: "Le mois dernier"
                        },
                        footer: {
                            cancel: "Quitter",
                            apply: "Appliquer"
                        }
                    }}
                    value={language}
                    onChange={value => {
                        setLanguage(value);
                    }}
                />
            </div>

            <CodeHighlighter language="tsx" code={LOCALIZATION_I18N} />

            <Separator />

            <Title2 id="start-week-on">Start Week On</Title2>
            <p>
                Use the <ImportantWord>startWeekOn</ImportantWord> props to override the default{" "}
                <ImportantWord>react-tailwindcss-datepicker</ImportantWord> start day of the week.
            </p>
            <p className="mt-4">
                Select from <ImportantWord>sun</ImportantWord>, <ImportantWord>mon</ImportantWord>,{" "}
                <ImportantWord>tue</ImportantWord>, <ImportantWord>wed</ImportantWord>,{" "}
                <ImportantWord>thu</ImportantWord>, <ImportantWord>fri</ImportantWord>, or{" "}
                <ImportantWord>sat</ImportantWord>,
            </p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    value={defaultValue}
                    startWeekOn="mon"
                    onChange={setDisableDatesValue}
                />
            </div>

            <CodeHighlighter language="tsx" code={START_WEEK_ON} />

            <Separator />

            <Title2 id="disabled-dates">Disabled Dates</Title2>
            <p>
                Use the <ImportantWord>disabledDates</ImportantWord> to disable set specific date
                range or group of date range.
            </p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    disabledDates={[
                        {
                            startDate: new Date("2024-02-02"),
                            endDate: new Date("2024-02-05")
                        },
                        {
                            startDate: new Date("2024-02-11"),
                            endDate: new Date("2024-02-16")
                        }
                    ]}
                    startFrom={new Date("2024-02-01")}
                    value={disabledDatesValue}
                    onChange={setDisableDatesValue}
                />
            </div>

            <CodeHighlighter language="tsx" code={DISABLED_DATES()} />

            <Separator />

            <div className="flex justify-start">
                <NavLink href="/props" page={"Previous"} position={"text-start"}>
                    Props
                </NavLink>
            </div>
        </DocLayout>
    );
};

export default AdvancedFeatures;
