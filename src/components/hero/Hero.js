import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./hero.scss"


function Hero() {
  const navigate = useNavigate();
  return (
    <div>
        <div className="image-sec">
            <img src={require('../../images/posters-category-banner-0-1920-1920x350.jpg')} alt="cdxc"  width="100%"/>
          <div className="hero-content">
            <h2 className='heading'>Exclusive Print and Artwork</h2>
            <p className='subheading'>  Exclusive Art Pieces, for the Exclusive You.</p>
            <button onClick={() => navigate('/category')} className='button hover-link'>Explore More</button>
          </div>
        </div>

    </div>
  )
}

export default Hero