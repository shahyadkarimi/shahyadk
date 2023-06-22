import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 mt-4 rounded-xl bg-[#260055] text-indigo-100">
            <h2 className="font-semibold">SHAHYAD KARIMI</h2>
            <div className="menu flex gap-10">
                <a className="relative py-1" href="https://google.com">Home</a>
                <a className="relative py-1" href="https://google.com">About Me</a>
                <a className="relative py-1" href="https://google.com">Skills</a>
                <a className="relative py-1" href="https://google.com">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
