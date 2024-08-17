import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const InfoAlert = (props: Props) => {
    const { children } = props;

    return (
        <div className="bg-blue-50/50 text-sm rounded-md border border-blue-300 p-4 text-blue-900/70 dark:border-blue-300/30 dark:text-blue-400 dark:bg-blue-400/10">
            <h4 className="font-bold uppercase mb-3">Info</h4>

            <div>{children}</div>
        </div>
    );
};

export default InfoAlert;
