import Navbar from '../scenes/Navbar';
import Footer from '../scenes/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "Y17eb3a6c-79d4-4872-8186-91716a32d0ec");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact | EcoForecast</title>
            </Helmet>
            <Navbar />

            <div className="sm:w-[750px] mx-auto px-5">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl mt-28 xs:mt-32 sm:mt-40 font-product-sans-regular mb-4 text-center">Contact our team</h1>
                <div className="text-center">
                    <p className="mt-6 xs:mt-8 font-product-sans-light-regular text-md xs:text-lg sm:text-xl text-center">We're happy to answer questions and get you acquainted with EcoForecast, including connecting you with helpful resources and exploring use cases for your team.
                    </p>
                </div>
                <div className="text-sm font-product-sans-light-regular mt-24">
                    <form onSubmit={onSubmit}>
                        <h2 className="text-2xl mb-8 text-center">Contact</h2>
                        <div className="mb-8">
                            <label className="block mb-1" htmlFor="name">Name *</label>
                            <input type="text" className="w-full border-grey rounded-md p-2 focus:border-black border focus:outline-none transition duration-300" id="name" name="name" required />
                        </div>
                        <div className="mb-8">
                            <label className="block mb-1" htmlFor="email">Email *</label>
                            <input type="email" className="w-full border-grey rounded-md p-2 focus:border-black border focus:outline-none transition duration-300" id="email" name="email" required />
                        </div>
                        <div className="mb-8">
                            <label className="block mb-1" htmlFor="company">Company</label>
                            <input type="text" className="w-full border-grey rounded-md p-2 focus:border-black border focus:outline-none transition duration-300" id="company" name="company" />
                        </div>
                        <div className="mb-8">
                            <label className="block mb-1" htmlFor="message">Message *</label>
                            <textarea className="w-full border-grey rounded-md p-2 h-52 resize-none focus:border-black border-2 focus:outline-none transition duration-300" id="message" name="message" required />
                        </div>
                        <button type="submit" className="bg-black rounded-full hover:bg-opacity-90 transition-all duration-300 text-white px-6 py-3">Submit</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact;
