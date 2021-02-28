import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Coeus.css'
import { Container, Header, Image, Progress, Icon } from 'semantic-ui-react'
/*  images  */
import coeushome from "../../../images/coeus/coeushome.jpg"

function Coeus () {
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
                {/* scroll bar progress  */}
        <div id="progressBarContainer">
            <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
        </div>
                {/* end of scroll bar  */}
        <div className="worksContent">
       

        <div className="worksTitle">
        <h1 className="projectTitle">Coeus</h1>
        <p className="projectDescription"> A Reimagined Social Network</p>
        </div>

        <Image className="coeusHeroImage" src={coeushome}/>
        </div>

       {/*  project intro */}
    <Container text className="containerContent">
    <Header className="contentTitle" as='h2'>What Is Coeus</Header>
        
        <p className="contentDescription"> 
        Coeus is an interactive social media platform that allows a user to post photos, comment, follow and like other users' posts. What's different with Coeus when compared to other social media platforms?
        </p>

        <p className="contentMiniDescription"> 
        
        When prototyping Coeus, the essence behind this application was to bring to life a social media that was capable of positively affecting its users. There have been numerous academic studies on the psychological as well as financial effect that social media can have when overconsumed by users. Coeus was made in the hope that social media and technology could be synthesized in such a way as to produce a lasting positive effect on its users.
        The most important functionality that Coeus delivers, and that is part of its mission statement, is the incorporation of news, academic articles and positivity messages that are embedded within the users' homefeed. For every 5-10 post a user scrolls by, they are presented with a factual data point as well as a positive reinforcing psychological advice, lesson or general comment.
    
        </p>

            <Progress progress='percent' value={91.5}  total={100} color='red' active >
            <Icon name="js"/> Javascript
            </Progress>
            <Progress progress='percent' value={6.4} total={100} color='red' active >
            <Icon name="css3" /> CSS3
            </Progress>
            <Progress progress='percent' value={2.1} total={100} color='red' active >
            <Icon name="html5"/> HTML 5
            </Progress>


            <Header className="contentTitle secondaryContent" as='h2'>Why The Name Coeus?</Header>
            <p className="contentDescription"> 
        
            Coeus [pronounced "Ti-Oh-Sh" or "Ki-Oh-Sh"] was the greek titan of inquisition and intellect. Since this social media platform hopes to promote inquisition and intellectual stimulation in regards to learning more things, the symbolism and essence behind the Greek God Coeus is well fitting.
        </p>
            <Header className="contentTitle secondaryContent" as='h2'>The Goal</Header>
        
        <p className="contentMiniDescription"> 
        The mission statement of this project and application are that they should produce a positive outcome based on their interaction with users. By utilizing the power of React.js and the well known event of "infinite scrolling", I built Coeus hoping I could use those powers and create a positive learning environment in which users would walk away from this social media platform having learnt more information and knowledge than if they had been without it. 
        This application was part of my final project at General Assembly, to showcase my ability to use what I had learned and effectively put it to work. Having done so, I now have some additional implementations and features I look forward to adding.
        For the time being, Coeus
        </p>

  </Container>
        <Image className="heroImage2" src={""}/>

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

export default Coeus