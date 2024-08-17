import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href: string;
    position?: string;
    page?: string;
}

const NavLink = (props: Props) => {
    const { children, href, position = "text-end", page = "Next" } = props;

    return (
        <Link
            href={href}
            className={`hover:transition hover:duration-300 py-2 px-4 ${position} w-1/2 border dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 rounded-md`}
        >
            <span className="block text-xs font-medium text-gray-500">{page} page</span>
            <span className="block text-sm text-sky-500 mt-1">{children}</span>
        </Link>
    );
};

export default NavLink;
