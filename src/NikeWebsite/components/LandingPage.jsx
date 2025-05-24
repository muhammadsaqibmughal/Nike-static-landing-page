import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import PopularProducts from './PopularProducts'
import SupperQuality from './SupperQuality'
import Services from './Services'
import SupperOffer from './SupperOffer'
import CustomerReview from './CustomerReview'
import Subscribe from './Subscribe'
import Footer from './Footer'
function LandingPage() {
  return (
    <main>
         <Navbar/>
         <section className='xl:paddig-l wide:padding-r padding-b'>
            <Hero/>
         </section>
         <section className='padding'>
            <PopularProducts/>
         </section>
         <section className='padding'>
            <SupperQuality/>
         </section>
         <section className='padding-x py-10'>
            <Services/>
         </section>
         <section className='padding'>
            <SupperOffer/>
         </section>
         <section className='padding bg-pale-blue'>
            <CustomerReview/>
         </section>
         <section className='padding-x sm:py-32 py-16 w-full'>
            <Subscribe/>
         </section>
         <section className='padding-x bg-black padding-t pb-8'>
            <Footer/>
         </section>
         
    </main>
  )
}

export default LandingPage