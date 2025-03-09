import React from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";




const Home = () => {
    return (
        <div className="flex flex-col">
            <Header />
            {/*<div*/}
            {/*    className="h-screen bg-cover bg-center"*/}
            {/*    style={{*/}
            {/*        backgroundImage: `linear-gradient(to bottom, rgba(32, 98, 214, 0.8) 10%, rgba(6, 147, 227, 0) 70%),*/}
            {/*                          url('/Снимок экрана 2025-02-23 в 18.16.37.png')`,*/}
            {/*        backgroundSize: "cover",*/}
            {/*        backgroundPosition: "center",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div className="w-180 mt-100 bg-white bg-opacity-80 p-1 text-center rounded-lg">*/}
            {/*        <div className='flex '>*/}
            {/*            <img className='w-59 h-59 rounder-lg pl-3' src='IMG_7448.JPG' alt=""/>*/}
            {/*            <div className='pt-9'>*/}
            {/*                <h1 className='text-5xl font-bold text-start'>EdTechInt</h1>*/}
            {/*                <p className='text-2xl text-start text-blue-500'>WORK TRAVEL</p>*/}
            {/*                <p className='w-105 text-start'>Рабочие и образовательные программы, туризм, языковые курсы, а также услуги, связанные с выездом за границу</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='flex'>*/}
            {/*            /!*<p className='text-start w-100 pl-20'>Рабочие и образовательные программы, туризм, языковые курсы, а также услуги, связанные с выездом за границу</p>*!/*/}
            {/*            <button className='bg-blue-500 text-white rounded-lg p-2 w-75 h-10 ml-58 mb-3'>Подробнее</button>*/}
            {/*        </div>*/}


            {/*    </div>*/}
            {/*</div>*/}

            <div
                className="h-screen bg-cover bg-center flex items-end justify-start px-4 sm:px-6 lg:px-8 pb-8"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(32, 98, 214, 0.8) 10%, rgba(6, 147, 227, 0) 70%),
                                  url('/Снимок экрана 2025-02-23 в 18.16.37.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="w-full max-w-4xl bg-white bg-opacity-80 p-4 sm:p-6 md:p-8 text-left rounded-lg shadow-lg">
                    <div className='flex flex-col sm:flex-row items-center sm:items-start'>
                        <img className='w-24 h-24 sm:w-28 sm:h-28 rounded-lg pl-0 sm:pl-3' src='IMG_7448.JPG' alt=""/>
                        <div className='pt-4 sm:pt-9 sm:pl-6'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>EdTechInt</h1>
                            <p className='text-lg sm:text-xl md:text-2xl text-blue-500'>WORK TRAVEL</p>
                            <p className='text-sm sm:text-base md:text-lg max-w-lg'>Рабочие и образовательные программы, туризм, языковые курсы, а также услуги, связанные с выездом за границу</p>
                        </div>
                    </div>
                    <div className='flex justify-start mt-4'>
                        <button className='bg-blue-500 text-white rounded-lg ml-30 py-2 px-8 text-sm sm:text-base md:text-lg'>Подробнее</button>
                    </div>
                </div>
            </div>


            <div className='bg-blue-500 mt-10 mx-4 sm:mx-10 md:mx-20 mb-10 py-6 rounded-xl'>
                <div className='flex flex-wrap sm:flex-nowrap justify-center items-center p-4 sm:p-7 gap-6'>

                    <div className='flex items-center p-4 bg-blue-400 rounded-xl flex-1 min-w-[250px]'>
                        <div className='p-3 m-2 bg-white rounded-xl'>
                            <img className='w-12 sm:w-15' src="https://cdn-icons-png.flaticon.com/512/602/602232.png" alt=""/>
                        </div>
                        <div className='ml-3'>
                            <h3 className='text-white text-2xl sm:text-3xl'>12 лет</h3>
                            <p className='text-white max-w-xs'>Мы занимаемся оформлением и отправкой студентов по программе Work and Travel USA</p>
                        </div>
                    </div>

                    <div className='flex items-center p-4 bg-blue-400 rounded-xl flex-1 min-w-[250px]'>
                        <div className='p-3 m-2 bg-white rounded-xl'>
                            <img className='w-12 sm:w-15' src="https://static.vecteezy.com/system/resources/previews/021/276/799/non_2x/3d-airplane-icon-for-transport-and-travel-on-vacation-png.png" alt=""/>
                        </div>
                        <div className='ml-3'>
                            <h3 className='text-white text-2xl sm:text-3xl'>10 лет</h3>
                            <p className='text-white max-w-xs'>Мы занимаемся оформлением и отправкой студентов по программе Work and Travel USA</p>
                        </div>
                    </div>

                    <div className='flex items-center p-4 bg-blue-400 rounded-xl flex-1 min-w-[250px]'>
                        <div className='p-3 m-2 bg-white rounded-xl'>
                            <img className='w-12 sm:w-15' src="https://cdn-icons-png.flaticon.com/512/8832/8832880.png" alt=""/>
                        </div>
                        <div className='ml-3'>
                            <h3 className='text-white text-2xl sm:text-3xl'>8 лет</h3>
                            <p className='text-white max-w-xs'>Мы занимаемся оформлением и отправкой студентов по программе Work and Travel USA</p>
                        </div>
                    </div>
                </div>
            </div>

             <div className="mt-12">
                 <p className="text-3xl sm:text-4xl font-bold text-center text-blue-900">EdTechInt Work&Travel - это наши студенты</p>
                 <div className="flex flex-wrap justify-center gap-6 mt-6">
                     <div className="w-full sm:w-72 md:w-80 p-4 bg-gray-100 rounded-lg shadow-lg">
                         <img className="w-full h-68 object-cover rounded-lg" src="https://www.collegeboxes.com/wp-content/uploads/2022/07/College-Student-Must-Sees-in-New-York.jpg" alt="Student 1" />
                         <p className="text-2xl font-bold text-blue-500 mt-3">Amelia Rati</p>
                         <p className="text-gray-700">Учится в Gannon university state California.</p>
                     </div>
                     <div className="w-full sm:w-72 md:w-80 p-4 bg-gray-100 rounded-lg shadow-lg">
                         <img className="w-full h-68 object-cover rounded-lg" src="https://www.ncan.org/resource/resmgr/blog/blog2/studentwithtextbook_1200px.jpg" alt="Student 2" />
                         <p className="text-2xl font-bold text-blue-500 mt-3">Amelia Rati</p>
                         <p className="text-gray-700">Учится в Gannon university state California.</p>
                     </div>
                   <div className="w-full sm:w-72 md:w-80 p-4 bg-gray-100 rounded-lg shadow-lg">
                <img className="w-full h-68 object-cover rounded-lg" src="https://nytedu.com/wp-content/uploads/2019/11/Jonathan-H.jpg" alt="Student 3" />
                       <p className="text-2xl font-bold text-blue-500 mt-3">Amelia Rati</p>
                        <p className="text-gray-700">Учится в Gannon university state California.</p>
                   </div>

                     <div className="w-full sm:w-72 md:w-80 p-4 bg-gray-100 rounded-lg shadow-lg">
                         <img className="w-full h-68 object-cover rounded-lg" src="https://www.collegeboxes.com/wp-content/uploads/2022/07/College-Student-Must-Sees-in-New-York.jpg" alt="Student 1" />
                         <p className="text-2xl font-bold text-blue-500 mt-3">Amelia Rati</p>
                         <p className="text-gray-700">Учится в Gannon university state California.</p>
                     </div>
                 </div>
             </div>

            <div className='mt-15'>
                <div className='flex flex-col md:flex-row justify-around items-center md:items-start'>
                    {/* Текстовый блок */}
                    <div className='w-full md:w-1/2 p-5'>
                        <p className='text-slate-800 font-sans font-medium'>Effortless Validation for</p>
                        <p className='font-bold text-slate-800 text-3xl mt-3'>Management</p>
                        <p className='text-slate-800 mt-8'>
                            The Myspace page defines the individual, his or her characteristics, traits,
                            personal choices and the overall personality of the person.
                        </p>
                        <p className='text-slate-800 mt-8 font-bold'>Accessory makers</p>
                        <p className='text-slate-800 mt-3'>
                            While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun
                        </p>
                        <p className='text-slate-800 mt-8 font-bold'>Alterationists</p>
                        <p className='mt-3 text-slate-800'>
                            If you are looking for a new way to promote your business that won’t cost you more money,
                        </p>
                    </div>

                    {/* Изображение */}
                    <img
                        className='w-full md:w-1/3 h-auto mt-5 md:mt-0'
                        src="https://media.istockphoto.com/id/452361493/photo/young-lady-visiting-statue-of-liberty-in-new-york.jpg?s=612x612&w=0&k=20&c=RW43Atj4Edi1AkIXtIxg8jzT-zNJTzySPChGsJvEZLo="
                        alt="Statue of Liberty"
                    />
                </div>
            </div>


            <div className='mt-15'>
                <div className='flex justify-center sm:justify-around flex-col sm:flex-row'>
                    <img className='w-full sm:w-120 sm:h-110 h-auto mb-5 sm:mb-0' src="https://static.tildacdn.com/tild3362-6638-4338-a330-613463393436/01Frommers-New-York-.jpg" alt=""/>
                    <div className='w-full sm:w-156 p-5'>
                        <p className='text-slate-800 font-sans font-medium text-center sm:text-left'>
                            Effortless Validation for
                        </p>
                        <p className='font-bold text-slate-800 text-3xl mt-3 text-center sm:text-left'>
                            Management
                        </p>
                        <p className='text-slate-800 mt-8'>
                            The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.
                        </p>
                        <p className='text-slate-800 mt-8 font-bold'>Accessory makers</p>
                        <div className='flex items-center'>
                            <span className='text-white text-xl mr-2 rounded-lg p-1 pr-2 bg-yellow-500'>✔</span>
                            <p className='text-slate-800 mt-3'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        </div>
                        <div className='flex items-center mt-8'>
                            <span className='text-white text-xl rounded-lg p-1 mr-2 pr-2 bg-red-500'>✔</span>
                            <p className='text-slate-800 font-bold'>Alterationists</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <span className='text-white rounded-lg mr-2 text-xl pr-2 p-1 bg-blue-500'>✔</span>
                            <p className='text-slate-800'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-15'>
                <div className='flex justify-center sm:justify-around flex-col sm:flex-row'>
                    <div className='w-full sm:w-106 p-5'>
                        <p className='text-slate-800 font-sans font-medium'>Effortless Validation for</p>
                        <p className='font-bold text-slate-800 text-3xl mt-3'>Management</p>
                        <p className='text-slate-800 mt-8'>The Myspace page defines the individual, his or her characteristics, traits, personal choices, and the overall personality of the person.</p>
                        <p className='text-slate-800 mt-8 font-bold'>Accessory makers</p>
                        <p className='text-slate-800 mt-3'>While most people enjoy casino gambling, sports betting, lottery, and bingo playing for fun.</p>
                        <p className='text-slate-800 mt-8 font-bold'>Alterationists</p>
                        <p className='mt-3 text-slate-800'>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                    </div>
                    <img className='w-full sm:w-150 sm:mr-5 mb-5 sm:mb-0' src="https://bcls.ru/resources/images/school/b/f/7/f713e145ec3d598829c4d9fc4ea4d333.jpeg" alt=""/>
                </div>
            </div>


            <div
                className="w-full max-w-5xl h-[400px] sm:h-[500px] lg:h-[600px] mt-15 mx-auto rounded-lg flex justify-center items-center"
                style={{
                    backgroundImage: `url('/Снимок экрана 2025-02-23 в 22.07.37.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/*<p className="text-white p-4 text-center">Твой контент здесь</p>*/}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;


