import React from 'react'
import { assets } from '../assets/assets'

const Valeur = () => {
  return (
    <div className='container mx-auto w-full flex items-center justify-arround py-8'>
        <div className='w-11/12 md:w-3/4 flex flex-col justify-center items-center gap-6 mx-auto'>
            <div className='border-4 border-white px-4 py-2 w-fit rounded-2xl z-10 backdrop-blur-sm'>
                <h2 className='text-2xl capitalize text-white'>Nos valeurs</h2>
            </div>
            <div className='relative rounded-3xl border border-zinc-400 w-full h-60'>
                <div className='absolute left-4 top-4 text-white'>
                    <h4 className="text-2xl font-bold">01</h4>
                </div>
                <div className='w-fit flex flex-col md:flex-row z-10 items-center md:items-start justify-center md:justify-start gap-4 lg:gap-8 absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-4 backdrop-blur-sm  border-t border-b border-white py-2 lg:border-0 overflow-hidden'>
                    <h3 className='text-yellow-500 text-xl font-semibold'>Apprendre sans se forcer.</h3>
                    <p className='text-zinc-300 w-90 text-center md:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac orci vel elit volutpat aliquam. Praesent</p>
                </div>
                <img className='absolute bottom-0 right-4 w-72' src={assets.couple_2} alt="Couple" />
            </div>
            <div className='relative rounded-3xl border border-zinc-400 w-full h-60'>
                <div className='absolute right-4 top-4 text-white'>
                    <h4 className="text-2xl font-bold">02</h4>
                </div>
                <div className='w-fit flex flex-col md:flex-row z-20 items-center md:items-start justify-center md:justify-end gap-4 lg:gap-8 absolute bottom-4 right-1/2 transform translate-x-1/2 lg:translate-x-0 lg:right-4 backdrop-blur-sm  border-t border-b border-white py-2 lg:border-0 overflow-hidden'>
                    <h3 className='text-yellow-500 text-xl font-semibold'>Danser avec respect et confiance.</h3>
                    <p className='text-zinc-300 w-90 text-center md:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac orci vel elit volutpat aliquam. Praesent</p>
                </div>
                <img className='absolute top-0 left w-72 z-10' src={assets.couple_3} alt="Couple" />
            </div>
        </div>
    </div>
  )
}

export default Valeur