import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const { submit: onSubmitWeb3Forms } = useWeb3Forms({
    access_key: "17eb3a6c-79d4-4872-8186-91716a32d0ec",
    settings: {
      from_name: "EcoForecast",
      subject: "New Contact Message",
    },
    onSuccess: (msg, data) => {
      reset(); // Reset form fields
      setShowForm(false); // Hide the form on successful submission
    },
    onError: (msg, data) => {
      console.error("Error submitting form:", msg);
    },
  });

  const [showForm, setShowForm] = useState(true); // State to manage form visibility

  const onSubmit = async (data) => {
    try {
      await onSubmitWeb3Forms(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleRetry = () => {
    setShowForm(true); // Show the form again
  };

  return (
    <>
      <Helmet>
        <title>Contact | EcoForecast</title>
      </Helmet>
      <Navbar />

      <div className="sm:w-[750px] mx-auto px-5">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl mt-28 xs:mt-32 sm:mt-40 font-product-sans-regular mb-4 text-center">
          Contact our team
        </h1>
        <div className="text-center">
          <p className="mt-6 xs:mt-8 font-product-sans-light-regular text-md xs:text-lg sm:text-xl text-center">
            We"re happy to answer questions and get you acquainted with EcoForecast, including connecting you with helpful resources and exploring use cases for your team.
          </p>
        </div>
        <div className="text-sm font-product-sans-light-regular mt-24">
          {showForm && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <label className="block mb-1">Name *</label>
                <input
                  type="text"
                  className="w-full border-grey rounded-md p-2 focus:border-black border focus:outline-none transition duration-300"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="mb-8">
                <label className="block mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full border-grey rounded-md p-2 focus:border-black border focus:outline-none transition duration-300"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-8">
                <label className="block mb-1">Message *</label>
                <textarea
                  className="w-full border-grey rounded-md p-2 h-52 resize-none focus:border-black border focus:outline-none transition duration-300"
                  {...register("message", { required: true })}
                />
              </div>
              <button
                type="submit"
                className="bg-black rounded-full hover:bg-opacity-90 transition-all duration-300 text-white px-6 py-3"
              >
                Submit
              </button>
            </form>
          )}
          {!showForm && (
            <div className="w-[350px] xs:w-[400px] sm:w-[500px] mx-auto text-center mt-8">
              <p className="text-lg">Thank you. Our team is looking forward to connecting with you. You'll hear from us soon!</p>
              <button
                onClick={handleRetry}
                className="mt-4 bg-black rounded-full hover:bg-opacity-90 transition-all duration-300 text-white px-6 py-3"
              >
                Submit again
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
