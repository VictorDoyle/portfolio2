import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css'
import { Container, Header } from 'semantic-ui-react'


function About () {
    const [innerText, setInnerText] = useState("victor.")

    return (
        <> 
        
        <Link to={'/'} onMouseEnter={() => setInnerText("victor.doyle")}
          onMouseOut={() => setInnerText("victor.")}>
        <h4 className="menuHeader"> {innerText} </h4> {/* on hover change to victor.works */}
        </Link>
       <div className="aboutHero">
       

        <h1 className="aboutHeroHeader">I design &amp; build <br/> digital products</h1>


       </div>
      
       <Container text className="aboutContent">
        <p className="aboutText">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p className="aboutText">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p className="aboutText">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>

        <p> My Resume Pdf</p>
        </Container>
        


        </>
    )
}

export default About