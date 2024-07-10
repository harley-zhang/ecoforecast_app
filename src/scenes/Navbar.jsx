import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/logo-shadow-notext.png";

const Navbar = () => {
    return (
        <nav className="bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white z-40 w-full fixed top-0 py-4">
            <div className="flex items-center justify-between mx-auto px-5">
                <a href="/" className="flex items-center space-x-2">
                    <img src={logo} alt="ecoforecast-logo" className="h-10 z-50 pr-1" />
                    <span className="font-product-sans-medium-regular text-2xl text-grey hidden xs:block">EcoForecast</span>
                </a>
                <div className="flex items-center space-x-5">
                    <a 
                        href="/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-product-sans-light-regular tracking-wide flex items-center bg-blue hover:opacity-90 transition-all duration-200 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full"
                    >
                        <p className="text-sm sm:text-base">Launch App</p>
                        <GoArrowUpRight className="ml-1" />
                    </a>
                    <a href="/readmore" className="font-product-sans-light-regular tracking-wide text-sm sm:text-base">
                        Read More
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
