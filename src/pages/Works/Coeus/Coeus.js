import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Coeus.css'
import { Container, Header, Image, Progress, Icon } from 'semantic-ui-react'
/*  images  */
import coeushome from "../../../images/coeus/coeushome.jpg"
import fullWireFrame from "../../../images/coeus/full-wireframe.jpg"


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
        For the time being, Coeus is still in Version 1.0. The most important next step for me is to begin styling the overall application to deliver a flawless browsing experience to the users.
        </p>

  </Container>
        <Image className="heroImage2" src={fullWireFrame}/>

{/* describing the creative process */}
        <Container text className="containerContent">
    <Header className="contentTitle" as='h2'>Steps To Take After Version 1.0 </Header>
        
        <p className="contentDescription"> 
        What's in store for Coeus Version 2.0 is quite special and I believe will mark Coeus apart from other social media platforms.
        </p>

        <p className="contentMiniDescription"> 
        The versions post MVP will bring new features with the homepage and added user experience/functionality. The user will be able to change their moods, which will in turn affect what kind of posts will be shown on their profile homepage. The users will also have a level that will effectively progress throughout the user's use of the application. For each article and news read, they will gain points and eventually "level up". <br/><br/>
        Each user has a choice of how to use the Coeus platform, some may choose to use it to learn daily facts, some may use it to keep updated about the current news or to read and learn daily. The social media platform offers multiple ways to enjoy user to user interaction as well as overall interaction. <br/> <br/>
        Each user will start from level 0 and have no trophies. For each interaction the user partakes in within the application, the user will gain points and trophies for certain achievements. For each article the user reads fully, they will gain a certain amount of points. The same is applied when users share posts, comment on other peoples posts, read random facts of the day, read the news. The reason behind this choice is to create a positive environment to promote learning and social interaction.
        </p>

            <Progress progress='percent' value={90}  total={100} color='red' active >
            <Icon name="github"/> Version 1.0 Completed
            </Progress>

            <Progress progress='percent' value={20} total={100} color='red' active >
            <Icon name="newspaper" /> 2.0 Adding 20+ Sources of News and Api
            </Progress>
            <Progress progress='percent' value={0} total={100} color='red' active >
            <Icon name="users"/> Adding Image Upload, Getting A Host/Server For User Info
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
        <a href="https://the-coeus-app.herokuapp.com/" target="_blank" rel="noreferrer">
        <Icon name="external alternate" size="big" className="contentLinks"/>
        </a>

       
        <a href="https://github.com/VictorDoyle/Coeus-App" target="_blank" rel="noreferrer">
        <Icon name="github" size="big" className="contentLinks"/>
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