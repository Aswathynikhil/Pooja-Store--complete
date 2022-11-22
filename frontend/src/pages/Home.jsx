import React from 'react'
import Slider from '../components/Slider'
import Galleryimgs from '../components/Galleryimgs'

import Categorycard from '../components/Categorycard'

 
function Home() {
  return (
    <>
      <div className='container'>
      <Slider />
      <Categorycard/>
      <Slider />
      <Galleryimgs />
      </div>
    </>
  )
}

export default Home