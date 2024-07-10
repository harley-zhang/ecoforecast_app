import { GoArrowUpRight } from "react-icons/go";
import backgroundImg from "../assets/landing-bg.png"; // Import the background image

const Landing = ({ setSelectedPage }) => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center h-[30rem] md:h-[40rem] sm:h-[34rem] pb-20 sm:pb-10 pt-32 sm:pt-20"
            style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black bg-opacity-35"></div>

            {/* LANDING TEXT */}
            <div className="z-30 text-left mx-auto px-5 sm:px-10 md:w-[1000px]">
                <div>
                    <p className="text-white font-product-sans-light-regular text-3xl sm:text-4xl md:text-5xl font-helvetica tracking-wide z-10">
                        Earth Sciences for Environmental Stewards & Land Managers
                    </p>
                    <p className="text-white font-product-sans-light-regular mt-8 font-helvetica tracking-wide mb-7 text-base sm:text-xl">
                        Predict changes in dryland plant dynamics. Backed by real science.
                    </p>
                </div>

                {/* BUTTON AND EMAIL */}
                <div className="flex flex-col items-center md:flex-row mt-10">
                    <a className="rounded-r-sm mb-4 md:mb-0 md:mr-4" href="/app" target="_blank" rel="noopener noreferrer">
                        <div className="text-white font-product-sans-light-regular text-sm sm:text-base bg-blue text-darkgrey transition duration-500 w-full h-full flex items-center justify-center font-helvetica tracking-wide px-5 sm:px-7 py-2 sm:py-3 rounded-full hover:opacity-90">
                            Launch App
                            <GoArrowUpRight size={19} className="ml-1" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Landing;
