import React from 'react';
import yale from '../assets/logos/yale.png';
import usgs from '../assets/logos/usgs.png';
import marshall from '../assets/logos/marshall.png';
import utah from '../assets/logos/utah-state.png';
import gee from '../assets/logos/google-earth-engine.png';
import stepwat2 from '../assets/logos/stepwat2.png';
import useMediaQuery from '../hooks/useMediaQuery';

const supportLogos = [
    {
        url: yale,
        alt: 'Yale School of the Environment',
        link: 'https://environment.yale.edu/',
    },
    {
        url: usgs,
        alt: 'USGS',
        link: 'https://www.usgs.gov/',
    },
    {
        url: marshall,
        alt: 'Marshall University',
        link: 'https://www.marshall.edu/',
    },
    {
        url: utah,
        alt: 'Utah State University',
        link: 'https://www.usu.edu/',
    },
];

const poweredLogos = [
    {
        url: gee,
        alt: 'Google Earth Engine',
        link: 'https://earthengine.google.com/',
    },
    {
        url: stepwat2,
        alt: 'STEPWAT2',
        link: 'https://github.com/DrylandEcology/STEPWAT2',
    },
];

const Credits = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <div className="mt-20">
            <div className="sm:mb-10">
                <h2 className="text-center text-lg sm:text-xl mb-5 text-grey font-product-sans-regular">Supported By</h2>
                <div className="flex flex-wrap justify-center items-center px-5 md:px-0 pb-6">
                    {supportLogos.map((logo, index) => (
                        <a
                            key={index}
                            href={logo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`opacity-80 px-0 sm:px-10 md:px-16 pb-20 sm:py-0 ${isAboveSmallScreens ? "" : "min-w-[50%]"}`}
                        >
                            <img src={logo.url} alt={logo.alt} className="w-[75px] md:w-[90px] mx-auto" />
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-center text-lg sm:text-xl mb-5 text-grey font-product-sans-regular">Powered By</h2>
                <div className="flex flex-wrap justify-center items-center px-5 md:px-0 pb-6">
                    {poweredLogos.map((logo, index) => (
                        <a
                            key={index}
                            href={logo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`opacity-80 px-10 md:px-16 pb-20 sm:py-0 ${isAboveSmallScreens ? "" : "min-w-[50%]"}`}
                        >
                            <img src={logo.url} alt={logo.alt} className="w-28 md:w-32 mx-auto" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Credits;
