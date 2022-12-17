import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Blog, Education, Experience, Contacts, Achievement, Projects, Services } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Achievement />
            <Services />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
