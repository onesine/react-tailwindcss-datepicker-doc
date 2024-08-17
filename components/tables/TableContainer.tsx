import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const TableContainer = (props: Props) => {
    const { children } = props;

    return (
        <table className="w-full min-w-[540px] border-b dark:border-slate-700 text-left sm:min-w-full">
            <tbody className="divide-y dark:divide-slate-700 text-sm">{children}</tbody>
        </table>
    );
};

export default TableContainer;
