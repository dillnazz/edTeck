import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import WhyWe from "../pages/whyWe/WhyWe.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Faq from "../pages/faq/Faq.jsx";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/why' element={<WhyWe/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/faq' element={<Faq/>} />
            </Routes>
        </div>
    );
};

export default AppRoutes;