import React from 'react'
import { assets } from '../assets/assets'

const CTA = () => {
  return (
    <div className='container mx-auto rounded-2xl h-fit w-full bg-purple-950/25 p-4 md:p-8 flex flex-col-reverse md:flex-row gap-4 justify-between my-2'>
        <div className='flex-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-evenly gap-4 md:gap-16 h-full'>
        <div>
            <h2 className='uppercase text-yellow-500 text-2xl font-bold'>Il est temps de rejoindre <br /> notre equipe</h2>
        </div>
            <div className='text-white flex flex-col items-center md:items-start'>
                <p>Plusieurs places sont encore disponible</p>
                <a href='#' className='w-fit flex gap-4 rounded-lg border-2 border-white text-white px-6 py-2 mt-4'>
                    Suivre nos cours
                    <img className='w-5 rotate-90 pt-2' src={assets.triangle_line} alt="arrow" />
                </a>
            </div>
        </div>
        <div className='flex-1/2'>
            <div className='cursor-pointer h-60 md:h-80 rounded-md border border-white p-1'>
                <iframe className='w-full h-full' src="https://www.youtube.com/embed/Df9GrBwgyjQ?list=RDDf9GrBwgyjQ" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default CTA