import React from 'react'
import { assets, membresData } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Membre = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)
    const carouselRef = useRef(null)

    useEffect(() => {
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024) {
                setCardsToShow(2)
            } else {
                setCardsToShow(1)
            }
        }
            updateCardsToShow()

            window.addEventListener('resize', updateCardsToShow)
            return () => window.removeEventListener('resize', updateCardsToShow)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index)
                        setCurrentIndex(index)
                    }
                })
            },
            {
                root: carouselRef.current,
                threshold: 0.5,
            }
        )
        const carouselCards
    })

    const nextMembre = () => {
        const maxIndex = membresData.length - cardsToShow;
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= maxIndex) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const prevMembre = () => {
        const maxIndex = membresData.length - cardsToShow;
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return maxIndex;
            }
            return prevIndex - 1;
        });
    };
    const translateXValue = -(currentIndex * (100 / cardsToShow));

  return (
        <div className="w-full p-4 md:p-8 bg-yellow-400/4 lg:bg-[radial-gradient(ellipse_25%_40%_at_50%_50%,_rgba(255,_233.95,_2.45,_0.30)_0%,_rgba(153,_140.37,_1.47,_0)_100%)] overflow-hidden flex flex-col items-center gap-8">
            <div className='w-full flex flex-col md:flex-row justify-start items-center md:justify-between md:items-start gap-4 mt-4'>
                <div className='border-4 border-white px-4 py-2 w-fit rounded-2xl z-10 backdrop-blur-sm'>
                    <h2 className='text-2xl capitalize text-white'>Nos membres</h2>
                </div>
                <div className='flex flex-col gap-2 text-center md:text-left'>
                    <label htmlFor='membre' className='text-xl text-yellow-400 font-semibold'>Trouver une personne</label>
                    <input type="text" name="Membre" id="membre" placeholder='Antonin ...' className='rounded-md border border-white h-10 text-zinc-600 px-2'/>
                </div>
            </div>

            <div className='hidden md:flex gap-2 justify-end w-full'>
                <button onClick={prevMembre} className='rotate-180 border border-white cursor-pointer hover:border-yellow-500 p-1 rounded-md'>
                    <img src={assets.triangle_line} alt="" className='rotate-90' />
                </button>
                <button onClick={nextMembre} className='border border-white cursor-pointer hover:border-yellow-500 p-1 rounded-md'>
                    <img src={assets.triangle_line} alt="" className='rotate-90' />
                </button>
            </div>

            <div className="flex w-full gap-4 overflow-x-scroll snap-x snap-mandatory hide-scrollbar lg:justify-center" style={{ scrollbarWidth: 'none' }} >
                {membresData.map((membre, index) => (
                    <div key={index} className="membre relative flex-none w-72 h-96 border border-white hover:border-yellow-500 rounded-xl snap-start" >
                        <img src={membre.profilePic} alt={`Profil de ${membre.name}`} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 flex gap-4 p-2 backdrop-blur-sm border-t border-b border-white z-10 rounded-md">
                            {membre.socials.map((social, socialIndex) => (
                                <img key={socialIndex} src={social} alt="" />
                            ))}
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-2xl font-semibold">{membre.name}</h3>
                            <p>{membre.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 md:hidden">
                {membresData.map((_, index) => (
                    <div
                        key={index}
                        className={`border-3 border-white w-4 h-4 rounded-full ${
                            index === currentIndex ? 'bg-yellow-500' : ''
                        }`}
                    ></div>
                ))}
            </div>
            
            <div className="text-yellow-300">
                <a className="text-semibold text-center rounded-full border-t-2 border-b-2 border-yellow-500 px-4 py-1 backdrop-blur-sm flex gap-2" href="#" >
                    En savoir plus sur nous
                    <img className="rotate-90" src={assets.triangle_yellow_line} alt="arrow" />
                </a>
            </div>
        </div>
  )
}

export default Membre