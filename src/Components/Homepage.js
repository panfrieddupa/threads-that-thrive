import React, { Component } from 'react'

class Homepage extends Component {
    render() {
        return (
            <div className='text-center font-source-serif-pro pb-8'>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Welcome!
                </h2>
                <hr className="w-80 rounded border-0 h-1 my-2 bg-ttt_blue_dark mx-auto" />
                <h2 className="text-2xl md:text-3xl font-semibold py-4">
                    We are honoured to be a part of the Hyatt's Spirit of Giving this holiday season, check it out below!
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
                                    <span className='text-justify font-plus-jakarta-sans font-light text-[12pt] lg:text-[14pt]'>
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
                            <span className='text-justify font-plus-jakarta-sans font-light md:text-[16pt] lg:text-[18pt]'>
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
                                </p>
                            </span>
                            <img src={require('../img/Hyatt_Spirit_of_Giving/Hyatt_all_nonprofits.png')}
                                alt={`All of the non-profits listed in this year's Hyatt Spirit of Giving event. Listed are, Take Me Home Toys, Seniors Secret Service, Heaven Can Wait Animal Rescure Foundation, the AlphaHouse, and Threads That Thrive.`}
                                className='w-full' />

                            <div className='sm:hidden xs:flex-wrap items-center p-4'>
                                <div className='p-4'>
                                    <span className='text-justify font-plus-jakarta-sans font-light text-[12pt] lg:text-[14pt]'>
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
        )
    }
}

export default Homepage