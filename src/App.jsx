import React from 'react'
import Sidebar from './components/sidebar'
import Display from './components/display'
import Player from './components/player'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  )
}

export default App