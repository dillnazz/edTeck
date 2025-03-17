import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 p-6 md:p-10 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">

                {/* Логотип и текст */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img className="w-16 h-16 rounded-lg" src="IMG_7448.JPG" alt="Logo" />
                    <div className="ml-3 text-center md:text-left">
                        <h1 className="text-white text-xl md:text-2xl font-bold">EdTechInt</h1>
                        <p className="text-sm md:text-base text-black">WORK TRAVEL</p>
                    </div>
                </div>

                {/* Навигация */}
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white font-medium text-center">
                    <p className="cursor-pointer hover:text-gray-300 transition">Главная</p>
                    <p className="cursor-pointer hover:text-gray-300 transition">О нас</p>
                    <p className="cursor-pointer hover:text-gray-300 transition">Контакты</p>
                    <p className="cursor-pointer hover:text-gray-300 transition">FAQ</p>
                    <p className="cursor-pointer hover:text-gray-300 transition">Почему мы?</p>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;