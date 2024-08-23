export const REACT_TAILWINDCSS_DATEPICKER_VERSION = "1.7.2";

export const DEPENDENCIES = `
{
    // ...
    "dayjs": "^1.11.6", 
    "react": "^18.2.0" 
    // ...
}
`;

export const TAILWIND_CONFIG = `
// in your tailwind.config.js 
module.exports = { 
    // ... 
    content: [ 
        // ... 
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
        // ... 
    ]
    // ... 
} 
`;

export const SIMPLE_USAGE = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker 
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const SIMPLE_USAGE_WITH_SHORTCUTS = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker 
            value={value} 
            onChange={newValue => setValue(newValue)}
            showShortcuts={true}
        /> 
    );
};

export default App;
`;

export const THEMING_OPTIONS = (color: string) => `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const NEXT_MONTH = new Date();
NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: new Date(), 
        endDate: NEXT_MONTH
    });

    return (
        <Datepicker
            primaryColor={"${color}"}
            value={value} 
            onChange={newValue => setValue(newValue)}
            showShortcuts={true}
        /> 
    );
};

export default App;
`;

export const AS_SINGLE = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker 
            asSingle={true}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const USE_RANGE = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker 
            useRange={false}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const SIGNLE_RANGE = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker 
            useRange={false}
            asSingle={true}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const PLACEHOLDER = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            placeholder="My Placeholder"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const SEPARATOR = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            separator="to"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const START_FROM = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const START_FROM = new Date();
START_FROM.setMonth(START_FROM.getMonth() + 1);

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            startFrom={START_FROM}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const SHORTCUTS_FOOTER = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            showShortcuts={true}
            showFooter={true}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const DISPLAY_FORMAT = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            displayFormat="DD/MM/YYYY"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const READ_ONLY = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            readOnly={true}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const DISABLE = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            disabled={true}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const INPUT_ID_NAME_REQUIRED = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            inputId="datepicker"
            inputName="datepicker"
            required={true}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const INPUT_CLASS_NAME = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            inputClassName="w-full rounded-md focus:ring-0 font-normal bg-blue-300 placeholder:text-blue-100 text-white dark:bg-blue-900 dark:placeholder:text-blue-100"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const CONTAINER_CLASS_NAME = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            containerClassName="relative mt-8"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const TOGGLE_CLASS_NAME = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const POPOVER_DIRECTION = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            popoverDirection="up"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const MIN_DATE_MAX_DATE = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const MIN_DATE = new Date();
MIN_DATE.setDate(MIN_DATE.getDate() - 4);

const MAX_DATE = new Date();
MAX_DATE.setDate(MAX_DATE.getDate() + 4);

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            minDate={MIN_DATE}
            maxDate={MAX_DATE}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const DEFAULT_CONFIG = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            showFooter={true}
            showShortcuts={true}
            configs={{
                shortcuts: {
                    today: "TText",
                    yesterday: "YText",
                    past: period => "P-"+ period + " text",
                    currentMonth: "CMText",
                    pastMonth: "PMText"
                },
                footer: {
                    cancel: "CText",
                    apply: "AText"
                }
            }}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const CUSTOM_SHORTCUTS = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
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
                },
                footer: {
                    cancel: "CText",
                    apply: "AText"
                }
            }}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const LOCALIZATION_I18N = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            i18n={"fr"}
            showFooter={true}
            showShortcuts={true}
            configs={{
                shortcuts: {
                    today: "Aujourd'hui",
                    yesterday: "Hier",
                    past: period => "Les "+ period +" derniers jours",
                    currentMonth: "Ce mois-ci",
                    pastMonth: "Le mois dernier"
                },
                footer: {
                    cancel: "Quitter",
                    apply: "Appliquer"
                }
            }}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const START_WEEK_ON = `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            startWeekOn="mon"
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;

export const DISABLED_DATES = (
    currentYear = new Date().getFullYear()
) => `import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker
            disabledDates={[
                {
                    startDate: new Date("${currentYear}-02-02"),
                    endDate: new Date("${currentYear}-02-05")
                },
                {
                    startDate: new Date("${currentYear}-02-11"),
                    endDate: new Date("${currentYear}-02-12")
                }
            ]}
            startFrom={new Date("${currentYear}-02-01")}
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};

export default App;
`;
