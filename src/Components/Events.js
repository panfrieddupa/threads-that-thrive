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
                                February 13th 2023
                            </li>
                            <li className='pb-2 hidden'>

                            </li>
                            <li className='pb-2 hidden'>

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
                <h1 className='text-4xl font-source-serif-pro md:text-5xl font-bold text-center pt-16'>
                            Other Past Events
                        </h1>
                        <hr className="w-80 md:w-5/12 rounded border-0 h-1 mt-1 mb-12 bg-ttt_blue_dark mx-auto " />

                <div className='w-full lg:w-1/2 xl:w-1/3 h-64 overflow-scroll overflow-x-hidden border rounded-lg p-4'>
                    <h2 className="text-xl md:text-2xl font-semibold py-2">
                        We are honoured to have been a part of the Hyatt's Spirit of Giving for the 2022 holiday season, check it out below!
                    </h2>

                    <div>
                        <img src={require('../img/Hyatt_Spirit_of_Giving/Hyatt_ornaments_and_garland.png')}
                            alt='Colourful ornaments of red, green, and gold, hung below a silver garland'
                            className='w-full pb-8' />

                        <div className='flex-wrap md:flex'>
                            <div className='md:w-[40%] lg:flex-1'>
                                <img src={require('../img/Hyatt_Spirit_of_Giving/Hyatt_spirit_of_giving.png')}
                                    alt={`Styled text that reads Hyatt's Spirit of Giving on 700 Center Street`}
                                    className='fill-current' />

                                <div className='hidden xs:flex-wrap sm:flex md:flex-wrap lg:flex items-center w-9/12 mx-auto'>
                                    <div className='p-4 lg:flex-1'>
                                        <span className='text-justify font-plus-jakarta-sans font-light text-[10pt] lg:text-[12pt]'>
                                            <p>Scan QR code with a
                                                mobile phone camera
                                                to learn more about
                                                the foundations, their
                                                wish lists and how you
                                                can donate.
                                            </p>
                                        </span>
                                    </div>

                                    <div className='lg:flex-1'>
                                        <img src={require('../img/Hyatt_Spirit_of_Giving/Hyatt_QR_code.png')}
                                            alt={`A scannable QR code to learn more about all of the featured non-profit organizations`}
                                            className='w-full' />
                                        <p className='font-plus-jakarta-sans font-light'>
                                            <a href='https://docdro.id/Nl8NH82' target='blank' className='font-medium hover:font-bold hover:text-[#960019]'>Click here</a> if you are unable to use your camera to scan the QR code.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='md:flex-1 md:pt-8 lg:pt-12'>
                                <span className='text-justify font-plus-jakarta-sans font-light md:text-[14pt] lg:text-[16pt]'>
                                    <p>
                                        A coming together of patrons, guests, hotel colleagues
                                        and local community to give joy this holiday season by
                                        means of charitable donations.<br /><br />
                                        With your participation, we hope to fullfill the wish lists
                                        of five non-profit foundations that uplift the spirits of
                                        both humankind and animal-kind.
                                    </p>

                                    <p className='pt-6'>The donation drive will run from <bold className='font-medium'>November 27 to
                                        December 31, 2022.</bold> A full week will be dedicated to
                                        each partner foundations. Donations made after their
                                        spotlight week will still be accommodated. Donate and
                                        be eligible to be gifted a <bold className='font-medium'>Sunday Brunch Buffet for
                                            two people</bold> voucher. One lucky winner will be drawn
                                        each week.
                                        <br /><br />
                                        <bold className='font-bold text-[#960019] text-lg md:text-2xl'>
                                            The Hyatt will be accepting donations for Threads That Thrive's between December 25 to 31, 2022
                                        </bold>
                                    </p>
                                </span>
                                <img src={require('../img/Hyatt_Spirit_of_Giving/Hyatt_all_nonprofits.png')}
                                    alt={`All of the non-profits listed in this year's Hyatt Spirit of Giving event. Listed are, Take Me Home Toys, Seniors Secret Service, Heaven Can Wait Animal Rescure Foundation, the AlphaHouse, and Threads That Thrive.`}
                                    className='w-full' />

                                <div className='sm:hidden xs:flex-wrap items-center p-4'>
                                    <div className='p-4'>
                                        <span className='text-justify font-plus-jakarta-sans font-light text-[10pt] lg:text-[12pt]'>
                                            <p>Scan QR code with a
                                                mobile phone camera
                                                to learn more about
                                                the foundations, their
                                                wish lists and how you
                                                can donate.
                                            </p>
                                        </span>
                                    </div>

                                    <div className=''>
                                        <img src={require('../img/Hyatt_Spirit_of_Giving/Hyatt_QR_code.png')}
                                            alt={`A scannable QR code to learn more about all of the featured non-profit organizations`}
                                            className='w-full' />
                                        <p className='font-plus-jakarta-sans font-light'>
                                            <a href='https://docdro.id/Nl8NH82' target='blank' className='font-medium hover:font-bold hover:text-[#960019]'>Click here</a> if you are unable to use your camera to scan the QR code.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events