import React, { Component } from "react"

class About extends Component {
    render() {
        return (
            <div className="font-source-serif-pro md:text-lg pb-8 md:pb-2">
                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    What We Do
                </h2>
                <hr className="w-80 rounded border-0 h-1 mt-1 mb-12 bg-ttt_blue_dark mx-auto " />
                <p className="text-justify">
                    We offer a completely free, series of skills-based workshops
                    in which you can learn to make, repair and alter your clothing so that you
                    can be true to who you want to be.
                    Our goal is to ensure no student has to struggle with feelings of
                    body dysmorphia or gender dysphoria.</p>
                <br />

                <p className="mb-2 pl-12">Some classes include:</p>

                <ul className="pl-32 list-disc">
                    <li>Basic Sewing</li>
                    <li>Hemming</li>
                    <li>Templating and measuring</li>
                    <li>Fabrication</li>
                    <li>Taking clothes in or out</li>
                    <li>Repair of torn or worn garment</li>
                </ul>

                <div className="executives md:p-16 lg:px-14 flex-wrap pt-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Who We Are
                    </h2>
                    <hr className="w-80 rounded border-0 h-1 mt-1 mb-12 bg-ttt_blue_dark mx-auto" />

                    <div className="p-6 bg-ttt_blue_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Cassidy ElDarazi
                        </div>
                        <div className="flex-1">
                            The President
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_pink_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Edward Simone
                        </div>
                        <div className="flex-1">
                            Chair Overseeing Finance
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_blue_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Ryan Seggie
                        </div>
                        <div className="flex-1">
                            Chair Overseeing Communication
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_pink_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Eddy ElDarazi
                        </div>
                        <div className="flex-1">
                            Chair of the Board 
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_blue_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Ciara Lanctot
                        </div>
                        <div className="flex-1">
                            Chair Overseeing Events
                        </div>
                    </div>

                    <div className="p-6 bg-ttt_pink_200 flex items-center my-2">
                        <div className="font-special-elite text-3xl mr-2 flex-1">
                            Rebekah Bulych
                        </div>
                        <div className="flex-1">
                            Chair Overseeing Technical Operations
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About