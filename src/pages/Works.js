import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Works.css'
import { Container, Header } from 'semantic-ui-react'


function Works () {
    const [innerText, setInnerText] = useState("victor.")

    return (
        <> 
        <div className="worksContent">
        <Link to={'/'} onMouseEnter={() => setInnerText("victor.doyle")}
          onMouseOut={() => setInnerText("victor.")}>
        <h4 className="menuHeader"> {innerText} </h4> 
        </Link>

        <div className="worksProjects">
        <Link to={'/works/space22'}> 
        <h1 className="worksProjectTitles">Space-22</h1>
        <p className="worksProjectDescription"> Audio Visual Interactive Website</p>
        </Link>
        </div>

        <div className="worksProjects">
        <Link to={'/works/coeus'}> 
        <h1 className="worksProjectTitles">Coeus App</h1>
        <p className="worksProjectDescription"> Social Media Application</p>
        </Link>
        </div>
     
       

        <div className="worksProjects">
        <Link to={'/works/luxuryrentals'}> 
        <h1 className="worksProjectTitles">Luxury Rentals</h1>
        <p className="worksProjectDescription"> Real Estate Website </p>
        </Link>
        </div>

        <div className="worksProjects">
        <Link to={'/works/spacegotchi'}> 
        <h1 className="worksProjectTitles">SpaceGotchi</h1>
        <p className="worksProjectDescription"> Reimagined Tamagotchi with Space Theme</p>
        </Link>
        </div>
     
        <div className="worksProjects">
        <Link to={'/works/ecommerce'}> 
        <h1 className="worksProjectTitles">E-Commerce</h1>
        <p className="worksProjectDescription"> Multiple Shopify Themes &amp; Websites </p>
        </Link>
        </div>
        
        <div className="worksProjects">
        <Link to={'/works/freelance'}> 
        <h1 className="worksProjectTitles">Freelance</h1>
        <p className="worksProjectDescription"> Selected Freelance Projects </p>
        </Link>
        </div>
        
        </div>

       

       
      
       


        </>
    )
}

export default Works