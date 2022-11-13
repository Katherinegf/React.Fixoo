import React from 'react'
import showcaseLeft from '../assets/Images/showcaseleft.svg'
import showcaseRight from '../assets/Images/showcaseright.svg'
import underLefttImg from '../assets/Images/Winter-Clearance.svg'
import underRightImg from '../assets/Images/New-Arrivals.svg'
import { useNavigate } from "react-router-dom"

const Showcase = () => {
  const navigate = useNavigate()
  return (
    < div className="showcase-body">
      <div className="showcase">
          <img className='showcase-right' src={showcaseRight} alt="showcase"/>
          <div className="showcase-text"> 
              <h2>SALE UP<br/>To 50% off</h2>
              <p>online shopping free home delivery over $100</p>
              <button onClick={() =>navigate("/categories")} className="btn-theme-new">SHOP&nbsp;NOW</button>
          </div>
          <img  className='showcase-left' src={showcaseLeft} alt="showcase"/>
      </div>   
    </div>
  
   
    
  )
}

export default Showcase;