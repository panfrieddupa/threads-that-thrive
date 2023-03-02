/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
// import { ReactComponent as Instagram } from "../img/Social_Icons/instagram.svg"

class Homepage extends Component {
    render() {
        return (
            <div className='text-center font-source-serif-pro pb-8'>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Welcome!
                </h2>
                <hr className="w-80 rounded border-0 h-1 my-2 bg-ttt_blue_dark mx-auto" />
                
                <div>
                    We're still setting up, take a look around!
                </div>

                {/* <div>
                    Follow us on social media to stay updated

                    <blockquote className="instagram-media m-1 p-0 w-[99.375%] bg-[#FFF]" 
                    data-instgrm-captioned 
                    data-instgrm-permalink="https://www.instagram.com/p/Cn7MdHyJETS/?utm_source=ig_embed&amp,utm_campaign=loading" 
                    data-instgrm-version="14" >
                        <div className='p-[16px]'>
                            <a href="https://www.instagram.com/p/Cn7MdHyJETS/?utm_source=ig_embed&amp,utm_campaign=loading" 
                            className='bg-[#FFFFFF] p-0 text-center w-full' 
                            target="_blank"> 
                                <div className='flex flex-row items-center'>
                                    <div className='bg-[#F4F4F4] rounded-[50%] flex-grow-0 h-[40px] mr-[14px] w-[40px]'>
                                    </div>
                                        <div className='flex flex-col flex-grow content-center'> 
                                            <div className='bg-[#F4F4F4] flex-grow-0 h-[14px] mb-2 w-[100px]'>
                                            </div> 
                                                <div className='bg-[#F4F4F4] flex-grow-0 h-[14px] w-[60px]'>
                                                </div>
                                            </div>
                                        </div>
                                            <div className='p-[19%]'>
                                            </div> 

                                            <Instagram />

                                            <div className='block h-[50px] w-[50px]'>
                                                
                                            </div>
                                            <div className='pt-[8px]'> 
                                                <div className='text-[#3897f0] font-source-serif-pro text-[14px]'>
                                                    View this post on Instagram
                                                </div>
                                            </div>
                                            <div className='p-[12.5%]'>
                                            </div> 
                                            <div className='flex flex-row mb-[14px] items-center'>
                                                <div> 
                                                    <div className='bg-[#F4F4F4] h-[12.5px] w-[12.5px]'>
                                                    </div> 
                                                    <div 
                                                    style={{background: "#F4F4F4", 
                                                    height: "12.5px", 
                                                    transform: "rotate(-45deg) translateX(3px) translateY(1px)", 
                                                    width: "12.5px", 
                                                    "flex-grow": "0", 
                                                    "margin-right": "14px", 
                                                    "margin-left": "2px" }}>
                                                    </div> 
                                                    <div style={{background: "#F4F4F4", 
                                                    "border-radius": "50%", 
                                                    height: "12.5px", 
                                                    width: "12.5px", 
                                                    transform: "translateX(9px) translateY(-18px)" }}>
                                                    </div>
                                                </div>
                                                <div style={{ "margin-left": "8px" }}>
                                                    <div style={{background: "#F4F4F4", 
                                                    "border-radius": "50%", 
                                                    "flex-grow": "0", 
                                                    height: "20px", 
                                                    width: "20px" }}>
                                                    </div> 
                                                    <div style={{ width: "0", 
                                                    height: "0", 
                                                    "border-top": "2px solid transparent", 
                                                    "border-left": "6px solid #f4f4f4", 
                                                    "border-bottom": "2px solid transparent", 
                                                    transform: "translateX(16px) translateY(-4px) rotate(30deg)" }}>
                                                    </div>
                                                </div>
                                                <div style={{ "margin-left": "auto" }}> 
                                                    <div style={{ width: "0px", 
                                                    "border-top": "8px solid #F4F4F4", 
                                                    "border-right": "8px solid transparent", 
                                                    transform: "translateY(16px)" }}>
                                                    </div> 
                                                    <div style={{ background: "#F4F4F4", 
                                                    "flex-grow": "0", 
                                                    height: "12px", 
                                                    width: "16px", 
                                                    transform: "translateY(-4px)" }}>
                                                    </div> 
                                                    <div style={{ width: "0", 
                                                    height: "0", 
                                                    "border-top": "8px solid #F4F4F4", 
                                                    "border-left": "8px solid transparent", 
                                                    transform: "translateY(-4px) translateX(8px)" }}>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div style={{display: "flex", 
                                            "flex-direction": "column", 
                                            "flex-grow": "1", 
                                            "justify-content": "center", 
                                            "margin-bottom": "24px" }}> 
                                                <div style={{ background: "#F4F4F4", 
                                                "border-radius": "4px", 
                                                "flex-grow": "0", 
                                                height: "14px", 
                                                "margin-bottom": "6px", 
                                                width: "224px" }}>
                                                </div> 
                                                <div style={{ background: "#F4F4F4", 
                                                "border-radius": "4px", 
                                                "flex-grow": "0", 
                                                height: "14px", 
                                                width: "144px" }}>
                                                </div>
                                            </div>
                                        </a>
                                        <p style={{ color:"#c9c8cd", 
                                        "font-family":"Arial,sans-serif", 
                                        "font-size":"14px", 
                                        "line-height":"17px", 
                                        "margin-bottom":"0", 
                                        "margin-top":"8px", 
                                        overflow:"hidden", 
                                        padding:"8px 0 7px", 
                                        "text-align":"center", 
                                        "text-overflow":"ellipsis", 
                                        "white-space":"nowrap" }}>
                                            <a href="https://www.instagram.com/p/Cn7MdHyJETS/?utm_source=ig_embed&amp,utm_campaign=loading" 
                                            style={{ color:"#c9c8cd", 
                                            "font-family":"Arial,sans-serif", 
                                            "font-size":"14px", 
                                            "font-style":"normal", 
                                            "font-weight":"normal", 
                                            "line-height":"17px", "text-decoration":"none" }} 
                                            target="_blank" 
                                            >
                                                A post shared by Threads That Thrive 🧵🪡🏳️‍⚧️ (@threads.that.thrive)
                                            </a>
                                        </p>
                                    </div>
                                </blockquote> 
                                <script async src="//www.instagram.com/embed.js">
                                </script>
                </div > */}
            </div >
        )
    }
}

export default Homepage