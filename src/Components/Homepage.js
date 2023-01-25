import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default Homepage