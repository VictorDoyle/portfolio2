import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FlixAlways.css'
import { Container, Header, Image, Progress, Icon } from 'semantic-ui-react'
/*  images  */
import flixAlwaysHome from "../../../images/flixalways/flixalways-homepage.jpg"
import flixAlwaysMovie from "../../../images/flixalways/flixalways-moviedetail.jpg"


function FlixAlways () {
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
       
                {/* scroll bar progress  */}
        <div id="progressBarContainer">
            <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
        </div>
                {/* end of scroll bar  */}
        <div className="worksContent">
       

        <div className="worksTitle">
        <h1 className="projectTitle">FlixAlways</h1>
        <p className="projectDescription"> A More Personal Movie Recommendation App</p>
        </div>

        <Image className="coeusHeroImage" src={flixAlwaysHome}/>
        </div>

       {/*  project intro */}
    <Container text className="containerContent">
    <Header className="contentTitle" as='h2'>What Is FlixAlways</Header>
        
        <p className="contentDescription"> 
        FlixAlways is a Full Stack Application built with a React.Js frontend and a Node.Js backend, with the addition of Bootstrap and Css for Styling, Framer Motion for Animations, GraphQL, PostgreSQL, Prisma ORM for Data relations and Database.
        </p>

        <p className="contentMiniDescription"> 
        
        When prototyping FlixAlways, I had in mind a reimagined approach to recommending movies to users. It is so often that users endlessly scroll through movies on streaming platforms such as Netflix, Amazon, Hulu and others. Every single one of those platforms approach movie recommendations as well as showing movies to users the same way. I saw a gap in the market in the following: When a user watches a movie, that movie will be shown to them again repeatedly in recommendations, lists and other places. In my opinion, if those platforms were to dismiss movies that have already been interacted with (and place them elsewhere out of immediate view), then more unwatched movies could be shown as recommendations.
        As such, I built FlixAlways with a team of two fantastic and resourceful Software Engineers with the hopes of solving this gap in the market.
        <br/>
        <br/>
        Below Are the percentages of code we have so far. You'll also get to see some of our stylistic choices, design decisions and how we manipulate an API to source our data, to consequently personalize this API into serving great user movie recommendations!
    
        </p>

            <Progress progress='percent' value={70.9}  total={100} color='red' active >
            <Icon name="js"/> Javascript
            </Progress>
            <Progress progress='percent' value={26} total={100} color='red' active >
            <Icon name="css3" /> CSS3
            </Progress>
            <Progress progress='percent' value={3} total={100} color='red' active >
            <Icon name="html5"/> HTML 5
            </Progress>


            <Header className="contentTitle secondaryContent" as='h2'>Basing Movie Recommendations</Header>
            <p className="contentDescription">Solving the issue of repetition and obvious patterns in Recommendations</p>
            <p className="contentMiniDescription"> 
            As previously described, a constant issue found on streaming platforms is being recommended movies you've already seen. With FlixAlways, we decided to tackle this issue headon by adding interactive buttons for users to use on movie cards. Each user has the option to tell us which Movies they've seen, disliked, liked, and which movies they'd like to save for later viewing. All of this data eventually accumulates into a large Array of data for each user, which gives us a general idea of what a user is enjoying and not wanting to see again.
            <br/>
            <br/>
            At time of writing, the Team at FlixAlways is pursuing a Machine Learning approach in order to return greater recommendations for each user, all based on their interaction with the movie cards we have provided them. While awaiting the final implementation and deployment of our Machine Learning Algorithms, we decided to provide a quick fix to recommendations by providing users movies that are both similarly ranked to the movies they have interacted with, as well as recommending them the most popular movies of a given genre, streaming platform or other qualifiers.
        </p>
         <Image src={flixAlwaysMovie}/>
            <Header className="contentTitle secondaryContent" as='h2'>Versions and Issues</Header>
        
        <p className="contentMiniDescription"> 
        Since May 10th 2021, the FlixAlways application is a Single Page Application that is built for Desktop browsers but is mobile friendly. We are currently in Version 1.3 post Alpha deployment and have received numerous feedback from our Alpha users to follow upon. 
        <br/>
        <br/>
        We have approached the production and deployment of FlixAlways with such thorough testing, verification and implementation testing that we have managed to minimize bugs and maximize positive user interaction.
        However, with many more versions to come, we hope to focus on refactoring our backend code into a cleaner and more efficient self-seeding API that will fetch our current vendor API to then seed our database with the required information. At this time, we have managed to implement this behavior and have achieved over 20,000 rows of data being implemented in real time. However, we have come across minor issues with utilizing simultaneous deployment and updating our live database which is hosted on heroku as a postgresql instance.
        </p>

  </Container>




      {/* SECTION: footer */}
        <Container text>

        <br/>
        <br/>
    
    <Header className="linkEndTitle" as='h2' >View This Project</Header>
        <div className="blockLink">
        <a href="https://www.flixalways.com" target="_blank" rel="noreferrer">
        <Icon name="external alternate" size="big" className="contentLinks"/>
        </a>

       
        <a href="https://github.com/DoctorZulu/Stream-Helper" target="_blank" rel="noreferrer">
        <Icon name="github" size="big" className="contentLinks"/>
        </a>
        
        
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
       


        </Container>

       
      
       

        
        </>
    )
}

export default FlixAlways