import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Space22.css'
import { Container, Header, Image, Progress, Icon } from 'semantic-ui-react'
/*  images  */
import space22hero from "../../images/space22hero.jpg"
import space22heroTwo from "../../images/space22heroTwo.jpg"
import space22albums from "../../images/space22albums.jpg"
/* gifs */
import purple from "../../images/space22/purple.gif"
import adorionis from "../../images/space22/adorionis.gif"
import firstspace from "../../images/space22/firstspacewalk.gif"
import gravityrider from "../../images/space22/gravityrider.gif"

function Space22 () {
    const [innerText, setInnerText] = useState("victor.")
    /* scroll bar */
    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });
    
    return (
        <> 
            <Link to={'/works'} onMouseEnter={() => setInnerText("victor.doyle")}
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
                {/* scroll bar progress  */}
        <div id="progressBarContainer">
            <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
        </div>
                {/* end of scroll bar  */}
        <div className="worksContent">
       

        <div className="worksTitle">
        <h1 className="projectTitle">Space-22</h1>
        <p className="projectDescription"> Audio Visual Interactive Website</p>
        </div>

        <Image className="heroImage" src={space22hero}/>
        </div>

       {/*  project intro */}
    <Container text className="containerContent">
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



            <Header className="contentTitle secondaryContent" as='h2'>The Goal</Header>
        
        <p className="contentMiniDescription"> 
        The immediate goal of this website is to bring to life a select four songs from the Space-22 Albums. These are: "Purple", "The First Space Walk", "Ad Orionis" and "Gravity Rider". Each of these songs are given their own "Chapter" experience. These can be experienced by Users immediately from the Homepage, by clicking one of the four selection choices. Each chapter has its own personality, narrative and unique twist. 
        
        </p>

  </Container>
        <Image className="heroImage2" src={space22heroTwo}/>

{/* describing the creative process */}
        <Container text className="containerContent">
    <Header className="contentTitle" as='h2'>The Creative Process</Header>
        
        <p className="contentDescription"> 
        Before I began conceptualizing the Space-22 Website, I took the time to design the media and album covers for Space-22. The design ideas and creative process behind these albums led to a clearer approach to designing the website. 
        
        </p>

        <p className="contentMiniDescription"> 
        The overall idea behind Space-22 is that Music can be leveraged as a tool for narrative and can heighten the user's sensations while listening to musical productions. With this goal in mind, the creative process behind the design of the albums became primordial if I were to create albums that correctly synthesized each album's emotive audio base.
        Each album is designed with a specific color palette in mind; one that fits with the mental colors associated with the musical compositions of each album.
        </p>

            <Progress progress='percent' value={90}  total={100} color='red' active >
            <Icon name="users"/> Agreed that the album Purple made them feel the same color
            </Progress>

            <Progress progress='percent' value={70} total={100} color='red' active >
            <Icon name="users" /> Agreed that "Born Explorer" Single made them feel a narrative of Exploration
            </Progress>
            <Progress progress='percent' value={50} total={100} color='red' active >
            <Icon name="users"/> Recognized the music as being "narrative based" or fit for a Video Game, Movie or Series
            </Progress>



            <Header className="contentTitle secondaryContent" as='h2'>Showcasing The Albums</Header>
        
       

  </Container>
  <Image className="finalImage" src={space22albums}/>

      <Container text>
      <Header className="contentTitle secondaryContent" as='h2'>Space-22's Chapter Intro Pages</Header>
      <p className="contentMiniDescription"> 
       Below are gifs showcasing the landing page the User sees before entering a specific chapter on Space-22's Website.
        </p>
      <Image src={adorionis} size='large' rounded centered/>
      <br/>
      <Image src={firstspace} size='large' rounded centered/>
      <br/>
      <Image src={gravityrider} size='large' rounded centered/>
      <br/>
      <br/>
        <br/>
        <br/>
      </Container>



      {/* SECTION: footer */}
        <Container text>
    <Header className="linkEndTitle" as='h2' >View This Project</Header>
        <div className="blockLink">
        <a href="https://victordoyle.github.io/NarrativePage1" target="_blank" rel="noreferrer">
        <Icon name="external alternate" size="big" className="contentLinks"/>
        </a>

       
        <a href="https://github.com/VictorDoyle/NarrativePage1" target="_blank" rel="noreferrer">
        <Icon name="github" size="big" className="contentLinks"/>
        </a>
        
        <a href="https://open.spotify.com/artist/1PBlbMf53P99M1R7eNFxIR?si=24m18Gz2RgeR5CU7ZbE-Gg" target="_blank" rel="noreferrer">
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