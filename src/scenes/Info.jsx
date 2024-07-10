import { GoArrowUpRight } from "react-icons/go";
import image1 from "../assets/sagebrush.png";
import useMediaQuery from "../hooks/useMediaQuery";

const Info = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const isMediumScreens = useMediaQuery("(min-width: 768px) and (max-width: 1130px)");

    return (
        <section className="relative flex flex-col-reverse items-center sm:flex-row mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
            {/* Image Section */}
            {isAboveSmallScreens && (
                <img src={image1} alt="Info Image" className="w-full md:w-[50%] mx-auto mb-5 md:mb-0 md:mr-5" />
            )}

            {/* Text Section */}
            <div className={`flex flex-col ${isAboveSmallScreens ? "md:w-[50%]" : "w-full sm:w-auto"} mt-5 md:mt-0`}>
                <div className="bg-white p-5 md:p-10 rounded-lg shadow-md">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3">EcoForecast</h2>
                    <p className="text-base mb-5">App that does it all</p>
                    <a
                        href="/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue hover:text-blue-dark transition duration-500"
                    >
                        Launch app <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                </div>
            </div>

            {/* Image Section for smaller screens */}
            {!isAboveSmallScreens && (
                <img src={image1} alt="Info Image" className="w-full mt-5 md:mt-0 mx-auto mb-5" />
            )}
        </section>
    );
};

export default Info;
