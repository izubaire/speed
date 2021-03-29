import React from 'react'

export default function Logo({black}) {
    return (
        <div className="logo flex items-center">
            <i className="fa-solid fa-fire-flame-curved sm:text-7xl text-6xl text-red-400"></i>
            <h1 className={`${black?'text-gray-800':'text-white'} text-half pl-2 lowercase font-poppins tracking-widest hidden md:block`}>Speed</h1>
        </div>
    )
}
