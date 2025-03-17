import React from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Contact = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col p-6">
            <Header />
            <div className="flex flex-col mt-30 md:flex-row gap-12 w-full">
                {/* Left Column: Contact Information */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-semibold text-blue-600">Contact Information</h2>
                    <div className="space-y-4">
                        <p className="text-lg">Address: 1234 Street Name, City, Country</p>
                        <p className="text-lg">Phone: +1 234 567 890</p>
                        <p className="text-lg">
                            Instagram:
                            <a href="https://instagram.com/yourcompany" className="text-blue-600 hover:underline">yourcompany</a>
                        </p>
                        <p className="text-lg">
                            Facebook:
                            <a href="https://facebook.com/yourcompany" className="text-blue-600 hover:underline">yourcompany</a>
                        </p>
                        <p className="text-lg">
                            Twitter:
                            <a href="https://twitter.com/yourcompany" className="text-blue-600 hover:underline">yourcompany</a>
                        </p>
                    </div>
                </div>

                {/* Right Column: Contact Us Form */}
                <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-xl space-y-6">
                    <h2 className="text-3xl font-semibold text-center text-blue-600">Contact Us</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-lg font-medium" htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium" htmlFor="email">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium" htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message"
                                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-red-600 text-white p-4 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
