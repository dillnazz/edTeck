import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='fixed top-0 left-0 w-full bg-white shadow-md z-20'>
            <div className='container mx-auto flex items-center justify-between p-4 md:p-3'>
                {/* Логотип */}
                <div className='flex items-center'>
                    <img className='w-12 h-12 md:w-16 md:h-16' src='IMG_7448.JPG' alt="Logo" />
                    <div className='ml-3'>
                        <h1 className='text-xl md:text-2xl font-bold'>EdTechInt</h1>
                        <p className='text-sm md:text-base text-blue-500'>WORK TRAVEL</p>
                    </div>
                </div>

                {/* Навигация */}
                <nav className='hidden md:flex space-x-6 text-gray-700 font-medium'>
                    <Link to="/" className='hover:text-blue-500 transition'>Главная</Link>
                    <Link to="/about" className='hover:text-blue-500 transition'>О нас</Link>
                    <Link to="/faq" className='hover:text-blue-500 transition'>FAQ</Link>
                    <Link to="/contact" className='hover:text-blue-500 transition'>Контакты</Link>
                    <Link to="/why" className='hover:text-blue-500 transition'>Почему мы?</Link>
                </nav>

                {/* Бургер-меню */}
                <div className='md:hidden'>
                    <button className='text-gray-700 text-2xl'>&#9776;</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
