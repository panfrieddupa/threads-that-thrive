import Homepage from "./Components/Homepage";
import About from "./Components/About";
// import { Dropdown } from "flowbite-react";
import { ReactComponent as MenuOpen } from "./img/svg/web_ham_menu.svg";
import { ReactComponent as MenuClose } from "./img/svg/web_close_menu.svg";
// import { ReactComponent as Facebook } from "./img/Social_Icons/facebook.svg"
import { ReactComponent as Instagram } from "./img/Social_Icons/instagram.svg"
import { ReactComponent as LinkedIn } from "./img/Social_Icons/linkedin.svg"
import { ReactComponent as Twitter } from "./img/Social_Icons/twitter.svg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// import Programs from "./Components/programs/Programs";
// import Donate from "./Components/Donate";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
// import Thrive from "./Components/programs/Thrive";
// import Give from "./Components/programs/Give";
// import Reviews from "./Components/Reviews";

function App() {
    const [navbar, setNavBar] = useState(false);

    return (
        <div className="bg-white md:bg-blue-100 h-auto">
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <nav className="header bg-ttt_blue_light md:flex-wrap">
                        <div className="brand-box flex md:flex-shrink-0">
                            <Link to="/" className="mx-auto">

                                <img
                                    className="logo-img py-4 fill-current w-36 md:w-60 lg:hidden block"
                                    alt="Threads That Thrive logo"
                                    src={require("./img/ttt_logo_thin_all_dark.png")}
                                ></img>
                                <div className="hidden lg:block border-x-12 border-dashed border-y-0 border-x-white px-8">
                                    <div className="flex items-center bg-white px-12">
                                        <img
                                            className="logo-img fill-current py-4 w-96 pr-4"
                                            alt="Threads That Thrive logo"
                                            src={require("./img/threadsletters_dark.png")}
                                        ></img>
                                        <div className="flex-row pt-6 font-special-elite text-6xl text-ttt_blue_dark ">
                                            <h2 className="flex-1">
                                                That
                                            </h2>
                                            <h2 className="flex-1">
                                                Thrive
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="my-auto">
                                <a href='https://instagram.com/threads.that.thrive' target='blank'>
                                    <Instagram className="m-2"/>
                                </a>
                                <a href='https://linkedin.com/company/threads-that-thrive/about' target='blank'>
                                    <LinkedIn className="m-2"/>
                                </a>
                                <a href='https://twitter.com/Threads_Canada' target='blank'>
                                    <Twitter className="m-2"/>
                                </a>
                            </div>
                        </div>
                        <div class="block md:hidden">
                            <button class="flex text items-center px-2 py-1"
                                onClick={() => setNavBar(!navbar)}>
                                {navbar ? (
                                    <MenuClose />
                                ) : (
                                    <MenuOpen />
                                )}
                            </button>
                        </div>
                        <div className={`text-m  w-full flex-grow 
                                            ${navbar ? "block bg-ttt_blue_200" : "hidden md:block"
                            }`}>
                            <div className="md:text-md lg:text-xl md:flex md:items-center md:w-auto md:mx-auto font-special-elite font-bold">
                                <button className="block md:border md:flex-1 border-ttt_blue_dark text-ttt_pink_dark  md:text-ttt_blue_600 hover:text-pink-600 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark md:bg-ttt_pink_200 p-2">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </button>
                                {/* <span class="group relative inline-block md:border md:flex-1 border-ttt_blue_dark text-ttt_pink_dark  md:text-ttt_blue_600 hover:text-pink-600 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark md:bg-ttt_pink_200 p-2">
                                    <button class="inline-flex font-semibold">Programs</button>
                                    <ul class="absolute hidden pt-2 text-ttt_blue_dark md:group-hover:block z-50 w-full">
                                        <li class=""><a class="whitespace-no-wrap block p-2 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark" href="/programs/thrive">Thrive</a></li>
                                        <li class=""><a class="whitespace-no-wrap block p-2 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark" href="/programs/give">Give</a></li>
                                        <li class=""><a class="whitespace-no-wrap block p-2 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark" href="/programs">All Programs</a></li>
                                    </ul>
                                </span> */}
                                <button className="block md:border md:flex-1 border-ttt_blue_dark text-ttt_pink_dark md:text-ttt_blue_600 hover:text-pink-600 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark md:bg-ttt_pink_200 p-2">
                                    <Link to="/about" >
                                        About Us
                                    </Link>
                                </button>
                                <button className="block md:border md:flex-1 border-ttt_blue_dark text-ttt_pink_dark md:text-ttt_blue_600 hover:text-pink-600 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark md:bg-ttt_pink_200 p-2">
                                    <Link to="/events" >
                                        Events
                                    </Link>
                                </button>
                                {/* <button className="block md:border md:flex-1 border-ttt_blue_dark text-ttt_pink_dark md:text-ttt_blue_600 hover:text-pink-600 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark md:bg-ttt_pink_200 p-2">
                                    <Link to="/donate" >
                                        How to Donate
                                    </Link>
                                </button> */}
                                <button className="block md:border md:flex-1 border-ttt_blue_dark text-ttt_pink_dark md:text-ttt_blue_600 hover:text-pink-600 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark md:bg-ttt_pink_200 p-2">
                                    <Link to="/contact" >
                                        Contact Us
                                    </Link>
                                </button>
                                {/* <button className="block md:border md:flex-1 border-ttt_blue_dark text-ttt_pink_dark md:text-ttt_blue_600 hover:text-pink-600 md:hover:text-ttt_pink_200 md:hover:bg-ttt_blue_dark md:bg-ttt_pink_200 p-2">
                                    <Link to="/reviews" >
                                        Testimonials
                                    </Link>
                                </button> */}
                            </div>
                        </div>

                    </nav>

                    <div className="page-container bg-white opacity-80 md:mx-auto md:w-11.5/12 p-8 md:p-16">
                        <Routes>
                            <Route exact path="/" element={<Homepage />}></Route>
                            {/* <Route exact path="/programs" element={<Programs />}></Route>
                            <Route exact path="/programs/thrive" element={<Thrive />}></Route>
                            <Route exact path="/programs/give" element={<Give />}></Route> */}
                            <Route exact path="/about" element={<About />}></Route>
                            <Route exact path="/events" element={<Events />}></Route>
                            {/* <Route exact path="/donate" element={<Donate />}></Route> */}
                            <Route exact path="/contact" element={<Contact />}></Route>
                            {/* <Route exact path="/reviews" element={<Reviews />}></Route> */}
                        </Routes>
                    </div>

                    <footer className=" bg-ttt_blue_light px-4 pb-6 md:px-12 md:pb-8">
                        <div className="mb-0 font-special-elite">
                            <div className="h-36 md:h-52 text-sm lg:text-md md:text-md flex items-center md:justify-between">
                                <div className="">
                                    <Link to="/">
                                        <img
                                            className="logo-img fill-current w-20 md:w-32"
                                            alt="Threads That Thrive logo"
                                            src={require("./img/ttt_logo_thin_all_dark.png")}
                                        ></img>
                                    </Link>
                                </div>

                                <div className="pl-4 flex flex-wrap">
                                    <Link to="/" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                        Home
                                    </Link>
                                    {/* <Link to="/programs" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                        Programs
                                    </Link>
                                    <Link to="/programs/thrive" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                        Thrive
                                    </Link>
                                    <Link to="/programs/give" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                        Give
                                    </Link> */}
                                    <Link to="/about" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                        About
                                    </Link>
                                    <Link to="/events" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                        Events
                                    </Link>
                                    {/* <Link to="/donate" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                    Donate
                                </Link> */}
                                    <Link to="/contact" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                        Contact
                                    </Link>
                                    {/* <Link to="/reviews" className="md:mr-8 mr-4 flex-1 text-ttt_pink_dark font-bold hover:text-ttt_blue_dark">
                                    Testimonials
                                </Link> */}
                                </div>

                            </div>
                        </div>
                        <hr class="mb-2 border-ttt_blue_dark mx-auto" />
                        <span class="block text-sm text-ttt_blue_dark text-center">©2022 <Link to="/" className="hover:text-ttt_pink_dark">Threads That Thrive™</Link>. All Rights Reserved.
                        </span>
                    </footer>
                </div>
            </Router>
        </div>
    );
}

export default App;
