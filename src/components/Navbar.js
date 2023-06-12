import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 mt-4 rounded-xl bg-[#1A0B2E] text-indigo-100">
            <h2 className="font-semibold">SHAHYAD KARIMI</h2>
            <div className="menu flex gap-10">
                <a className="relative py-1" href="#">Home</a>
                <a className="relative py-1" href="#">About Me</a>
                <a className="relative py-1" href="#">Skills</a>
                <a className="relative py-1" href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
