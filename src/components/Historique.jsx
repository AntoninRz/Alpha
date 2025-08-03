import React from 'react'

const historique = () => {
  return (
        <div className="container mx-auto w-full h-fit relative bg-zinc-900 rounded-2xl overflow-hidden flex flex-col items-center md:items-start gap-6 p-4 md:p-8 myt4">
            <div className='border-4 border-white px-4 py-2 w-fit rounded-2xl z-10 backdrop-blur-sm'>
                <h2 className='text-2xl capitalize text-white'>Notre Histoire</h2>
            </div>

            <div className='flex justify-between w-full'>
                <p className='text-3xl md:text-6xl lg:text-9xl  font-semibold text-white'>2023</p>
                <p className='text-3xl md:text-6xl lg:text-9xl  font-semibold text-zinc-400'>2024</p>
                <p className='text-3xl md:text-6xl lg:text-9xl  font-semibold text-zinc-800'>2025</p>
            </div>
            <input type="range" name="Histoire" id="" className='w-full'/>

            <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 lg:gap-8 py-2'>
                    <h3 className='text-yellow-500 flex-1/5 text-xl font-semibold'>D'où vient notre envie de danser le SBK</h3>
                    <p className='text-zinc-300 flex-2/5 text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa veritatis soluta excepturi cupiditate laborum iusto omnis nobis ut quia voluptas iure nostrum commodi a, esse, similique illum quos quibusdam.</p>
                    <p className='text-zinc-300 flex-2/5 text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, blanditiis modi? Dolor perferendis magnam repellendus illum blanditiis quae earum quas quam consectetur, autem dignissimos dicta culpa, exercitationem aperiam iusto rerum.</p>
                </div>            
        </div>
  )
}

export default historique