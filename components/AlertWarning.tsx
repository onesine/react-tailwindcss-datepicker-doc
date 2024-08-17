import { ReactNode } from "react";

interface Props {
    title?: string;
    children: ReactNode;
}

const AlertWarning = (props: Props) => {
    const { title = "Warning", children } = props;

    return (
        <div className="bg-amber-50/50 text-sm rounded-md border border-amber-300 p-4 text-amber-900/70 dark:border-amber-300/30 dark:text-amber-400 dark:bg-amber-400/10">
            <h4 className="font-bold uppercase mb-3">{title}</h4>

            <p>{children}</p>
        </div>
    );
};

export default AlertWarning;
