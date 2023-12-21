import React from 'react'
import './MainPage.css'
import image from '../../assests/main_page.webp'
import {Link} from "react-router-dom"; 
const MainPage = () => {
  return (
    <div className='main-header'>
        <div className='main-header-2'>
                <b style={{fontSize : '27px'}}>Diabetes</b><br/>
               <div className="intro-para">
                     <p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. <br/>Glucose is 
                      your body’s main source of energy. Your body can make glucose, but glucose also comes from the food you eat.</p>
                    <p>  Insulin is a hormone made by the pancreas that helps glucose get into your cells to be used for energy. <br/>If you have diabetes, your body doesn’t make enough—or any—insulin, or doesn’t use insulin properly.
                     Glucose then stays in your blood and doesn’t reach your cells</p>
                     <p>Diabetes raises the risk for damage to the eyes, kidneys, nerves, and heart. Diabetes is also linked to some types of cancer.<br/> Taking steps to prevent or manage diabetes may lower your risk of developing diabetes health problems.</p>
                </div> 
                <img src={image} style={{ height:300,marginLeft:'20%' }} alt='diabetes'/>
                <br/>
                <br/>
              To know more how to prevent diabetes, click here <Link style={{alignItems:'center'}} to = '/Health_Section'>Guide</Link>
        </div>
    </div>
  )
}

export default MainPage