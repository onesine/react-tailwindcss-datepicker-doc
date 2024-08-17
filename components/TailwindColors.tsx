interface Props {
    changeColor: (value: string) => void;
}

const TailwindColors = (props: Props) => {
    const { changeColor } = props;

    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            <div
                onClick={() => changeColor("blue")}
                className="h-10 px-8 text-xs font-medium bg-blue-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                blue
            </div>
            <div
                onClick={() => changeColor("orange")}
                className="h-10 px-8 text-xs font-medium bg-orange-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                orange
            </div>
            <div
                onClick={() => changeColor("yellow")}
                className="h-10 px-8 text-xs font-medium bg-yellow-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                yellow
            </div>
            <div
                onClick={() => changeColor("red")}
                className="h-10 px-8 text-xs font-medium bg-red-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                red
            </div>
            <div
                onClick={() => changeColor("purple")}
                className="h-10 px-8 text-xs font-medium bg-purple-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                purple
            </div>
            <div
                onClick={() => changeColor("amber")}
                className="h-10 px-8 text-xs font-medium bg-amber-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                amber
            </div>
            <div
                onClick={() => changeColor("lime")}
                className="h-10 px-8 text-xs font-medium bg-lime-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                lime
            </div>
            <div
                onClick={() => changeColor("green")}
                className="h-10 px-8 text-xs font-medium bg-green-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                green
            </div>
            <div
                onClick={() => changeColor("emerald")}
                className="h-10 px-8 text-xs font-medium bg-emerald-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                emerald
            </div>
            <div
                onClick={() => changeColor("teal")}
                className="h-10 px-8 text-xs font-medium bg-teal-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                teal
            </div>
            <div
                onClick={() => changeColor("cyan")}
                className="h-10 px-8 text-xs font-medium bg-cyan-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                cyan
            </div>
            <div
                onClick={() => changeColor("sky")}
                className="h-10 px-8 text-xs font-medium bg-sky-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                sky
            </div>
            <div
                onClick={() => changeColor("indigo")}
                className="h-10 px-8 text-xs font-medium bg-indigo-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                indigo
            </div>
            <div
                onClick={() => changeColor("violet")}
                className="h-10 px-8 text-xs font-medium bg-violet-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                violet
            </div>
            <div
                onClick={() => changeColor("purple")}
                className="h-10 px-8 text-xs font-medium bg-purple-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                purple
            </div>
            <div
                onClick={() => changeColor("fuchsia")}
                className="h-10 px-8 text-xs font-medium bg-fuchsia-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                fuchsia
            </div>
            <div
                onClick={() => changeColor("pink")}
                className="h-10 px-8 text-xs font-medium bg-pink-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                pink
            </div>
            <div
                onClick={() => changeColor("rose")}
                className="h-10 px-8 text-xs font-medium bg-rose-500 rounded-md flex items-center justify-center text-white cursor-pointer"
            >
                rose
            </div>
        </div>
    );
};

export default TailwindColors;
