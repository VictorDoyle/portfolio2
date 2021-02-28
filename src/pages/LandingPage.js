import React, {  useState } from 'react';

import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'
import { useDarkBody } from './hooks'

function LandingPage () {
    const [about, setAbout] = useState("Hello.")
    const [works, setWorks] = useState("I am")
    const [contact, setContact] = useState("Victor")
    useDarkBody()

    return (
    <>
    <div className="landingHero">

 <div className="headerFill"></div>
 

        <h1 className="landingHeaderOne"> 
        <Link to={'/about'} onMouseEnter={() => setAbout("About")}
              onMouseOut={() => setAbout("Hello.")}>
            
            {about} 
            
        </Link>
        </h1>

        <h1 className="landingHeaderTwo" > 
        <Link to={'/works'} onMouseEnter={() => setWorks("Works")}
              onMouseOut={() => setWorks("I am")}>
            
            {works}
            
        </Link>
        </h1>

        <h1 className="landingHeaderThree"> 
        <Link to={'/contact'} onMouseEnter={() => setContact("Contact")}
              onMouseOut={() => setContact("Victor")}>
            
            {contact} 
            
        </Link>
        </h1>


    <div className="heroFooter"></div>
    </div>

  
    </>
    );
  }
  
  export default LandingPage;
  