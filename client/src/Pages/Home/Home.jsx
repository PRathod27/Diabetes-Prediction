import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '../../Components/RightSideBar/RightSidebar.jsx'
import Homemainbar from '../../Components/Homemainbar/Homemainbar.jsx'
// import 'D:/New app/Diabetes_Pred/client/src/App.css'
import '../../App.css'

const Home = () => {
  return (
     <div className='home-container-1'>
        <LeftSidebar />
     <div className='home-container-2'>
        <Homemainbar/>
        <RightSidebar/>
        </div>
    </div>
  )
}

export default Home