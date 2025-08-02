import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
      <div className="w-full absolute px-0 md:px-20 lg:px-32 py-0 md:py-5 z-10">
        {/* navbar */}
        <div className="hidden md:flex justify-between px-4 md:px-8 py-2 items-center backdrop-blur-sm rounded-full border-t border-white/50 border-b">
            <img className="w-14 h-10" src={assets.logo} />
            <ul className="flex justify-center items-center gap-6">
              <li><a className='text-center text-white text-base font-normal' href="#">Accueil</a></li>
              <li><a className='text-center text-white text-base font-normal capitalize' href="#">à propos</a></li>
              <li><a className='text-center text-white text-base font-normal' href="#">Nos cours</a></li>
              <li><a className='text-center text-white text-base font-normal' href="#">Contact</a></li>
            </ul>
            <div className="flex justify-center items-center gap-3">
              <button className='w-28 h-7 bg-neutral-900/70 rounded-full backdrop-blur-sm text-center text-zinc-400 text-base font-semibold'>Connecter</button>
              <button className='w-28 h-7 bg-white rounded-full backdrop-blur-sm text-center text-black text-base font-semibold'>S'inscrire</button>
            </div>
        </div>

        {/* navabar mobile */}
        <div className="md:hidden w-full flex justify-between px-4 py-2 items-center backdrop-blur-sm border-white/50 border-b">
          <img className="w-14 h-10" src={assets.logo} />
          <div className='flex flex-col justify-center items-center gap-4'>
              <ul className="hidden flex-col justify-center items-center gap-2">
                <li><a className='text-center text-white text-base font-normal' href="#">Accueil</a></li>
                <li><a className='text-center text-white text-base font-normal capitalize' href="#">à propos</a></li>
                <li><a className='text-center text-white text-base font-normal' href="#">Nos cours</a></li>
                <li><a className='text-center text-white text-base font-normal' href="#">Contact</a></li>
              </ul>
              <div className='hidden gap-2 justify-center'>
              <button className='w-28 h-7 bg-neutral-900/70 rounded-full backdrop-blur-sm text-center text-zinc-400 text-base font-semibold'>Connecter</button>
              <button className='w-28 h-7 bg-white rounded-full backdrop-blur-sm text-center text-black text-base font-semibold'>S'inscrire</button>
              </div>
              <div>
                <img className='w-6' src={assets.menu_icon} alt="burger menu" />
              </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar