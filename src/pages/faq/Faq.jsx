import React, { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const faqData = [
    { question: "Что такое EdTechInt?", answer: "EdTechInt — это компания, помогающая студентам поступить в учебные заведения США, а также принять участие в программах Work and Travel." },
    { question: "Какие программы вы предлагаете?", answer: "Мы предлагаем Work and Travel, помощь в поступлении в университеты и колледжи США, а также визовую поддержку." },
    { question: "Как подать заявку на программу?", answer: "Вы можете подать заявку на нашем сайте или обратиться к нашим консультантам." },
    { question: "Какие требования для участия в Work and Travel?", answer: "Вы должны быть студентом дневного отделения, владеть английским на базовом уровне и иметь загранпаспорт." },
    { question: "Как долго длится процесс получения визы?", answer: "Процесс может занять от нескольких недель до нескольких месяцев в зависимости от программы." },
    { question: "Какова стоимость участия в Work and Travel?", answer: "Стоимость зависит от программы, стоимости билетов и визового сбора. Свяжитесь с нами для точных расчетов." },
    { question: "Помогаете ли вы с жильем в США?", answer: "Да, мы помогаем студентам найти жилье перед поездкой." },
    { question: "Как проходит собеседование на визу?", answer: "Собеседование проходит в консульстве США, где вас могут спросить о целях поездки и планах на будущее." },
    { question: "Какие документы нужны для Work and Travel?", answer: "Студенческий билет, загранпаспорт, подтверждение финансовой состоятельности и приглашение от работодателя." },
    { question: "Можно ли остаться в США после Work and Travel?", answer: "Программа предполагает возвращение на родину, но возможны варианты продления или смены визы." },
    { question: "Какова вероятность получения визы?", answer: "Вероятность высока, если у вас правильно оформлены документы и нет нарушений в прошлом." },
    { question: "Есть ли возрастные ограничения для программ?", answer: "Возрастные ограничения зависят от конкретной программы, но в среднем 18-28 лет." },
    { question: "Можно ли участвовать повторно в Work and Travel?", answer: "Да, если вы соответствуете требованиям." },
    { question: "Какие работы доступны по Work and Travel?", answer: "Официанты, кассиры, спасатели, продавцы, работники парков развлечений и т.д." },
    { question: "Нужен ли высокий уровень английского?", answer: "Зависит от вакансии. Чем выше уровень, тем больше возможностей." },
    { question: "Помогаете ли вы с оформлением документов?", answer: "Да, мы сопровождаем студентов на всех этапах оформления документов." },
    { question: "Какую поддержку вы оказываете после приезда в США?", answer: "Мы оказываем консультации по работе, жилью и адаптации." },
    { question: "Что делать, если мне отказали в визе?", answer: "Можно попробовать подать повторную заявку, исправив возможные ошибки в документах." },
    { question: "Когда лучше начинать подготовку к программе?", answer: "Чем раньше, тем лучше. Оптимально за 6-12 месяцев до поездки." },
    { question: "Как связаться с вами для получения консультации?", answer: "Вы можете написать нам на почту или оставить заявку на сайте." },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 pt-30">
            <Header />
            <div className="max-w-7xl mx-auto mb-20">
                <h2 className="text-2xl font-semibold text-center mb-6 text-blue-500">
                    Часто задаваемые вопросы
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg shadow-sm p-4 cursor-pointer transition duration-300 ${
                                openIndex === index
                                    ? "bg-blue-500 text-white"
                                    : "bg-white border-gray-300 hover:bg-gray-50"
                            }`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                                <span className={openIndex === index ? "text-white" : "text-gray-500 text-xl"}>
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="mt-3">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Faq;
