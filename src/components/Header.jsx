import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const header = () => {
  return (
        <div className="w-full h-screen">
            <Navbar/>
            <img className="hidden lg:block h-screen absolute right-0 bottom-0 rotate-y-180" src={assets.header_img} />
            <div className="w-full h-full flex items-center justify-center md:justify-start">
                <div className='w-2xl h-fit pl-4 md:pl-20 lg:pl-32 '>
                    <div className="w-full flex flex-col justify-start items-center md:items-start gap-2 text-center md:text-left">
                        <h1 className="text-yellow-400 text-7xl font-bold w-full ">ALPHA</h1>
                        <p className="text-fuchsia-950 text-5xl font-bold leading-12 capitalize mb-4"> La Danse, une Passion du corps</p>
                        
                        <p className="px-8 md:px-0 text-center md:text-justify w-full text-zinc-400 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac orci vel elit volutpat aliquam. Praesent lobortis, sapien quis ullamcorper.</p>
                        <div className='flex gap-4 rounded-lg border-2 border-white text-white px-6 py-2 mt-4'>
                            <a className=''>Suivre nos cours</a>
                            <img className='w-5 rotate-90 pt-2' src={assets.triangle_line} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default header