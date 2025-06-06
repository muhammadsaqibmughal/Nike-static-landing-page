import React from 'react'
import Button from "./Button"
import {offer}  from "../assets/images"
import {arrowRight} from "../assets/icons"
 const SupperOffer = () => {
  return (
   <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
    <div className='flex-1'>
      <img src={offer} width={773} height={687} className='object-contain w-full'/>
    </div>
    <div className='flex flex-1 flex-col'>
      

      <h2 className='font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
        
        <span className='text-coral-red'> Special</span> offer
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalledled value that sets us apart.
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
        Navigate a realm of poosibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journery with us is nothing short of exceptional.
      </p>
      <div className='mt-11 flex flex-wrap gap-4'>
      <Button label="Shop now" iconURL={arrowRight}  />
      <Button label="Learn more" iconURL={arrowRight} backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
      </div>
    </div>
   </section>
  )
}

export default SupperOffer;