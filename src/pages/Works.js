import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Works.css'
import { Container, Header } from 'semantic-ui-react'


function Works () {
    const [innerText, setInnerText] = useState("victor.")

    return (
        <> 
         <div
      style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}
    >

  
        <div className="worksContent">
        <Link to={'/portfolio2'} onMouseEnter={() => setInnerText("victor.doyle")}
          onMouseOut={() => setInnerText("victor.")}>
        <h4 className="menuHeader"> {innerText} </h4> 
        </Link>

        <div className="worksProjects">
        <Link to={'/space22'}> 
        <h1 className="worksProjectTitles">Space-22</h1>
        <p className="worksProjectDescription"> Audio Visual Interactive Website</p>
        </Link>
        </div>

        <div className="worksProjects">
        <Link to={'/coeus'}> 
        <h1 className="worksProjectTitles">Coeus App</h1>
        <p className="worksProjectDescription"> Social Media Application</p>
        </Link>
        </div>
     
       

        <div className="worksProjects">
        <Link to={'/luxuryrentals'}> 
        <h1 className="worksProjectTitles">Luxury Rentals</h1>
        <p className="worksProjectDescription"> Real Estate Website </p>
        </Link>
        </div>

        <div className="worksProjects">
        <Link to={'/spacegotchi'}> 
        <h1 className="worksProjectTitles">SpaceGotchi</h1>
        <p className="worksProjectDescription"> Reimagined Tamagotchi with Space Theme</p>
        </Link>
        </div>
     
        <div className="worksProjects">
        <Link to={'/ecommerce'}> 
        <h1 className="worksProjectTitles">E-Commerce</h1>
        <p className="worksProjectDescription"> Multiple Shopify Themes &amp; Websites </p>
        </Link>
        </div>
        
        <div className="worksProjects">
        <Link to={'/freelance'}> 
        <h1 className="worksProjectTitles">Freelance</h1>
        <p className="worksProjectDescription"> Selected Freelance Projects </p>
        </Link>
        </div>
        
        </div>

       

       
      
       

 </div>
        </>
    )
}

export default Works