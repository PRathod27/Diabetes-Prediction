import React from 'react'
// import OpenMl from '../../Pages/Home/OpenMl'
import './Homemainbar.css'
import MainPage from '../../Pages/HomePage/MainPage.jsx'
const Homemainbar = () => {
  return (
    <div className='div-container-1'>
        <div className='div-container-2'>
          {<MainPage/>}
        </div>
    </div>
  )
}

export default Homemainbar