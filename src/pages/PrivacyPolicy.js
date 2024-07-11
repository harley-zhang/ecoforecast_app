import React from 'react';
import Navbar from '../scenes/Navbar';
import Footer from '../scenes/Footer';


const TermsOfUse = () => {
    return (
        <>
            <Navbar />
            <div className="sm:w-[750px] mx-auto px-5">
                <p className="text-sm mt-36  text-grey text-center"><span className="font-product-sans-medium-regular">Effective: </span><span className="font-product-sans-light-regular tracking-wide">July 10, 2024</span></p>
                <h1 className="text-6xl mt-8 font-product-sans-regular mb-4 text-center">Privacy policy</h1>

                <h2 className="mt-16 font-product-sans-light-regular text-lg">Thank you for using EcoForecast!</h2>
                <p className="mt-6 font-product-sans-light-regular text-lg">
                    These Terms of Use apply to your use of the EcoForecast App and EcoForecast's other services for individuals, along with any associated software applications and websites (all together, “Services”). These Terms form an agreement between you and EcoForecast. By using our Services, you agree to these Terms.
                </p>
                <p className="mt-6 font-product-sans-light-regular text-lg">
                    Our <a href="/privacy" className="underline">Privacy Policy</a> explains how we collect and use personal information. Although it does not form part of these Terms, it is an important document that you should read.
                </p>

                <h3 className="text-3xl font-product-sans-regular mt-16">Who we are</h3>
                <p className="mt-6 font-product-sans-light-regular text-lg">
                    EcoForecast is a geospatial analysis and earth sciences company. Our mission is to ensure that environmental stewards and land managers have access to crucial scientific information.
                </p>

            </div>
            <Footer />
        </>
    );
};

export default TermsOfUse;
