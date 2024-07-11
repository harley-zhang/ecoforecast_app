import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/logo-shadow-notext.png";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`bg-white z-40 w-full fixed top-0 py-2 transition-transform duration-300 ${visible ? 'delay-100' : 'delay-100 -translate-y-full'}`}>
            <div className="flex items-center justify-between mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
                <a href="/" className="flex items-center space-x-2">
                    <img src={logo} alt="ecoforecast-logo" className="h-8 sm:h-10 z-50 pr-1" />
                    <span className="font-product-sans-medium-regular text-xl xs:text-2xl text-greydark hidden xs:block">EcoForecast</span>
                </a>
                <div className="flex items-center space-x-3 xs:space-x-5">
                    <a
                        href="/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center bg-blue hover:opacity-90 transition-all duration-300 text-white px-3 sm:px-4 py-2 rounded-full"
                    >
                        {isAboveSmallScreens ? "Launch App" : "Launch"}
                        <GoArrowUpRight className="ml-1" />
                    </a>
                    <a href="/overview" className="font-product-sans-light-regular tracking-wide text-[.85rem] sm:text-sm">
                        {isAboveSmallScreens ? "App Overview" : "Overview"}
                    </a>
                    <a href="/stepwat2" className="font-product-sans-light-regular tracking-wide text-[.85rem] sm:text-sm">
                        STEPWAT2
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
