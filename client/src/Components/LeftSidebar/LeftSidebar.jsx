import React from "react"
import { NavLink } from 'react-router-dom' 
import '../LeftSidebar/LeftSidebar.css'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Consultancy' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Consult</p>
                    </NavLink>
                    <NavLink to='/Health_Section'className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Health Section</p>
                    </NavLink>
                    <NavLink to='/Predictor'className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Predictor</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar