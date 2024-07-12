import { GoArrowUpRight } from "react-icons/go";
import { HiChevronRight } from "react-icons/hi2";
import meetEcoForecast from "../assets/Home/satellite.png";
import aboutStepwat from "../assets/Home/sagebrush.png";
import backedByScience from "../assets/Home/field-research.png";
import useMediaQuery from '../hooks/useMediaQuery';

const Info = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <div className="mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
            {isAboveSmallScreens ? (
                <div>
                    {/*** DESKTOP VIEW ***/}
                    {/* Meet EcoForecast */}
                    <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                        <div className="absolute inset-0 flex w-full h-full">
                            <div className="w-1/2 overflow-hidden">
                                <img src={meetEcoForecast} alt="Satellite view" className="w-full h-full object-cover rounded-l-lg" />
                            </div>
                            <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-r-lg h-full flex flex-col justify-center">
                                <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Meet EcoForecast</h3>
                                <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                    This online app, featuring data generated by STEPWAT2 across 14 Western US states, allows land managers, farmers, foresters, and ranchers to visualize and simulate future dryland plant ecosystem dynamics based on plant functional types, climate scenarios, and land use factors.
                                </p>
                                <div className="flex space-x-6 text-sm font-product-sans-light-regular tracking-wide">
                                    <a
                                        href="/app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center relative group"
                                    >
                                        Launch app <GoArrowUpRight size={15} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                    <a href="/overview" className="flex items-center relative group">
                                        Getting started <HiChevronRight size={14} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About STEPWAT2 */}
                    <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                        <div className="absolute inset-0 flex w-full h-full">
                            <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                                <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">About STEPWAT2</h3>
                                <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                    STEPWAT2 is a simulation model that assesses climate change and disturbance impacts on dryland plant communities. Using a process-based soil water model, it predicts how soil moisture and disturbances alter plant composition and biomass.
                                </p>
                                <div className="flex space-x-6 text-sm font-product-sans-light-regular tracking-wide">
                                    <a href="/stepwat2" className="flex items-center relative group">
                                        Use STEPWAT2 <HiChevronRight size={14} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                    <a href="/overview" className="flex items-center relative group">
                                        Documentation <GoArrowUpRight size={15} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="w-1/2 overflow-hidden">
                                <img src={aboutStepwat} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-r-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Backed by science */}
                    <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                        <div className="absolute inset-0 flex w-full h-full">
                            <div className="w-1/2 overflow-hidden">
                                <img src={backedByScience} alt="Dryland ecosystem field researchers" className="w-full h-full object-cover rounded-l-lg" />
                            </div>
                            <div className="w-1/2 bg-greymd p-[5vw] md:p-16 rounded-r-lg h-full flex flex-col justify-center">
                                <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Backed by science</h3>
                                <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                    STEPWAT2 was validated using field data from 15 big sagebrush sites. Simulated big sagebrush biomass correlated with field measurements and simulated densities match field data. Total shrub and herbaceous biomass simulations are within one standard deviation of field measurements, demonstrating the model's accuracy.
                                </p>
                                <div className="flex space-x-6 text-sm font-product-sans-light-regular tracking-wide">
                                    <a
                                        href="https://doi.org/10.1002/ecs2.2394"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center relative group"
                                    >
                                        Read the paper <GoArrowUpRight size={15} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                < div >
                    {/*** MOBILE VIEW ***/}
                    {/* Meet EcoForecast */}
                    < div className="flex flex-col items-center my-12 relative">
                        <div className="w-full">
                            <div className="bg-greymd p-[6vw] sm:p-[6vw] rounded-t-lg flex flex-col justify-center">
                                <h3 className="text-base font-product-sans-regular mb-4 text-grey">Meet EcoForecast</h3>
                                <p className="text-base tracking-wide font-product-sans-light-regular mb-4">
                                    This online app, featuring 60 raster images generated by STEPWAT2 across 14 US states, allows land managers, farmers, foresters, and ranchers to visualize and simulate future scenarios based on plant types, climate projections, and land use factors.
                                </p>
                                <div className="flex space-x-6 text-sm font-product-sans-light-regular tracking-wide mb-2">
                                    <a
                                        href="/app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center group relative"
                                    >
                                        Launch app <GoArrowUpRight size={15} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                    <a href="/getting-started" className="flex items-center relative group">
                                        Getting started <HiChevronRight size={14} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:order-2">
                            <div className="w-full overflow-hidden h-[calc(100vw-40px)]">
                                <img src={meetEcoForecast} alt="Satellite view" className="w-full h-full object-cover rounded-b-lg" />
                            </div>
                        </div>
                    </div>

                    {/* About STEPWAT2 */}
                    <div className="flex flex-col items-center my-12 relative">
                        <div className="w-full">
                            <div className="bg-greymd p-[6vw] sm:p-[6vw] rounded-t-lg flex flex-col justify-center">
                                <h3 className="text-base font-product-sans-regular mb-4 text-grey">About STEPWAT2</h3>
                                <p className="text-base tracking-wide font-product-sans-light-regular mb-4">
                                    STEPWAT2 is a simulation model that assesses climate change and disturbance impacts on dryland plant communities. Using a process-based soil water model, it predicts how soil moisture and disturbances alter plant composition and biomass.
                                </p>
                                <div className="flex space-x-6 text-sm font-product-sans-light-regular tracking-wide mb-2">
                                    <a href="/stepwat2" className="flex items-center relative group">
                                        Use STEPWAT2 <HiChevronRight size={14} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                    <a href="/overview" className="flex items-center relative group">
                                        Documentation <GoArrowUpRight size={15} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:order-2">
                            <div className="w-full overflow-hidden h-[calc(100vw-40px)]">
                                <img src={aboutStepwat} alt="Sagebrush ecosystem" className="w-full h-full object-cover rounded-b-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Backed by science */}
                    <div className="flex flex-col items-center my-12 relative">
                        <div className="w-full">
                            <div className="bg-greymd p-[6vw] sm:p-[6vw] rounded-t-lg flex flex-col justify-center">
                                <h3 className="text-base font-product-sans-regular mb-4 text-grey">Backed by science</h3>
                                <p className="text-base tracking-wide font-product-sans-light-regular mb-4">
                                    STEPWAT2 was validated using field data from 15 big sagebrush sites. Simulated big sagebrush biomass correlated with field measurements and simulated densities match field data. Total shrub and herbaceous biomass simulations are within one standard deviation of field measurements, demonstrating the model's accuracy.
                                </p>
                                <div className="flex space-x-6 text-sm font-product-sans-light-regular tracking-wide mb-2">
                                    <a
                                        href="https://doi.org/10.1002/ecs2.2394"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center relative group"
                                    >
                                        Read more <GoArrowUpRight size={15} className="ml-1" />
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:order-2">
                            <div className="w-full overflow-hidden h-[calc(100vw-40px)]">
                                <img src={backedByScience} alt="Dryland ecosystem field researchers" className="w-full h-full object-cover rounded-b-lg" />
                            </div>
                        </div>
                    </div>
                </div >
            )
            }

        </div >
    );
};

export default Info;
