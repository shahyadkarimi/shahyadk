import React from 'react'

// components
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const Home = () => {
    return (
        <div className="w-full">
            <Header />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home
