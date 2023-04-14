import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className="footer-div">
      <h3 className='break-line'> </h3>
      <div className='footer-social-bar'>
        <a href="https://github.com/nhattien2107">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a> 
        <a href="https://www.linkedin.com/in/tien-nguyen-954544212/">
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www.youtube.com/@ChaeNoran">
          <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </a>
        <a href="mailto:nntien2107@gmail.com">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
      </div>
    </div> 
  )
}
export default Footer