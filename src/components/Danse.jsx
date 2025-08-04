import React, { lazy } from 'react'
import { assets } from '../assets/assets'

const Danse = () => {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 my-8'>
        <div className='rounded-lg flex-1/3 flex flex-col md:flex-row lg:flex-col md:justify-between gap-4 w-fit bg-zinc-900 p-4'>
            <div className='border rounded-md border-white p-2 w-full'>
              <video className='w-full rounded-md' controls muted>
                <source className="h-full w-full rounded-lg" src={assets.salsa} type="video/mp4" />
              </video>
            </div>
            <div className='flex flex-col gap-4 items-center md:items-start lg:items-center text-white text-center md:text-left lg:text-center px-2'>
                <h3 className='text-yellow-500 text-2xl'>Salsa Portoricaine</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatibus!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus accusamus qui maiores a omnis odio ratione totam optio asperiores.</p>
            </div>
        </div>
        <div className='rounded-lg flex-1/3 flex flex-col md:flex-row-reverse lg:flex-col-reverse md:justify-between gap-4 w-fit bg-zinc-900 p-4'>
            <div className='border rounded-md border-white p-2 w-full'>
              <video className='w-full rounded-md' controls muted>
                <source className="h-full w-full rounded-lg" src={assets.bachata} type="video/mp4" />
              </video>
            </div>
            <div className='flex flex-col gap-4 items-center md:items-start lg:items-center text-white text-center md:text-left lg:text-center px-2'>
                <h3 className='text-yellow-500 text-2xl'>Bachata Sensuel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatibus!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus accusamus qui maiores a omnis odio ratione totam optio asperiores.</p>
            </div>
        </div>
        <div className='rounded-lg flex-1/3 flex flex-col md:flex-row lg:flex-col md:justify-between gap-4 w-fit bg-zinc-900 p-4'>
            <div className='border rounded-md border-white p-2 w-full'>
              <video className='w-full h-auto rounded-md' controls muted>
                <source className="h-full w-full rounded-lg" src={assets.kizomba} type="video/mp4" />
              </video>
            </div>
            <div className='flex flex-col gap-4 items-center md:items-start lg:items-center text-white text-center md:text-left lg:text-center px-2'>
                <h3 className='text-yellow-500 text-2xl'>Urban Kiz</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatibus!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus accusamus qui maiores a omnis odio ratione totam optio asperiores.</p>
            </div>
        </div>
    </div>
  )
}

export default Danse