import React from 'react'
import Header from './Header'
import Footer from './Footer'
import bg from "../Assets/weather.jpg"

const Layout = ({ children }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, color: "white" }}>
            <Header />
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout