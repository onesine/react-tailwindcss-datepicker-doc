import Nav from "./Nav";
import Sidebar from "./Sidebar";
import ThemeProvider from "./ThemeProvider";

const DocLayout = ({children}) => {
    return (
        <ThemeProvider>
            <Nav/>

            <Sidebar/>

            <main className="transition-all xl:transition-none duration-300 pt-[72px] lg:pl-[272px] xl:pr-[272px]">
                <div className="transition-all xl:transition-none duration-300 px-4 md:px-20 lg:px-28 pt-10 pb-40">
                    {children}
                </div>
            </main>
        </ThemeProvider>
    );
};

export default DocLayout;