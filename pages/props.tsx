import { useEffect, useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

import AlertWarning from "../components/AlertWarning";
import AsideWindow from "../components/AsideWindow";
import CodeHighlighter from "../components/CodeHighlighter";
import { ImportantWord, Separator, Title1, Title2 } from "../components/CodeWindow";
import DocLayout from "../components/DocLayout";
import NavLink from "../components/NavLink";
import {
    AS_SINGLE,
    CONTAINER_CLASS_NAME,
    DISABLE,
    DISPLAY_FORMAT,
    INPUT_CLASS_NAME,
    MIN_DATE_MAX_DATE,
    PLACEHOLDER,
    POPOVER_DIRECTION,
    READ_ONLY,
    SEPARATOR,
    SHORTCUTS_FOOTER,
    SIGNLE_RANGE,
    SIMPLE_USAGE,
    START_FROM,
    TOGGLE_CLASS_NAME,
    USE_RANGE
} from "../constants";

const MIN_DATE = new Date();
MIN_DATE.setDate(MIN_DATE.getDate() - 4);

const MAX_DATE = new Date();
MAX_DATE.setDate(MAX_DATE.getDate() + 4);

const START_FROM_DATE = new Date();
START_FROM_DATE.setMonth(START_FROM_DATE.getMonth() + 1);

const LINKS = {
    "On this page": [
        {
            text: "Default Configuration",
            url: "#default-configuration"
        },
        {
            text: "Single Date",
            url: "#single-date"
        },
        {
            text: "Use Range",
            url: "#use-range"
        },
        {
            text: "Single Date & Use Range",
            url: "#single-date&use-range"
        },
        {
            text: "Placeholder",
            url: "#placeholder"
        },
        {
            text: "Separator",
            url: "#separator"
        },
        {
            text: "Start From",
            url: "#start-from"
        },
        {
            text: "Show Shortcuts & Show Footer",
            url: "#shortcuts-footer"
        },
        {
            text: "Display Format",
            url: "#displayFormat"
        },
        {
            text: "Read Only",
            url: "#readOnly"
        },
        {
            text: "Disabled",
            url: "#disabled"
        },
        {
            text: "Input class",
            url: "#input-class"
        },
        {
            text: "Container class",
            url: "#container-class"
        },
        {
            text: "Toggle class",
            url: "#toggle-class"
        },
        {
            text: "Popover direction",
            url: "#popover-direction"
        },
        {
            text: "Min Date and Max Date",
            url: "#min-date-and-max-date"
        }
    ]
};

const Props = () => {
    useEffect(() => {
        document.title = "Props";
    }, []);

    const defaultValue: DateValueType = { startDate: null, endDate: null };

    const [defaultConfig, setDefaultConfig] = useState<DateValueType>(defaultValue);
    const [singleDate, setSingleDate] = useState<DateValueType>(defaultValue);
    const [range, setRange] = useState<DateValueType>(defaultValue);
    const [rangeAndSingle, setRangeAndSingle] = useState<DateValueType>(defaultValue);
    const [placeholder, setPlaceholder] = useState<DateValueType>(defaultValue);
    const [separator, setSeparator] = useState<DateValueType>(defaultValue);
    const [startForm, setStartForm] = useState<DateValueType>(defaultValue);
    const [showShortcuts, setShowShortcuts] = useState<DateValueType>(defaultValue);
    const [disabled, setDisabled] = useState<DateValueType>(defaultValue);
    const [inputClass, setInputClass] = useState<DateValueType>(defaultValue);
    const [containerClass, setContainerClass] = useState<DateValueType>(defaultValue);
    const [readOnly, setReadOnly] = useState<DateValueType>(defaultValue);
    const [displayFormat, setDisplayFormat] = useState<DateValueType>(defaultValue);
    const [toggleClassNameValue, setToggleClassNameValue] = useState<DateValueType>(defaultValue);
    const [minMaxValue, setMinMaxValue] = useState<DateValueType>(defaultValue);

    return (
        <DocLayout aside={<AsideWindow links={LINKS} />}>
            <Title1 id="props">Props</Title1>

            <p>
                All props except <ImportantWord>primaryColor</ImportantWord> that are available for
                configuring the <ImportantWord>react-tailwindcss-datepicker</ImportantWord>.
            </p>

            <Separator />

            <Title2 id="default-configuration">Default Configuration</Title2>
            <p>
                The <ImportantWord>react-tailwindcss-datepicker</ImportantWord> if you don{"'"}t set
                any <ImportantWord>props</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker value={defaultConfig} onChange={value => setDefaultConfig(value)} />
            </div>

            <CodeHighlighter language="tsx" code={SIMPLE_USAGE} />

            <Separator />

            <Title2 id="single-date">Single Date</Title2>

            <p>
                Using date picker as single date. Just use the props{" "}
                <ImportantWord>asSingle</ImportantWord> to <ImportantWord>true</ImportantWord>.
            </p>
            <p>
                By default the value is <ImportantWord>false</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    value={singleDate}
                    onChange={value => setSingleDate(value)}
                    asSingle={true}
                />
            </div>

            <CodeHighlighter language="tsx" code={AS_SINGLE} />

            <Separator />

            <Title2 id="use-range">Use Range</Title2>

            <p>
                With the <ImportantWord>useRange</ImportantWord> props at{" "}
                <ImportantWord>false</ImportantWord> you only display a calendar.
            </p>
            <p>
                By default the value is <ImportantWord>true</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker value={range} onChange={value => setRange(value)} useRange={false} />
            </div>

            <CodeHighlighter language="tsx" code={USE_RANGE} />

            <Separator />

            <Title2 id="single-date&use-range">Single Date & Use Range</Title2>

            <div className="my-7">
                <Datepicker
                    value={rangeAndSingle}
                    onChange={value => setRangeAndSingle(value)}
                    useRange={false}
                    asSingle={true}
                />
            </div>

            <CodeHighlighter language="tsx" code={SIGNLE_RANGE} />

            <Separator />

            <Title2 id="placeholder">Placeholder</Title2>

            <p>
                Use the <ImportantWord>placeholder</ImportantWord> props to change the default{" "}
                <ImportantWord>placeholder</ImportantWord> value.
            </p>
            <p className="mt-1">
                By default the value is <ImportantWord>YYYY-MM-DD ~ YYYY-MM-DD</ImportantWord> or{" "}
                <ImportantWord>YYYY-MM-DD</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    value={placeholder}
                    onChange={value => setPlaceholder(value)}
                    placeholder="My Placeholder"
                />
            </div>

            <CodeHighlighter language="tsx" code={PLACEHOLDER} />

            <Separator />

            <Title2 id="separator">Separator</Title2>

            <p>
                Use the <ImportantWord>separator</ImportantWord> props to change the default{" "}
                <ImportantWord>separator</ImportantWord> value.
            </p>
            <p className="mt-1">
                By default the value is <ImportantWord>~</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    value={separator}
                    onChange={value => setSeparator(value)}
                    separator="to"
                />
            </div>

            <CodeHighlighter language="tsx" code={SEPARATOR} />

            <Separator />

            <Title2 id="start-from">Start from</Title2>
            <p>
                Use the <ImportantWord>startFrom</ImportantWord> props to change the default{" "}
                <ImportantWord>startFrom</ImportantWord> value.
            </p>
            <p className="mt-1">
                By default the value is <ImportantWord>new Date()</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    startFrom={START_FROM_DATE}
                    value={startForm}
                    onChange={value => setStartForm(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={START_FROM} />

            <Separator />

            <Title2 id="shortcuts-footer">Show Shortcuts & Show Footer</Title2>
            <p>
                Use <ImportantWord>showShortcuts</ImportantWord> and{" "}
                <ImportantWord>showFooter</ImportantWord> to display or not the shortcuts and footer
                respectively.
            </p>
            <p className="mt-1">
                By default both have the value <ImportantWord>false</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    value={showShortcuts}
                    onChange={value => setShowShortcuts(value)}
                    showShortcuts={true}
                    showFooter={true}
                />
            </div>

            <CodeHighlighter language="tsx" code={SHORTCUTS_FOOTER} />

            <Separator />

            <Title2 id="displayFormat">Display Format</Title2>
            <p>
                Use the <ImportantWord>displayFormat</ImportantWord> props to change the date
                display format.
            </p>
            <p className="mt-1 mb-3">
                By default, the value is <ImportantWord>YYYY-MM-DD</ImportantWord>.
            </p>

            <AlertWarning>
                ⚠️ Editing the text field to change the date range only supports the YYYY-MM-DD
                format at this time.
            </AlertWarning>

            <div className="my-7">
                <Datepicker
                    value={displayFormat}
                    onChange={value => setDisplayFormat(value)}
                    displayFormat="DD/MM/YYYY"
                />
            </div>

            <CodeHighlighter language="tsx" code={DISPLAY_FORMAT} />

            <Separator />

            <Title2 id="readOnly">Read Only</Title2>
            <p>
                Use the <ImportantWord>readOnly</ImportantWord> props to prevent editing the text
                field.
            </p>
            <p className="mt-1">
                By default, the value is <ImportantWord>false</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    value={readOnly}
                    onChange={value => setReadOnly(value)}
                    readOnly={true}
                />
            </div>

            <CodeHighlighter language="tsx" code={READ_ONLY} />

            <Separator />

            <Title2 id="disabled">Disabled</Title2>
            <p>
                Use the <ImportantWord>disabled</ImportantWord> props to disable the{" "}
                <ImportantWord>react-tailwindcss-select</ImportantWord> field.
            </p>
            <p className="mt-1">
                By default, the value is <ImportantWord>false</ImportantWord>.
            </p>

            <div className="my-7">
                <Datepicker
                    value={disabled}
                    onChange={value => setDisabled(value)}
                    disabled={true}
                />
            </div>

            <CodeHighlighter language="tsx" code={DISABLE} />

            <Separator />

            <Title2 id="input-class">Input class</Title2>
            <p>
                Use the <ImportantWord>inputClassName</ImportantWord> props to override the default{" "}
                <ImportantWord>react-tailwindcss-datepicker</ImportantWord> input classes.
            </p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    inputClassName="w-full rounded-md focus:ring-0 font-normal bg-blue-300 placeholder:text-blue-100 text-white dark:bg-blue-900 dark:placeholder:text-blue-100"
                    value={inputClass}
                    onChange={value => setInputClass(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={INPUT_CLASS_NAME} />

            <Separator />

            <Title2 id="container-class">Container class</Title2>
            <p>
                Use the <ImportantWord>containerClassName</ImportantWord> props to override the
                default <ImportantWord>react-tailwindcss-datepicker</ImportantWord> input container
                classes.
            </p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    value={containerClass}
                    containerClassName="relative mt-8"
                    onChange={value => setContainerClass(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={CONTAINER_CLASS_NAME} />

            <Separator />

            <Title2 id="toggle-class">Toggle class</Title2>
            <p>
                Use the <ImportantWord>toggleClassName</ImportantWord> props to override the default{" "}
                <ImportantWord>react-tailwindcss-datepicker</ImportantWord> toggle button classes.
            </p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    value={toggleClassNameValue}
                    toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                    onChange={value => setToggleClassNameValue(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={TOGGLE_CLASS_NAME} />

            <Separator />

            <Title2 id="popover-direction">Popover direction</Title2>
            <p>
                Use the <ImportantWord>popoverDirection</ImportantWord> props to set the display
                position of the calendar.
            </p>
            <p>
                <ImportantWord>popoverDirection</ImportantWord> can take the value{" "}
                <ImportantWord>&quot;up&quot;</ImportantWord> or{" "}
                <ImportantWord>&quot;down&quot;</ImportantWord>. By default{" "}
                <ImportantWord>popoverDirection</ImportantWord> is{" "}
                <ImportantWord>undefined</ImportantWord>
            </p>

            <div className="my-7">
                <Datepicker
                    value={minMaxValue}
                    popoverDirection={"up"}
                    onChange={value => setMinMaxValue(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={POPOVER_DIRECTION} />

            <Separator />

            <Title2 id="min-date-and-max-date">Min Date and Max Date</Title2>
            <p>
                Use the <ImportantWord>minDate</ImportantWord> and{" "}
                <ImportantWord>maxDate</ImportantWord> props to set range of enabled dates in
                between these dates.
            </p>

            <div className="my-7">
                <Datepicker
                    minDate={MIN_DATE}
                    maxDate={MAX_DATE}
                    value={minMaxValue}
                    onChange={value => setMinMaxValue(value)}
                />
            </div>

            <CodeHighlighter language="tsx" code={MIN_DATE_MAX_DATE} />

            <Separator />

            <div className="flex space-x-4">
                <NavLink href="/theming-options" position="text-start" page={"Previous"}>
                    Theming options
                </NavLink>

                <NavLink href="/advanced-features">Advanced features</NavLink>
            </div>
        </DocLayout>
    );
};

export default Props;
