import React, { Component } from 'react'
class Events extends Component {
    render() {
        return (
            <div className='mx-auto'>

                <div className='md:flex flex-wrap'>
                    <div className='flex-1'>
                        <h1 className='text-4xl font-source-serif-pro md:text-5xl font-bold text-center pt-10'>
                            Upcoming <wbr />Workshops
                            </h1>
                            <hr className="w-80 md:w-7/12 rounded border-0 h-1 mt-1 mb-12 bg-ttt_blue_dark mx-auto " />

                        <ul className='pl-[20%] lg:pl-[38%] list-disc text-lg md:text-2xl font-source-serif-pro font-semibold'>
                            <li className='pb-2'>
                                November 21st 2022
                            </li>
                            <li className='pb-2'>
                                January 16th 2023
                            </li>
                            <li className='pb-2'>
                                February 13th 2023
                            </li>
                        </ul>

                        <p className='text-lg md:text-2xl font-source-serif-pro font-normal p-12'>
                            Use the form to sign up for any (or many) event dates!
                        </p>
                    </div>
                    <div className='flex-1'>
                    <iframe
                    className='w-full h-full'
                        title='Threads Registration Form'
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdBYXlP7IbVMRIMQtdtTy8YD3hmyerREF4hJImM-_9RKq174w/viewform?embedded=true"
                        frameborder="0"
                        marginHeight="0"
                        marginWidth="0"
                    >
                        Loading…
                    </iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events