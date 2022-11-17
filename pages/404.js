import Link from "next/link";
import ThemeProvider from "../components/ThemeProvider";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Error404 = () => {
    return (
        <ThemeProvider>
            <Nav/>

            <div className="w-4/5 mx-auto pt-[73px]">
                <div className="flex text-center flex-col items-center justify-center space-y-4 pt-14 md:pt-20 pb-6">
                    <h2 className="font-bold text-7xl text-gray-700">404</h2>
                    <p className="font-bold text-xl md:text-2xl uppercase text-gray-700">Page not found</p>
                    <hr className="w-14"/>
                    <p className="w-3/4 md:w-2/4 lg:w-1/4 text-gray-500 text-sm font-medium">But if you don{"'"}t change your direction, and if you keep looking, you may end up where you are heading.</p>

                    <Link
                        href="/"
                        className="border-sky-500 text-sky-500 border py-1.5 px-4 rounded-full text-sm font-medium hover:border-sky-600 hover:text-sky-600"
                    >
                        Take me home
                    </Link>
                </div>
            </div>

            <Footer/>
        </ThemeProvider>
    );
};

export default Error404;