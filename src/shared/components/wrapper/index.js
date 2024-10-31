import React, { useEffect } from 'react'
import Header from '../header'
import Footer from '../footer'

export default function Wrapper({ children }) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
