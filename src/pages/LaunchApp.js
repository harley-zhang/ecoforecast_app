import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

const LaunchApp = () => {
    const isLargeEnough = useMediaQuery("(min-width: 1109px) and (min-height: 468px)");

    return (
        <>
            <div className="bg-greylight">
                <div className={`relative h-screen w-screen overflow-hidden ${!isLargeEnough ? 'hidden' : ''}`}>
                    <embed
                        src="https://harleyzhang.users.earthengine.app/view/current-sagebrush-biomass-test-app"
                        title="EcoForecast App"
                        className="h-full w-full border-0"
                    />
                    <div className="absolute top-0 right-0 w-72 h-14 bg-greylight z-50"></div>
                    {isLargeEnough && (
                        <Link to="/" className="absolute top-3 left-5 w-[12rem] h-11 m-0 p-0"></Link>
                    )}
                </div>
                {!isLargeEnough && (
                    <div className="relative h-screen w-screen overflow-hidden">
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-lightgrey z-50">
                            <div className="bg-greylight p-6 m-5 rounded border border-[#e0e0e0] text-greydark text-center font-roboto">
                                <p>EcoForecast requires a minimum screen size of 1109×468px.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default LaunchApp;
