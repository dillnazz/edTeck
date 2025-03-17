import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const About = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="max-w-6xl mx-auto pt-30">
                {/* Заголовок */}
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
                    EdTechInt
                </h2>

                {/* Основной блок: Фото + описание */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Фото */}
                    <div className="w-full h-92 flex items-center justify-center">
                        <img
                            src="https://t4.ftcdn.net/jpg/03/19/24/51/360_F_319245189_AJSNcOAn5mFp3XzhEHmaL4RaZq4rhQ4h.jpg"
                            alt="photo"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    {/* Текст о компании */}
                    <div>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <span className="text-red-600 font-semibold">EdTechInt</span> — это международная компания, помогающая студентам со всего мира поступать в
                            <span className="text-blue-700 font-semibold"> университеты США</span>, участвовать в программах обмена и получать визовую поддержку.
                        </p>
                        <p className="mt-4 text-gray-700">
                            Мы сотрудничаем с ведущими учебными заведениями, работодателями и визовыми центрами, чтобы сделать процесс поступления и работы за границей максимально удобным.
                            Наша миссия — **открыть мир возможностей для студентов** и помочь им построить успешное будущее.
                        </p>
                    </div>
                </div>

                {/* Блок с миссией */}
                <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-semibold text-blue-900">Наша миссия</h3>
                    <p className="mt-4 text-lg text-gray-700">
                        Мы помогаем студентам получить качественное образование за границей, развить карьеру и культурно обогатиться.
                        Образование и путешествия расширяют горизонты, и мы стремимся сделать этот путь доступным каждому!
                    </p>
                </div>

                {/* Преимущества */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-center text-blue-900 mb-6">Почему выбирают нас?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md text-center">
                            <h4 className="text-xl font-semibold text-red-600">Опыт и надежность</h4>
                            <p className="mt-2 text-gray-700">
                                Более 10 лет на рынке образовательных услуг, сотни успешных студентов.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md text-center">
                            <h4 className="text-xl font-semibold text-red-600">Поддержка 24/7</h4>
                            <p className="mt-2 text-gray-700">
                                Мы помогаем на всех этапах — от подачи заявки до адаптации в США.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md text-center">
                            <h4 className="text-xl font-semibold text-red-600">Прозрачность</h4>
                            <p className="mt-2 text-gray-700">
                                Четкие условия, понятные шаги и индивидуальный подход к каждому студенту.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Отзывы студентов */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-center text-blue-900 mb-6">Отзывы наших студентов</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Отзыв 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Анна"
                                className="w-20 h-20 mx-auto rounded-full mb-4 shadow"
                            />
                            <p className="text-gray-700">
                                “EdTechInt помогли мне поступить в университет мечты! Весь процесс был понятным и комфортным.”
                            </p>
                            <p className="mt-4 font-semibold text-blue-700">— Анна, студентка NYU</p>
                        </div>

                        {/* Отзыв 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Артем"
                                className="w-20 h-20 mx-auto rounded-full mb-4 shadow"
                            />
                            <p className="text-gray-700">
                                “Программа Work and Travel изменила мою жизнь! Спасибо за поддержку и организацию.”
                            </p>
                            <p className="mt-4 font-semibold text-blue-700">— Артем, участник W&T</p>
                        </div>

                        {/* Отзыв 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/45.jpg"
                                alt="Дмитрий"
                                className="w-20 h-20 mx-auto rounded-full mb-4 shadow"
                            />
                            <p className="text-gray-700">
                                “Сомневался в визе, но с EdTechInt всё прошло идеально. Теперь учусь в США!”
                            </p>
                            <p className="mt-4 font-semibold text-blue-700">— Дмитрий, студент UCLA</p>
                        </div>
                    </div>
                </div>

                {/* Контакты */}
                {/*<div className="mt-16 bg-blue-900 text-white p-8 rounded-lg shadow-lg text-center">*/}
                {/*    <h3 className="text-3xl font-semibold">Свяжитесь с нами</h3>*/}
                {/*    <p className="mt-4 text-lg">*/}
                {/*        📍 Адрес: 123 Main Street, New York, USA*/}
                {/*        📧 Email: info@edtechint.com*/}
                {/*        📞 Телефон: +1 (555) 123-4567*/}
                {/*    </p>*/}
                {/*    <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">*/}
                {/*        Оставить заявку*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
            <Footer/>
        </div>
    );
};

export default About;
