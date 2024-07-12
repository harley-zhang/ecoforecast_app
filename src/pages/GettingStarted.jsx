import Navbar from '../scenes/Navbar';
import Footer from '../scenes/Footer';
import { Helmet } from 'react-helmet-async';
import { GoArrowUpRight } from 'react-icons/go';
import { HiChevronRight } from "react-icons/hi2";

const GettingStarted = () => {
    return (
        <>
            <Helmet>
                <title>Getting Started | EcoForecast</title>
            </Helmet>
            <Navbar />
            <div className="mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-28 xs:mt-32 sm:mt-40 font-product-sans-regular mb-4 text-center">Getting started</h1>

                <div className="flex justify-center mt-8">
                    <a
                        href="/app"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center bg-blue hover:opacity-90 transition-all duration-300 text-white px-5 py-2 rounded-full mr-5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Start now
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                    <a
                        href="/stepwat2"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center relative group mr-5"
                    >
                        About STEPWAT2
                        <HiChevronRight size={14} className="ml-1" />
                        <span className="absolute left-0 bottom-[4px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                </div>

            </div>

            <div className="[w-750px] md:w-[1048px] pt-1 pb-12 bg-greylight mx-5 ssm:mx-10 md:mx-auto rounded-lg mt-28">
                <div className="sm:w-[750px] mx-auto px-5">
                    <h3 className="text-2xl sm:text-4xl font-product-sans-regular px-5 sm:px-16 mt-8 xs:mt-12 sm:mt-14 text-center">
                        Dive into the data and try EcoForecast today.
                    </h3>
                    <div className="flex justify-center mt-8">

                        <a
                            href="/app"
                            className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center bg-blue hover:opacity-90 transition-all duration-300 text-white px-5 py-2 rounded-full mr-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Launch EcoForecast
                            <GoArrowUpRight size={15} className="ml-1" />
                        </a>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default GettingStarted;
