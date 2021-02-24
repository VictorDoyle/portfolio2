import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css'


function About () {
    const [innerText, setInnerText] = useState("victor.")

    return (
        <> 
       <div className="aboutHero">
       
        <Link to={'/works'} onMouseEnter={() => setInnerText("victor.works")}
          onMouseOut={() => setInnerText("victor.")}>
        <h4 className="menuHeader"> {innerText} </h4> {/* on hover change to victor.works */}
        </Link>

        <h1 className="aboutHeroHeader">I design &amp; build <br/> digital products</h1>


       </div>
       <div className="aboutContent">
           <p> 
               Hello World Container
           </p>
       </div>
        </>
    )
}

export default About