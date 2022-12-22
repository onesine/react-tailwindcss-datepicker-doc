import {useEffect, useState} from "react";
import DocLayout from "../components/DocLayout";
import CodeWindow, {
    FunctionColor,
    ImportantWord, Indent,
    InstallDatepicker,
    Keyword, LightBlue,
    ReactImport, Red,
    Separator, StringText,
    Title1,
    Title2
} from "../components/CodeWindow";
import {NavLink} from "../components/utils";
import Datepicker from "react-tailwindcss-datepicker";
import AsideWindow from "../components/AsideWindow";

const Props = () => {
    useEffect(() => {
        document.title = "Props";
    }, [])

    const defaultValue = {startDate: null, endDate: null};
    const links = {
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
        ],
    };

    const [defaultConfig, setDefaultConfig] = useState(defaultValue);

    const [singleDate, setSingleDate] = useState(defaultConfig);

    const [range, setRange] = useState(defaultValue);
    const [rangeAndSingle, setRangeAndSingle] = useState(defaultValue);
    const [placeholder, setPlaceholder] = useState(defaultValue);
    const [separator, setSeparator] = useState(defaultValue);
    const [startForm, setStartForm] = useState(defaultValue);
    const [showShortcuts, setShowShortcuts] = useState(defaultValue);
    const [disabled, setDisabled] = useState(defaultValue);
    const [inputClass, setInputClass] = useState(defaultValue);
    const [containerClass, setContainerClass] = useState(defaultValue);
    const [readOnly, setReadOnly] = useState(defaultValue);
    const [displayFormat, setDisplayFormat] = useState(defaultValue);

    const handleDefaultConfigChange = (newValue) => {
        setDefaultConfig(newValue);
    }

     return (
         <DocLayout aside={ <AsideWindow links={links}/> }>
             <Title1 id="props">Props</Title1>

             <p>All props except <ImportantWord>primaryColor</ImportantWord> that are available for configuring the <ImportantWord>react-tailwindcss-datepicker</ImportantWord>.</p>

             <Separator/>

             <Title2 id="default-configuration">Default Configuration</Title2>
             <p>The <ImportantWord>react-tailwindcss-datepicker</ImportantWord> if you don{"'"}t set any <ImportantWord>props</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={defaultConfig}
                     onChange={handleDefaultConfigChange}
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

             <Title2 id="single-date">Single Date</Title2>

             <p>Using date picker as single date. Just use the props <ImportantWord>asSingle</ImportantWord> to <ImportantWord>true</ImportantWord>.</p>
             <p>By default the value is <ImportantWord>false</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={singleDate}
                     onChange={value => setSingleDate(value)}
                     asSingle={true}
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
                                     <Keyword>asSingle</Keyword><LightBlue>={"{"}</LightBlue><Red>true</Red><LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="use-range">Use Range</Title2>

             <p>With the <ImportantWord>useRange</ImportantWord> props at <ImportantWord>false</ImportantWord> you only display a calendar.</p>
             <p>By default the value is <ImportantWord>true</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={range}
                     onChange={value => setRange(value)}
                     useRange={false}
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
                                     <Keyword>useRange</Keyword><LightBlue>={"{"}</LightBlue><Red>false</Red><LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="single-date&use-range">Single Date & Use Range</Title2>

             <div className="my-7">
                 <Datepicker
                     value={rangeAndSingle}
                     onChange={value => setRangeAndSingle(value)}
                     useRange={false}
                     asSingle={true}
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
                                     <Keyword>useRange</Keyword><LightBlue>={"{"}</LightBlue><Red>false</Red><LightBlue>{"}"}</LightBlue> <br/>
                                     <Keyword>asSingle</Keyword><LightBlue>={"{"}</LightBlue><Red>true</Red><LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="placeholder">Placeholder</Title2>

             <p>Use the <ImportantWord>placeholder</ImportantWord> props to change the default <ImportantWord>placeholder</ImportantWord> value.</p>
             <p className="mt-1">By default the value is <ImportantWord>YYYY-MM-DD ~ YYYY-MM-DD</ImportantWord> or <ImportantWord>YYYY-MM-DD</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={placeholder}
                     onChange={value => setPlaceholder(value)}
                     placeholder="My Placeholder"
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
                                     <Keyword>placeholder</Keyword><LightBlue>={"{"}</LightBlue><StringText>My Placeholder</StringText><LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="separator">Separator</Title2>

             <p>Use the <ImportantWord>separator</ImportantWord> props to change the default <ImportantWord>separator</ImportantWord> value.</p>
             <p className="mt-1">By default the value is <ImportantWord>~</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={separator}
                     onChange={value => setSeparator(value)}
                     separator="to"
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
                                     <Keyword>separator</Keyword><LightBlue>={"{"}</LightBlue><StringText>~</StringText><LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="start-from">Start from</Title2>
             <p>Use the <ImportantWord>startFrom</ImportantWord> props to change the default <ImportantWord>startFrom</ImportantWord> value.</p>
             <p className="mt-1">By default the value is <ImportantWord>new Date()</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={startForm}
                     onChange={value => setStartForm(value)}
                     startFrom={new Date("2022-01-01")}
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
                                     <Keyword>startFrom</Keyword><LightBlue>={"{"}new</LightBlue> <FunctionColor>Date</FunctionColor><LightBlue>(</LightBlue><StringText>2022-01-01</StringText><LightBlue>){"}"}</LightBlue> <br/>
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

             <Title2 id="shortcuts-footer">Show Shortcuts & Show Footer</Title2>
             <p>Use <ImportantWord>showShortcuts</ImportantWord> and <ImportantWord>showFooter</ImportantWord> to display or not the shortcuts and footer respectively.</p>
             <p className="mt-1">By default both have the value <ImportantWord>false</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={showShortcuts}
                     onChange={value => setShowShortcuts(value)}
                     showShortcuts={true}
                     showFooter={true}
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
                                     <Keyword>showShortcuts</Keyword><LightBlue>={"{"}</LightBlue><Red>true</Red><LightBlue>{"}"}</LightBlue> <br/>
                                     <Keyword>showFooter</Keyword><LightBlue>={"{"}</LightBlue><Red>true</Red><LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="displayFormat">Display Format</Title2>
             <p>Use the <ImportantWord>displayFormat</ImportantWord> props to change the date display format.</p>
             <p className="mt-1">By default, the value is <ImportantWord>YYYY-MM-DD</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={displayFormat}
                     onChange={value => setDisplayFormat(value)}
                     displayFormat="DD/MM/YYYY"
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
                                     <Keyword>displayFormat</Keyword><LightBlue>={"{"}</LightBlue><StringText>DD/MM/YYYY</StringText><LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="readOnly">Read Only</Title2>
             <p>Use the <ImportantWord>readOnly</ImportantWord> props to prevent editing the text field.</p>
             <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={readOnly}
                     onChange={value => setReadOnly(value)}
                     readOnly={true}
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
                                     <Keyword>readOnly</Keyword><LightBlue>={"{"}</LightBlue>true<LightBlue>{"}"}</LightBlue> <br/>
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

             <Title2 id="disabled">Disabled</Title2>
             <p>Use the <ImportantWord>disabled</ImportantWord> props to disable the <ImportantWord>react-tailwindcss-select</ImportantWord> field.</p>
             <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p>

             <div className="my-7">
                 <Datepicker
                     value={disabled}
                     onChange={value => setDisabled(value)}
                     disabled={true}
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
                                     <Keyword>disabled</Keyword><LightBlue>={"{"}</LightBlue>true<LightBlue>{"}"}</LightBlue> <br/>
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

            <Title2 id="input-class">Input class</Title2>
            <p>Use the <ImportantWord>inputClassName</ImportantWord> props to override the default <ImportantWord>react-tailwindcss-datepicker</ImportantWord> input classes.</p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    value={inputClass}
                    inputClassName="font-normal bg-blue-400 placeholder:text-blue-100 text-white dark:bg-blue-900 dark:placeholder:text-blue-100"
                    onChange={setInputClass}
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
                                    <Keyword>inputClassName</Keyword><LightBlue>={"\""}</LightBlue>font-normal bg-green-100 dark:bg-green-900 dark:placeholder:text-green-100<LightBlue>{"\""}</LightBlue> <br/>
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

            <Title2 id="container-class">Container class</Title2>
            <p>Use the <ImportantWord>containerClassName</ImportantWord> props to override the default <ImportantWord>react-tailwindcss-datepicker</ImportantWord> input container classes.</p>
            {/* <p className="mt-1">By default, the value is <ImportantWord>false</ImportantWord>.</p> */}

            <div className="my-7">
                <Datepicker
                    value={containerClass}
                    containerClassName="my-16"
                    onChange={setContainerClass}
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
                                    <Keyword>containerClassName</Keyword><LightBlue>={"\""}</LightBlue>my-16<LightBlue>{"\""}</LightBlue> <br/>
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

             <div className="flex space-x-4">
                 <NavLink href="/theming-options" position="text-start" page={"Previous"}>Theming options</NavLink>
                 <NavLink href="/advanced-features">Advanced features</NavLink>
             </div>

         </DocLayout>
     );
};

export default Props;