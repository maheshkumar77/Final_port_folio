"use client";
import React, { useState } from "react";

const Realtoch = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    twitter: "",
    facebook: "",
    gplus: "",
    email: "",
    cpass: "",
  });

  const [animating, setAnimating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (animating || currentStep === 2) return;
    setAnimating(true);
    const nextStep = currentStep + 1;

    setTimeout(() => {
      setCurrentStep(nextStep);
      setAnimating(false);
    }, 800); // Duration of animation
  };

  const prevStep = () => {
    if (animating || currentStep === 0) return;
    setAnimating(true);
    const prevStep = currentStep - 1;

    setTimeout(() => {
      setCurrentStep(prevStep);
      setAnimating(false);
    }, 800); // Duration of animation
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message was sent successfully!");
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg p-8 bg-black-100 rounded-lg shadow-lg">
        {/* Step Indicator */}
        <ul className="flex justify-between mb-6">
          {["Personal Details", "Social Profiles", "Write Message"].map((step, index) => (
            <li
              key={index}
              className={`text-xs font-bold text-white ${currentStep === index ? "text-pink-500" : "text-gray-400"}`}
            >
              {step}
            </li>
          ))}
        </ul>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Details */}
          {currentStep === 0 && (
            <div className="transition-opacity duration-800 ease-in-out opacity-100">
              <h2 className="text-2xl font-semibold text-center text-blue-500">Personal Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
          )}

          {/* Step 2: Social Profiles */}
          {currentStep === 1 && (
            <div className="transition-opacity duration-800 ease-in-out opacity-100">
              <h2 className="text-2xl font-semibold text-center text-blue-500">Social Profiles</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="facebook"
                  placeholder="Facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="gplus"
                  placeholder="Google Plus"
                  value={formData.gplus}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
          )}

          {/* Step 3: Write Message */}
          {currentStep === 2 && (
            <div className="transition-opacity duration-800 ease-in-out opacity-100">
              <h2 className="text-2xl font-semibold text-center text-blue-500">Write Message</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <textarea
                  name="cpass"
                  placeholder="Write A Message"
                  value={formData.cpass}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows={5}
                  cols={40}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-400 text-white rounded-lg focus:outline-none"
              >
                Previous
              </button>
            )}
            {currentStep < 2 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-pink-500 text-white rounded-lg focus:outline-none"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 text-white rounded-lg focus:outline-none"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Realtoch;
