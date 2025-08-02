import React from 'react'
import { assets } from '../assets/assets'

const Apropos = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 w-full h-fit p-4 md:p-8 relative bg-zinc-900 rounded-3xl container mx-auto">
        <div className="w-full flex-1 min-h-[400px] relative bg-black rounded-2xl">
            <img className="h-full absolute bottom-0 left-1/2 transform -translate-x-1/2" src={assets.woman}/>
            <div className='absolute left-4 top-4 text-white'>
                <h4 className="text-2xl font-bold">03</h4>
                <p className='text-gray-400'>Danses Latines</p>
            </div>
            <div className='absolute right-4 top-4 text-white text-right'>
                <h4 className="text-2xl font-bold">+30</h4>
                <p className='text-gray-400'>Danseurs Actifs</p>
            </div>
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-300 rounded-full border-t-2 border-b-2 border-yellow-500 px-4 py-1 backdrop-blur-sm flex gap-2'>
                <a className='text-semibold text-center' href="#">En savoir plus sur nous</a>
                <img className='rotate-90' src={assets.triangle_yellow_line} alt="arrow" />
            </div>
        </div>
        <div className='flex-1 w-full flex justify-around'>
            <div className='w-4/5 flex flex-col items-center md:items-start gap-4'>
                <div className='border-4 border-white px-4 py-2 w-fit rounded-2xl'>
                    <h2 className='text-2xl capitalize text-white'>à propos de nous</h2>
                </div>
                <div className='text-zinc-400 text-center md:text-justify flex flex-col gap-8'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quod saepe dolor repellat optio! Autem incidunt accusamus <span className='text-yellow-400'>atque tempora dolor.</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <span className='text-yellow-400'>atque tempora dolor.</span> Necessitatibus numquam voluptas autem et delectus. Ipsa necessitatibus dignissimos reiciendis vero temporibus?</p>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-4 md:justify-between items-center text-zinc-500 mt-6'>
                    <a className='flex gap-2 hover:text-white hover:underline' href="#">
                        <img src={assets.facebook} alt="facebook" />
                        Alpha - Tsiry & Santatra
                    </a>
                    <a className='flex gap-2 hover:text-white hover:underline' href="#">
                        <img src={assets.instagram} alt="instagram" />
                        Alpha - Tsiry & Santatra
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Apropos