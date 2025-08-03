import React from 'react'
import Header from './components/Header';
import Apropos from './components/Apropos';
import Valeur from './components/Valeur';
import Historique from './components/Historique';
import Membre from './components/Membre';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <Header/>
      <Apropos/>
      <Valeur/>
      <Historique/>
      <Membre/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App