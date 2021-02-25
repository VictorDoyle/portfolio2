import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Space22.css'
import { Container, Header, Image } from 'semantic-ui-react'
/* image one  */
/* import space22hero from "../../images/space22hero.jpeg"
 */

function Space22 () {
    const [innerText, setInnerText] = useState("victor.")
    
    return (
        <> 
        <div className="worksContent">
        <Link to={'/'} onMouseEnter={() => setInnerText("victor.doyle")}
          onMouseOut={() => setInnerText("victor.")}>
        <h4 className="menuHeader"> {innerText} </h4> 
        </Link>

        <div className="worksTitle">
        <h1 className="projectTitle">Space-22</h1>
        <p className="projectDescription"> Audio Visual Interactive Website</p>
        </div>

        <Image className="heroImage" src={""}/>
        </div>

        {/* text content */}
        <Container text>
    <Header className="contentTitle" as='h2'>Space-22</Header>
        
        <p className="contentDescription"> 
        I began initializing Space-22 in the Summer of 2020 and have since built an artist profile behind this brand.  The overall theme of Space-22 is an innovative approach to experiencing music through narrative and storytelling, with each musical production focusing on building an audiointeractive story. 
        
        </p>

        <p className="contentMiniDescription"> 
        
        Achieved more than 10,000 streams in under 3 months of beginning to stream on platforms such as Spotify and Apple Music. After analyzing consumer feedback, Spotify listener analytics and overall streaming data, I decided to take music production and apply innovative ways to experience each song. I built an interactive website to showcase select songs and deliver a visual journey to listeners. The website is built in HTML, CSS and Javascript while utilizing the power of Jquery for animations.

</p>
  </Container>
      
       

       
      
       


        </>
    )
}

export default Space22