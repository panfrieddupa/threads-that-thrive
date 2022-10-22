import React, { Component } from 'react'

class Homepage extends Component {
    render() {
        return (
            <div className='text-center font-source-serif-pro pt-8 pb-24 md:pb-16'>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Welcome!
                </h2>
                <hr className="w-80 rounded border-0 h-1 mt-1 mb-20 bg-ttt_blue_dark mx-auto" />
                <p className='font-source-serif-pro text-xl md:text-3xl pb-8 md:pb-2'>
                    We're still setting up, take a look around!
                </p>

            </div>
        )
    }
}

export default Homepage