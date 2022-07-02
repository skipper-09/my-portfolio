import Footer from 'component/footer'
import Navbar from 'component/navbar'
import React from 'react'

export default function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

