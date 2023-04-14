import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function callPhone() {
  window.open('tel:+84335167610');
}
function LeftContent() {  
  return (
    <div className='left-content-div'>
      <div className='info-div'>
        <h1>Nguyen Nhat <br/> Tien <i>!</i></h1>
        <span className='gender-age'>25 | He / Him |</span> <br/>
        <span className='language-text'>Viet - Eng - Jap - CN <FontAwesomeIcon icon="fa-solid fa-check" /></span><br/>
        <h3 className='break-line-side'> </h3>
      </div>
      <div className='buttons-div'>        
        <button className='side-button about' onClick={callPhone}>
          <div className='flex-between'>
            <span>Contact me <i>!</i></span> 
            <FontAwesomeIcon icon="fa-solid fa-phone-volume" flip="horizontal" />
          </div>        
        </button>
        <button className='side-button'>
          <div className='flex-between'>
            <span>About me <i>!</i></span> 
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
        </button>
        <h3 className='break-line-side'> </h3>
      </div>
      <div className='bio-div'>
       <h2>Fullstack Developer</h2>
       <span>High level experience in web design and development knowledge, producing quality work.</span>
      </div>
    </div> 
  )
}
export default LeftContent