import React from 'react'
import pdf from '../pdf/Resume.pdf'
import hero from './data/hero.json'

function Home() { 
  return (
    <> 
    <div className="container home">
        <div className="left">
            <h1>Ram Ram </h1>
            <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
        <div className="img">

            <img src={`/assets/${hero.imgSrc}`} alt="om-photo" />
        </div>
        </div>
    </div>     
    </>
  )
}

export default Home;
