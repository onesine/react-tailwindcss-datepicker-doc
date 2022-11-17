import {useEffect} from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import SuperFeatures from "../components/SuperFeatures";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";

const Home = () => {
    useEffect(() => {
        document.title = "React Tailwindcss Datepicker";
    }, [])

    return (
        <ThemeProvider>
            <Nav/>

            <div className="px-2 md:px-0 md:w-4/5 mx-auto pt-[73px]">
                <HeroSection/>

                <SuperFeatures/>
            </div>

            <Footer/>
        </ThemeProvider>
    );
};

export default Home;
