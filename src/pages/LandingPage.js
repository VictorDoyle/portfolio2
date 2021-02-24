import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'


function LandingPage () {
    const [about, setAbout] = useState("Hello.")
    const [works, setWorks] = useState("I am")
    const [contact, setContact] = useState("Victor")


    return (
    <>
    <div className="landingHero">

 <div className="headerFill"></div>
    <Link to={'/about'} onMouseEnter={() => setAbout("About")}
          onMouseOut={() => setAbout("Hello.")}>
        <h1 className="landingHeaderOne"> {about} </h1>
    </Link>

    <Link to={'/works'} onMouseEnter={() => setWorks("Works")}
          onMouseOut={() => setWorks("I am")}>
        <h1 className="landingHeaderTwo" > {works} </h1>
    </Link>

    <Link to={'/contact'} onMouseEnter={() => setContact("Contact")}
          onMouseOut={() => setContact("Victor")}>
        <h1 className="landingHeaderThree"> {contact} </h1>
    </Link>
    <div className="heroFooter"></div>
    </div>

  
    </>
    );
  }
  
  export default LandingPage;
  