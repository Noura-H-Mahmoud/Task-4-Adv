import React from 'react'
import './LandingPage.css'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import Cards from '../../components/Cards/Cards'
import { FaHeartbeat, FaPills, FaThermometer, FaDna } from "react-icons/fa";
import Emergency from '../../components/Emergency/Emergency'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Appointment from '../../components/Appointment/Appointment'
import Departments from '../../components/Departments/Departments'
import Testimonials from '../../components/Testimonials/Testimonials'
import Doctors from '../../components/Doctors/Doctors'
import Gallery from '../../components/Gallery/Gallery'
import Pricing from '../../components/Pricing/Pricing'
import Questions from '../../components/Questions/Questions'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

export default function LandingPage() {
    const cardData = [
        {
            icon: FaHeartbeat,
            title: 'Lorem Ipsum',
            text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
        },
        {
            icon: FaPills,
            title: 'Sed ut perspici',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
        },
        {
            icon: FaThermometer,
            title: 'Magni Dolores',
            text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        },
        {
            icon: FaDna,
            title: 'Nemo Enim',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
        },
    ];
    const h1 ='In an emergency? Need help now?';
    const text ='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    return (
        <>
            <NavBar />
            <Hero />
            <Cards cards={cardData} direction='flex-column gap-3 px-4 py-5'/>
            <Emergency h1={h1} text={text}/>
            <About />
            <Services />
            <Appointment />
            <Departments />
            <Testimonials />
            <Doctors />
            <Gallery />
            <Pricing />
            <Questions />
            <Contact />
            <Footer />
        </>
    )
}
