import React, { Component } from "react"

class About extends Component {
    render() {
        return (
            <div className="font-source-serif-pro md:text-lg pb-8 md:pb-2">
                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    What We Do
                </h2>
                <hr className="w-60 rounded border-0 h-1 mt-1 mb-12 bg-ttt_blue_dark mx-auto" />
                <p className="text-justify md:w-[60%] mx-auto">
                    We aim to relieve the effects of poverty by providing clothing to at-risk gender-diverse individuals, advancing education by providing life skills, and lessening conditions relating to body dysmorphia and gender dysphoria by enhancing access to affordable and equitable skills workshops.
                    <br /><br />
                    Our current programs include Threads That Thrive, a free series of skills-based workshops where individuals can learn to make, repair and alter clothing, so everyone can be true to who they are. Our goal is to ensure that no one struggles with feelings of body dysmorphia or gender dysphoria.
                    </p>
                <br />

                <p className="mb-2 pl-12 md:w-[60%] mx-auto pb-6">Some classes include:

                <ul className="pl-32 list-disc">
                    <li>Basic Sewing</li>
                    <li>Hemming</li>
                    <li>Templating and measuring</li>
                    <li>Fabrication</li>
                    <li>Taking clothes in or out</li>
                    <li>Repair of torn or worn garment</li>
                </ul>
                </p>

                <p className="text-justify md:w-[60%] mx-auto">
                Our second program, Threads That Give, is the donation branch of our organization. We accept gently used garments and fabrics to provide clothing to persons who need it. Our first public clothing drive was an astonishing success thanks to the incredibly generous donors that attended the event. We are not accepting any more clothing donations currently as we continue to sort our current clothing from the drive and clothing donations from other outstanding individuals who have made alternative arrangements to help support the Threads That Thrive cause.
                </p>
                <br />

                <div className="executives md:p-16 lg:px-14 flex-wrap pt-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Who We Are
                    </h2>
                    <hr className="w-80 rounded border-0 h-1 mt-1 mb-12 bg-ttt_blue_dark mx-auto" />

                    <div className="p-6 bg-ttt_blue_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Cassidy ElDarazi
                        </div>
                        <div className="flex-1 text-xl font-semibold">
                            President
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_pink_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Edward Simone
                        </div>
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold">
                                Chair
                            </h1>
                            Overseeing Finance
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_blue_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Ryan Seggie
                        </div>
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold">
                                Chair
                            </h1>
                            Overseeing Communication
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_pink_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Eddy ElDarazi
                        </div>
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold">
                                Chair
                            </h1>
                            of the Board
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_blue_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Ciara Lanctot
                        </div>
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold">
                                Chair
                            </h1>
                            Overseeing Events
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_pink_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Rebekah Bulych
                        </div>
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold">
                                Chair
                            </h1>
                            Overseeing Technical Operations
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About