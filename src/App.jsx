import React from 'react'
import Header from './components/Header';
import Apropos from './components/Apropos';

const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <Header/>
      <Apropos/>
    </div>
  )
}

export default App