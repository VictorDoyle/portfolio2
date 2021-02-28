import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css'
import { Container, Header } from 'semantic-ui-react'
import { useDarkBody } from './hooks'

function About () {
    const [innerText, setInnerText] = useState("victor.")
    useDarkBody()
    return (
        <> 
      
        <Link to={'/'} onMouseEnter={() => setInnerText("victor.doyle")}
          onMouseOut={() => setInnerText("victor.")}>
        <h4 className="menuHeader"> {innerText} </h4> {/* on hover change to victor.works */}
        </Link>
       <div className="aboutHero">
       

        <h1 className="aboutHeroHeader">I Build <br/> Web Applications</h1>


       </div>

       {/* Bio Image banner here centered off right */}
      
       <Container text className="aboutContent">
       <Header className="aboutContentTitle" as='h2'>About</Header>
        <p className="aboutTextHeader">
        Hi, I'm Victor. I'm a Software Engineer who is passionate about building things. 
        I'm known as a jack of all trades with experience in multiple branches of knowledge: Technology, Politics, Sociology, Economics, Literature, Philosophy and many more!
        </p>
        <p className="aboutText">
        I'm also a multi-disciplinary creator with over 5 years of experiences in an extensive range of disciplines from Photography and Founding Companies all the way to Music Production.
        </p>
        <p className="aboutText">
        My life's goal is to promote innovation and to create limitless applications that can truly push the boundaries of our modern conventions. I define myself by the work that I set out to do and the infinite amounts of energy that I have towards reaching that goal. My personality and mental character of wanting to constantly reach for the stars and beyond often reflects in my work and is something that will always be part of me. 
        </p>
        <p className="aboutText">
        I am passionate and eager about learning new things every day and applying them towards building applications. My high energy levels are often felt by my colleagues and they often utilize this as a team booster. I find inspiration in all things and always look for problems to fix, whether it is by deconstructing applications, breaking them or pushing them to their limits. I am never satisfied with simply finding ideas, but I find satisfaction in building them out to be what they should be and enjoying the final product.
        </p>
        <p className="aboutText">
        I’m a fast learner and an pick up new skills on the go as I truly am passionate about learning and giving my brain more to think about. You'll often see me reading Academic Papers in Science or Physics or Political Theory Books on my spare time while I take a break from coding. And of course, you'll never see me without a cup of coffee! 
        </p>
        <p className="aboutText">
        I currently work remotely but I am based in New York City and Los Angeles. I am always open to new opportunities and I am always looking to grow onwards. 
        </p>
        <p className="aboutText">
        If you're interested in working with me, below is my Resume with a basic reiteration of who I am:
        </p>
        

        <a className="resumeLink"> My Resume (pdf)</a>
        </Container>
        


        </>
    )
}

export default About