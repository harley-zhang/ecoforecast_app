import Navbar from '../scenes/Navbar';
import Footer from '../scenes/Footer';
import { Helmet } from 'react-helmet-async';
import { GoArrowUpRight } from 'react-icons/go';
import { HiChevronRight } from "react-icons/hi2";
import PlantFunctional from "../assets/GettingStarted/plant-functional.png";
import TimePeriod from "../assets/GettingStarted/time-period.png";
import GrazingWildfire from "../assets/GettingStarted/grazing-wildfire.png";
import DrawShape from "../assets/GettingStarted/draw-shape.png";
import Rectangle from "../assets/GettingStarted/rectangle.png";
import Download from "../assets/GettingStarted/download.png";
import DataViewer from "../assets/GettingStarted/data-viewer.png";
import Manager from "../assets/GettingStarted/manager.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const GettingStarted = () => {
    return (
        <>
            <Helmet>
                <title>Getting Started | EcoForecast</title>
            </Helmet>
            <Navbar />
            <div className="mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl mt-28 xs:mt-32 sm:mt-40 font-product-sans-regular mb-4 text-center">Getting started</h1>

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

                {/* LAYER OPTIONS */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Layer options</h1>
                {/* Plant functional type */}
                <div className="flex items-center mb-24 mt-12 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Plant functional type</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                Use the checkbox to choose from big sagebrush, perennial C3 grasses, perennial C4 grasses, perennial grasses, annual C3 grasses, and forbs. Check all relevant species.
                            </p>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={PlantFunctional} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>
                {/* Time period and scenario */}
                <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Time period and scenario</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                Choose from three time periods&mdash;current (1981-2010), mid-century (2031-2060), and end-century (2071-2100)&mdash;and two climate change scenarios, RCP4.5 (a less severe trajectory) and RCP8.5 (a more extreme trajectory).
                            </p>
                            <div className="flex text-sm font-product-sans-light-regular tracking-wide">
                                <a
                                    href="https://cal-adapt.org/help/faqs/which-rcp-scenarios-should-i-use-in-my-analysis/"
                                    className="flex items-center relative group"
                                >
                                    Read more about RCPs <GoArrowUpRight size={15} className="ml-1" />
                                    <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </a>
                            </div>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={TimePeriod} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>
                {/* Grazing and wildfire */}
                <div className="flex items-center mt-24 mb-12 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Grazing and wildfire</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                EcoForecast can simulate various grazing levels and incorporate wildfire scenarios. Providing inputs based on specific grazing conditions or wildfire susceptibility in your area of interest.
                            </p>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={GrazingWildfire} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>
                <p className="font-product-sans-light-regular text-md xs:text-lg sm:text-xl text-center">Note that not all combinations of selected layers exist.
                </p>

                {/* AREA OF INTEREST */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Area of interest</h1>
                {/* Draw a shape */}
                <div className="flex items-center mb-24 mt-12 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Draw a shape</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                Press Draw and use the cursor to click points encircling your area of interest. Once finished, click the first point again to complete the selection.
                            </p>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={DrawShape} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>
                {/* Produce a rectangle */}
                <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Produce a rectangle</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                Enter the latitude and longitude coordinates of the North-East (top right) and south west (bottom left) vertices of a rectangular area of interest.
                            </p>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={Rectangle} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>

                {/* DOWNLOADING DATA */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Downloading data</h1>
                {/* Generate a download link */}
                <div className="flex items-center my-12 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Get download link</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                Press Download to generate a download link. The link contains a compressed ZIP file containing TIF rasters of all the selected layers within the area(s) of interest. If no area(s) of interest were selected, the images will cover the entire layer.
                            </p>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={Download} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>
                <p className="font-product-sans-light-regular text-md xs:text-lg sm:text-xl text-center">Due to the size of images, certain downloads are not possible.
                </p>

                {/* FEATURES */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Features</h1>
                {/* Data viewer */}
                <div className="flex items-center mb-24 mt-12 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Data viewer</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                Use the data viewer to either click a data point on the map or enter the coordinates of a point to see the data for all selected layers. Use the&nbsp;
                                <FaArrowUpRightFromSquare size={17} className="inline-block pb-[3px]" />
                                &nbsp;button to view the full size chart or download it as a CSV, SVG, or PNG.                            </p>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={DataViewer} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>
                {/* Geometry and layer managers */}
                <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Geometry imports and layers managers</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                Use the geometry imports and layers managers to hide or show shapes or data layers. Unchecking a layer does not delete it, only hides it from view.
                            </p>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img src={Manager} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                        </div>
                    </div>
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
