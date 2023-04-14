import React from 'react'
// import gif from '../assets/giphy.gif';
import me from '../assets/me.png';

function RightContent() {
  return (
    <div className='right-content-div'>     
      <div className='image-div'>
      <svg class="home__blob" viewBox="0 0 200 187" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="hsl(182, 76%, 88%)">
        <mask id="mask0" mask-type="alpha">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        </mask>
        <g mask="url(#mask0)">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            <image class="home__blob-img" x="0" y="10" xlinkHref={me}/>
        </g>
      </svg>
                    
        <h3 className='break-line-side'> </h3>     
      </div>
      <div className='image-div bio'>        
        <h2>Nguyen Nhat Tien</h2>    
        <p>DOB: 21/07/1998</p>     
        <p>Mobile: +84 335-167-610</p>
        <p>Email: nntien2107@gmail.com</p>
      </div>
    </div> 
  )
}
export default RightContent