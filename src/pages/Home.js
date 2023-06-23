import React from 'react'

// components
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ScrollUp from "../components/ScrollUp"

const Home = () => {
    return (
        <div className="w-full">
            <Header />
            <Skills />
            <Projects />
            <ScrollUp />
        </div>
    )
}

export default Home
