const SuperFeatures = () => {
    const features = [
        {
            emoji: "⚡️",
            title: "Powerful",
            text: "A React components which offers a great range of features"
        },
        {
            emoji: "🖖",
            title: "Customizable",
            text: "Supports multiple modes such as range, single date, various pickers, shortcuts and many more"
        },
        {
            emoji: "🎨",
            title: "Theming",
            text: "Use tailwind colors to provide multiple themes to your date range picker"
        }
    ];

    return (
        <div className="grid grid-cols-3 gap-6 md:gap-3 lg:gap-6">
            {features.map((item, index) => (
                <div
                    key={index}
                    className="col-span-3 md:col-span-1 bg-gray-100/70 rounded-lg p-6 dark:bg-white/10"
                >
                    <div className="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center text-xl dark:bg-slate-800">
                        {item.emoji}
                    </div>

                    <h4 className="font-medium my-2 dark:text-white/80">{item.title}</h4>

                    <p className="text-sm text-gray-600 dark:text-white/50">{item.text}.</p>
                </div>
            ))}
        </div>
    );
};

export default SuperFeatures;
