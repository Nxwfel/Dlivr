import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import WhyChooseUs from '../../components/WhyChooseUs';
import Partners from '../../components/Partners';
import Contact from '../../components/Contact';

const LandingPage = () => {
    return (
        <div className="bg-white min-h-screen w-full">
            <Navbar />

            <main>
                <section id="home">
                    <Hero />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="services">
                    <WhyChooseUs />
                </section>

                <section id="partners">
                    <Partners />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
