import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center bg-zinc-900 h-fit p-4 md:p8'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <div>
                <img className='w-40' src={assets.logo} alt="" />
            </div>
            <div className='max-w-xl text-white'>
                <p className='text-center md:text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dolore, repudiandae natus doloribus eaque aperiam eos obcaecati nihil incidunt. Obcaecati.</p>
            </div>
        </div>
        <div className='w-full flex flex-col-reverse gap-4 md:gap-0 flex-wrap md:flex-row items-center md:items-start justify-between container mx-auto'>
            <div className='flex-1/4'>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='flex gap-4'>
                        <div className='border-t border-b border-white rounded-md backdrop-blur-sm p-2'>
                            <img  className='w-8' src={assets.facebook} alt="" />
                        </div>
                        <div className='border-t border-b border-white rounded-md backdrop-blur-sm p-2'>
                            <img className='w-8' src={assets.instagram} alt="" />
                        </div>
                        <div className='border-t border-b border-white rounded-md backdrop-blur-sm p-2'>
                            <img src={assets.youtube} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-center md:text-left'>
                        <label htmlFor='membre' className='text-xl text-yellow-400 font-semibold'>Avoir de nos nouvelles</label>
                        <input type="text" name="Membre" id="membre" placeholder='Your e-mail ...' className='rounded-md border border-white h-10 text-zinc-500 px-2'/>
                    </div>
                </div>
            </div>
            <div className='flex-3/4 flex flex-col md:flex-row items-center justify-between gap-2'>
                <div className='flex flex-col gap-2 items-center w-fit'>
                    <h3 className='text-white font-semibold text-2xl'>Nos cours de danses</h3>
                    <p className='text-zinc-400 hover:text-white hover:underline'>Salsa Portoricaine</p>
                    <p className='text-zinc-400 hover:text-white hover:underline'>Bachata Sensuel</p>
                    <p className='text-zinc-400 hover:text-white hover:underline'>Urban Kiz</p>
                </div>
                <div className='flex flex-col gap-2 items-center w-fit'>
                    <h3 className='text-white font-semibold text-2xl'>Nos méthodes</h3>
                    <p className='text-zinc-400 hover:text-white hover:underline'>Figures</p>
                    <p className='text-zinc-400 hover:text-white hover:underline'>Techniques</p>
                    <p className='text-zinc-400 hover:text-white hover:underline'>Pratiques</p>
                </div>
                <div className='flex flex-col gap-2 items-center w-fit'>
                    <h3 className='text-white font-semibold text-2xl'>Nos coordonnées</h3>
                    <p className='text-zinc-400 hover:text-white hover:underline'>tel : +261 34 00 000 00</p>
                    <p className='text-zinc-400 hover:text-white hover:underline'>E-mail : contact@alpha.mg</p>
                    <p className='text-zinc-400 hover:text-white hover:underline'>Adresse : Besarety</p>
                </div>
            </div>
        </div>
        <p className='text-zinc-400 font-light text-sm w-4/5 mt-4 border-t border-white text-center pt-4'>Copyright © Alpha 2025, <a className='text-yellow-400' href="#">skillptor</a> - <a className='text-yellow-500' href="#">Antonin RAZAFISON</a>, all right reserved</p>
    </div>
  )
}

export default Footer