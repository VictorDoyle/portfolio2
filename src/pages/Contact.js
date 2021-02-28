import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css'
import { Container, Header, Tab, Grid, Icon} from 'semantic-ui-react'
import { useDarkBody } from './hooks'

function Contact () {
    const [innerText, setInnerText] = useState("victor.")
    const [innerEmail, setInnerEmail ] = useState("Email Me Here")
    useDarkBody()

    /* SECTION: resume quick preview */
    const [activeItem, setActiveItem] = useState("home")
    const handleItemClick = (e, { name }) => setActiveItem( name )

    /* panel content */

    const panes = [
      { menuItem : {content: 'General Assembly'}, render: () => <Tab.Pane className="tabContent">
        
        <h2> Software Engineering Fellow </h2>
        <ul>
          <li>Three-month, Full-Time, remote software engineering immersive program working in Javascript, Python, HTML &amp; CSS. </li>
          <li>Learning and Building with a variety of different Languages and Frameworks such as JavaScript, TypeScript, Python, React and Prisma.</li>
          <li>Delivering quality code, building creative applications and websites as well as thoroughly debugging and testing applications for scalability.</li>
        </ul>
        
        </Tab.Pane> },


      { menuItem: 'Array Property Group', render: () => <Tab.Pane className="tabContent">
        
        <h2> Head of Search Engine Optimization </h2>
        <ul>
          <li> Built an efficient website from the ground up and coordinated with a team of Designers to implement a visually impressive product using technologies such as Wordpress, Javascript, Jquery &amp; CSS. </li>
          <li> Consistently delivered detailed briefings regarding Google Console, Adsense, Ahrefs and SERPs and built a network of contacts for backlink and guest posting.</li>
          <li> Thorough Search Engine Keyword Optimization with tools such as SEMRush, Ahrefs, Google Ads, Google Trends and an in-depth socioeconomic analysis of the NYC Real Estate Market.</li>
        </ul>
        
        </Tab.Pane> },


      { menuItem: 'E-Commerce', render: () => <Tab.Pane className="tabContent">
        
        <h2> Multiple Online Stores </h2>
        <ul>
          <li> Built multiple efficient websites with the Shopify Platform and customized themes with the Liquid language. Implemented multiple plugins that helped boost ROAS, Conversions and Overall User Interaction. </li>
          <li> Utilized the power of Color Theory and UX/UI Design to boost sales and promote products. Additionally utilized tools such as Adobe Photoshop, Logic Pro X and the Adobe Suite to handcraft advertisements. </li>
          <li> Built over a hundred Ad Campaigns on the Facebook Business Platform, using Technologies such as Google Trends and Instagram to correctly predict Product Consumption Patterns.</li>
        </ul>
        
        </Tab.Pane> },

      { menuItem: 'Innovative Designs', render: () => <Tab.Pane className="tabContent">
              
              <h2> Innovative Research &amp; Tech Products </h2>
        <ul>
          <li> Co-Founded and built an MVP Stage iOS Application to deliver to Investors in under 30 days. The application was a modern solution to the modern problem of dormant car use and how users could utilize their cars to make additional income all the while promoting a lesser carbon footprint.    </li>
          <li> Founded a Publishing House and Journal in London to promote innovative thought, research and to help promote individuals who may not have had the means to make their research known. Designed a full CRUD functionality website with a unique visual approach to Academic Journal submission.</li>
          <li> Built multiple websites with HTML, CSS, JQuery and React in order to bring a re-imagined approach to utilizing the power of Code to synthesize the power of Visuals, Music and Entertainment. </li>
        </ul>

      </Tab.Pane> },


    ]

    /* END OF RESUME PREVIEW */



    return (
        <> 
      
        <Link to={'/'} onMouseEnter={() => setInnerText("victor.doyle")}
          onMouseOut={() => setInnerText("victor.")}>
        <h4 className="menuHeader"> {innerText} </h4> {/* on hover change to victor.works */}
        </Link>
       <div className="aboutHero">
       

        <h1 className="aboutHeroHeader">Get In Touch!</h1>


       </div>

       {/* Bio Image banner here centered off right */}
      
       <Container text className="aboutContent">
       <Header className="aboutContentTitle" as='h2'>Contact</Header>
        <p className="aboutText">
        I'm seeking opportunities to work as a Software Engineer and build my experience further.
        I want to bring my high energy and passion of coding to the table as well as my diverse experience. <br/><br/>
        I'm looking forward to solving more problems and finding innovative ways to build bigger and better applications.
        </p>
        
        
        <p className="aboutText">
        If you haven't seen my Resume or LinkedIn yet, here's a brief recap about my qualifications: 
        </p>


            {/* SECTION: Tech Stack icons */}
            <Grid columns={2} relaxed='very' className="techIconGrid">
        <Grid.Column>
        <div className="techUsedOne"> 
            <Icon name="react " color="yellow" size="big"/>   React &amp; JavaScript
            <br/>
            <br/>
            <Icon name="html5" color="yellow" size="big"/>   HTML &amp; CSS
            <br/>
            <br/>
            <Icon name="python " color="yellow" size="big"/>   Python
            <br/>
            <br/>
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="techUsedTwo"> 
            <Icon name="node js  " color="yellow" size="big"/>   Node.js
            <br/>
            <br/>
            <Icon name="diamond " color="yellow" size="big"/>   Django
            <br/>
            <br/>
            <Icon name="database" color="yellow" size="big"/>   MongoDB &amp; Prisma 
        </div>
        </Grid.Column>
        </Grid>

          {/* SECTION: tech experience roundup */}

          <Container text className="aboutSection" id="about"> 
        <Header> <h2 className="aboutHeader"> Technological Experience Recap: </h2> <hr/></Header>
        <Tab className="menuItemPanel" menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>

       
       




        <p className="aboutText">
        If you're interested in getting in touch with me, below are some of my social links:
        </p>

        {/* social links */}
        <p className="aboutText">
        <a className="resumeLink" href="mailto:victor-doyle@outlook.com" onMouseEnter={() => setInnerEmail("victor-doyle@outlook.com")}
          onMouseOut={() => setInnerEmail("Email Me")}> {innerEmail} </a>
        </p>
        
        <p className="aboutText">
        <a className="resumeLink" href="https://www.linkedin.com/in/victor-doyle/" target="_blank"> LinkedIn</a>
        </p>

        <p className="aboutText">
        <a className="resumeLink" href="https://github.com/VictorDoyle" target="_blank"> GitHub</a>
        </p>

       
       
        </Container>
        


        </>
    )
}

export default Contact