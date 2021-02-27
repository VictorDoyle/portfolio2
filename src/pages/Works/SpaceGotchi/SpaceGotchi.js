import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SpaceGotchi.css'
import { Container, Header, Image, Progress, Icon } from 'semantic-ui-react'
/* hero one  */
import spaceGotchiHero from '../../../images/spacegotchi/spacegotchiHero.jpeg'



function SpaceGotchi () {
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
        <h1 className="projectTitle">SpaceGotchi</h1>
        <p className="projectDescription"> A Reimagined Approach to Tamagotchi</p>
        </div>

        <Image className="spacegotchiHero" src={spaceGotchiHero}/>
        </div>

        {/* text content */}
    <Container text>
    <Header className="contentTitle" as='h2'>SpaceGotchi</Header>
        
        <p className="contentDescription"> 
        While attending a full time remote Software Engineering Immersive at General Assembly, I was tasked in coding an application that mimicked the functionality of a Tamagotchi.   
        
        </p>

        <p className="contentMiniDescription"> 
        
        The basic functionality required for this project was the following: The user must have a displayed character that has Hunger, Sleep and Boredom levels. Each of these levels can be decremented by user interaction. If these levels go beyond 10, the character dies of boredom, lack of sleep or hunger.
        I approached this project with the mindset that I wanted to break the boundaries of what one could describe a "Tamagotchi" as. I believe that the concept of Tamagotchi's could technically be implemented in an innovative and creative setting, in this case, an Astronaut stranded on another planet (all the while remaining faithful to the requirements and delivering the project in an appropriate form).
        </p>

            
            <Progress progress='percent' value={43.5} total={100} color='red' active >
            <Icon name="css3" /> CSS3
            </Progress>
            <Progress progress='percent' value={35.7} total={100} color='red' active >
            <Icon name="js"/> Javascript
            </Progress>
            <Progress progress='percent' value={20.8}  total={100} color='red' active >
            <Icon name="html5"/> HTML 5
            </Progress>



            <Header className="contentTitle secondaryContent" as='h2'>The Premise</Header>
        
        <p className="contentMiniDescription"> 
        The premise of the SpaceGotchi is to present a time based browser experience where an astronaut seeking interplanetary travel has found complications after having crashed on an unknown planet, in an unrecognizable planetary system. Accompanied by a mischievous and questionable AI, HAL42, the Astronaut will have to eat, sleep and find productivity on this newly discovered environment, or risk dying a lonesome death.
        </p>

  </Container>
        <Image className="heroImage2" src={""}/>
      
        <Container text>
    <Header className="linkEndTitle" as='h2' >View This Project</Header>
        <div className="blockLink">
        <a href="https://victordoyle.github.io/SpaceGame" target="_blank" rel="noreferrer">
        <Icon name="external alternate" size="big" className="contentLinks"/>
        </a>

       
        <a href="https://github.com/VictorDoyle/SpaceGame" target="_blank" rel="noreferrer">
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

export default SpaceGotchi