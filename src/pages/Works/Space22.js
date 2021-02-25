import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Space22.css'
import { Container, Header, Image, Progress, Icon } from 'semantic-ui-react'
/* hero one  */
import space22hero from "../../images/space22hero.jpg"
import space22heroTwo from "../../images/space22heroTwo.jpg"


function Space22 () {
    const [innerText, setInnerText] = useState("victor.")
    
    return (
        <> 
            <Link to={'/'} onMouseEnter={() => setInnerText("victor.doyle")}
                    onMouseOut={() => setInnerText("victor.")}>
                    <h4 className="menuHeaderDark"> {innerText} </h4> 
            </Link>
        <div
            style={{
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
            }}
            >

        <div className="worksContent">
       

        <div className="worksTitle">
        <h1 className="projectTitle">Space-22</h1>
        <p className="projectDescription"> Audio Visual Interactive Website</p>
        </div>

        <Image className="heroImage" src={space22hero}/>
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

            <Progress progress='percent' value={41.7}  total={100} color='red' active >
            <Icon name="html5"/> HTML 5
            </Progress>
            <Progress progress='percent' value={37.5} total={100} color='red' active >
            <Icon name="css3" /> CSS3
            </Progress>
            <Progress progress='percent' value={20.8} total={100} color='red' active >
            <Icon name="js"/> Javascript
            </Progress>



            <Header className="contentTitle" as='h2'>The Goal</Header>
        
        <p className="contentMiniDescription"> 
        The immediate goal of this website is to bring to life a select four songs from the Space-22 Albums. These are: "Purple", "The First Space Walk", "Ad Orionis" and "Gravity Rider". Each of these songs are given their own "Chapter" experience. These can be experienced by Users immediately from the Homepage, by clicking one of the four selection choices. Each chapter has its own personality, narrative and unique twist. 
        
        </p>

  </Container>
        <Image className="heroImage2" src={space22heroTwo}/>
      
        <Container text>
    <Header className="linkEndTitle" as='h2' >View This Project</Header>
        <div className="blockLink">
        <a href="https://victordoyle.github.io/NarrativePage1" target="_blank">
        <Icon name="external alternate" size="big" className="contentLinks"/>
        </a>

       
        <a href="https://github.com/VictorDoyle/NarrativePage1" target="_blank">
        <Icon name="github" size="big" className="contentLinks"/>
        </a>
        
        <a href="https://open.spotify.com/artist/1PBlbMf53P99M1R7eNFxIR?si=24m18Gz2RgeR5CU7ZbE-Gg" target="_blank">
        <Icon name="spotify" size="big" className="contentLinks"/>
        </a>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
       


        </Container>

       
      
       

        </div>
        </>
    )
}

export default Space22