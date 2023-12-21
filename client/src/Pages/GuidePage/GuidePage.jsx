import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import './GuidePage.css'
import diabetes from '../../assests/diabetes.pdf'

const GuidePage = () => {
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='container-1'>
          <div className='container-2'>
                <h2 style={{fontFamily:'initial'}}>Living Well With Diabetes</h2>
                <br/>
              <p><b>You don’t get really good at dealing with diabetes overnight. But over time, you’ll figure out how to go
                 from getting it done to taking it in stride. See if any of these tips are familiar (or worth trying!).</b></p>       
                <p>Remember when you first found out you had diabetes and learned the basics of taking care of yourself?</p>
              <ul>
                <li>Make and eat healthy food.</li>
                <li>Be active most days.</li>
                <li>Test your blood sugar often.</li>
                <li>Take medicines as prescribed, even if you feel good.</li>
                <li>Learn ways to manage stress.</li>
                <li>Cope with the emotional side of diabetes.</li>
                <li>Go to checkups.</li>
              </ul>
              <h2>1. Insulin rate:-</h2>
              <p>Natural insulin (i.e. insulin released from your pancreas) keeps your blood sugar in a very narrow range. Overnight and between meals, the normal, non-diabetic blood sugar ranges between 60-100mg/dl and 140 mg/dl or less after meals and snacks.</p>
              <h2>2. Glucose rate:-</h2>
              <p>It is your body's primary source of energy. It comes from the food you eat. Your body breaks down most of that food into glucose and releases it into your bloodstream. When your blood glucose goes up, 
              it signals your pancreas to release insulin.The expected values for normal fasting blood glucose concentration are between 70 mg/dL (3.9 mmol/L) and 100 mg/dL (5.6 mmol/L). When fasting blood glucose is between 100 to 125 mg/dL (5.6 to 6.9 mmol/L) changes in lifestyle and monitoring glycemia are recommended.</p>
              <h2>3. Take a nutritious diet.</h2>
              <p>A healthy body and a nutritiouse diet always helps you control diabetes. For a nutritious diet we have provided a pdf. Click here and download the pdf.</p>
              <a href={diabetes}>Diet File.</a>
              <h2>4-Things to be avoided for eating :-</h2>
              <ul>
                  <li>Sugary Foods: Reduce your consumption of sugary beverages, candies, pastries, and other high-sugar items.</li>
                  <li>Refined Carbohydrates: Foods made with white flour, such as white bread and pastries, can cause spikes in blood sugar levels. Choose whole grains instead.</li>
                  <li>Processed Foods: Highly processed foods, which often contain unhealthy fats, sugars, and additives, may contribute to insulin resistance.</li>
                  <li>Saturated and Trans Fats: Limit the intake of saturated fats found in red meat, full-fat dairy products, and trans fats often found in processed and fried foods.</li>
                  <li>Excessive Alcohol: Drinking alcohol in moderation is generally advised. Excessive alcohol consumption can affect blood sugar levels.</li>
                  <li>Large Portion Sizes: Be mindful of portion sizes to avoid overeating, as excess calorie intake can contribute to weight gain, a risk factor for diabetes.</li>
                  <li>Sweetened Beverages: Sugary drinks like sodas and fruit juices can lead to rapid spikes in blood sugar levels. Opt for water, herbal tea, or other sugar-free options.</li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default GuidePage