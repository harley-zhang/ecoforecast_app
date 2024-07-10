import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
    return (
        <footer className="pt-24 pb-10">
            <div className="mx-auto px-5 sm:px-10 md:px-5 md:w-[1000px] flex flex-wrap justify-start items-start text-sm font-product-sans-light-regular tracking-wide">
                {/* Column 1: EcoForecast */}
                <div className="w-48 mb-12">
                    <h3 className="text-grey mb-4">EcoForecast</h3>
                    <ul>
                        <li className="mb-4 text-black">
                            <a
                                href="/app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                Launch App <GoArrowUpRight size={13} className="ml-1" />
                            </a>
                        </li>
                        <li>
                            <a href="/overview">
                                App Overview
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Supporting Resources */}
                <div className="w-48 mb-12">
                    <h3 className="text-grey mb-4">Supporting Resources</h3>
                    <ul>
                        <li className="mb-4 text-black">
                            <a href="/stepwat2">
                                STEPWAT2
                            </a>
                        </li>
                        <li>
                            <a href="/research">
                                Research
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Terms & policies */}
                <div className="w-48 mb-12">
                    <h3 className="text-grey mb-4">Terms & policies</h3>
                    <ul>
                        <li className="mb-4 text-black">
                            <a href="/terms">
                                Terms of use
                            </a>
                        </li>
                        <li>
                            <a href="/privacy">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* EcoForecast 2022-2024 */}
                <div className="w-full mt-6 text-sm text-grey">
                    EcoForecast © 2022&ndash;2024
                </div>
            </div>
        </footer>
    );
};

export default Footer;
