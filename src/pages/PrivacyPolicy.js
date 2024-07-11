import React from 'react';
import Navbar from '../scenes/Navbar';
import Footer from '../scenes/Footer';
import { Helmet } from 'react-helmet-async';

const TermsOfUse = () => {
    return (
        <>
            <Helmet>
                <title>Privacy policy | EcoForecast</title>
            </Helmet>
            <Navbar />
            <div className="sm:w-[750px] mx-auto px-5">
                <p className="text-sm mt-36  text-grey text-center"><span className="font-product-sans-medium-regular">Effective: </span><span className="font-product-sans-light-regular tracking-wide">July 10, 2024</span></p>
                <h1 className="text-6xl mt-8 font-product-sans-regular mb-4 text-center">Privacy policy</h1>

                <p className="mt-16 font-product-sans-light-regular text-lg">We at EcoForecast (together with our affiliates, EcoForecast, “we”, “our” or “us”) respect your privacy and are strongly committed to keeping secure any information we obtain from you or about you. This Privacy Policy describes our practices with respect to Personal Information we collect from or about you when you use our website, applications, and services (collectively, "Services"). This Privacy Policy does not apply to content that we process on behalf of customers of our business offerings, such as our API. Our use of that data is governed by our customer agreements covering access to and use of those offerings.
                </p>

                <h3 className="text-3xl font-product-sans-regular mt-16">1. Personal information we collect</h3>
                <p className="mt-6 font-product-sans-light-regular text-lg">
                    EcoForecast does not knowingly collect Personal Information from users.
                </p>

                <h3 className="text-3xl font-product-sans-regular mt-16">2. Children</h3>
                <p className="mt-6 font-product-sans-light-regular text-lg">
                    Our Service is not directed to children under the age of 13.
                </p>

                <h3 className="text-3xl font-product-sans-regular mt-16">3. Links to other websites</h3>
                <p className="mt-6 font-product-sans-light-regular text-lg">
                    The Service may contain links to other websites not operated or controlled by EcoForecast ("Third Party Sites"). The information that you share with Third Party Sites will be governed by the specific privacy policies and terms of service of the Third Party Sites and not by this Privacy Policy. By providing these links we do not imply that we endorse or have reviewed these sites. Please contact the Third Party Sites directly for information on their privacy practices and policies.
                </p>

                <h3 className="text-3xl font-product-sans-regular mt-16">4. Changes to the privacy policy</h3>
                <p className="mt-6 font-product-sans-light-regular text-lg">
                    We may update this Privacy Policy from time to time. When we do, we will post an updated version on this page, unless another type of notice is required by applicable law.
                </p>

            </div>
            <Footer />
        </>
    );
};

export default TermsOfUse;
