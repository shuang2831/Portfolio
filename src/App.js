import React, { Component } from 'react';
import './App.css';
import LandingDiv from './components/LandingDiv/LandingDiv';
import ProjectCard from './components/ProjectCard/ProjectCard';
import AboutBlock from './components/AboutBlock/AboutBlock';
import ContactBlock from './components/ContactBlock/ContactBlock';
import Flexbox from 'flexbox-react';
import scrollToComponent from 'react-scroll-to-component';

import { connect } from 'react-redux'
import { actionCreators } from './reducers/mainReducers'

const mapStateToProps = (state) => ({
  isMobile: state.isMobile,
})

class App extends Component {

  constructor(props) {
    super(props);
   
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }


  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    document.removeEventListener('scroll', this.trackScrolling)
  }

  trackScrolling = () => {
    
  };

  
  handleWindowSizeChange = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.resizeWindow(window.screen.width))
  };

  handleScrollToElement(blk) {
    scrollToComponent(blk, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }


  render() {
    return (
      <Flexbox flexDirection="column" class="App" justifyContent="space-between">
        {/* <Flexbox style={{position: 'fixed', color: 'black', zIndex: '1', right: '5em', top: '20em'}}>
            Hello
        </Flexbox> */}
        <div className="fixed-bg" />
        <LandingDiv 
          isMobile={this.props.isMobile}
          projects={() => this.handleScrollToElement(this.projects)}
          about={() => this.handleScrollToElement(this.about)}
          contact={() => this.handleScrollToElement(this.contact)} />
        <Flexbox className="projects" ref={(section) => { this.projects = section; }}> Projects </Flexbox>
        <ProjectCard 
          title="Solstice PingPong+" 
          mainColor="#4250ae"
          exSiteLink="https://www.solstice.com/fwd-2016"
          exSite="Solstice"
          description={
            `PingPong+ is an augmented reality connected-room Ping Pong experience by Solstice which I had the opportunity to work on while an
            employee there. While the company has worked in all different kinds of tech, PingPong+ is the product of an exploration towards a connected experience
            utilizing all different kinds of technologies like the Amazon echo, Apple TV, 
            Microsoft Kinect, and more. By hooking all of this tech together PingPong+ is able to elevate a typical game of ping pong to something more. Its Amazon Echo acts as a Convo UX hub for starting and stopping games. Its
            Apple TV displays scores and player names to an audience watching, its Microsoft Kinect tracks the ping pong ball and draws animations onto
            the table using a short throw projector, the Echo works as a central Convo UX hub to start games, and more. PingPong+ was showcased 
            at Solstice's FWD event and garnered attention from audience members and participants alike. Currently I am keeping the tech up to date and further exploring tis possiblities.
            Check out the video to see it in action! `
          }
          techArray={["Amazon Echo", "Apple TV (Swift+TVML)", "AWS", "Microsoft Kinect (C++)",  "Javascript", ]} 
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/4eV6H9gn70c?start=108"
          bottomLeftImage={[require('./images/pingpong.jpg'), require('./images/pingpong2.jpg'), require('./images/pingpong3.jpg')]}
        />

        <ProjectCard 
          title="PVMNT"
          mainColor="#3377ff"
          gitLink="https://github.com/shuang2831/blue_pvmnt2.0"
          description={
            `PVMNT is an Ionic 2 based event finder app that allows students on campus to easily sort and discover new and exciting campus events. PVMNT utilizes
            a customized algorithm and graph database in order to expose students to events that are both relevant to their interests as well as rising in popularity
            and buzz. That way, students can even see how popular an event is from the get to to guage whether they want to attend. Additionally events can be sorted
            by subscriptions, student groups, uprising, and new. With PVMNT, finding an event to attend has never been so easy! I developed PVMNT along with four other
            students over a five week interval. Check the Github for the names of everyone who worked on this project.`
          }
          techArray={["Angular 2", "Cordova Ionic 2", "Firebase", "Neo4J Graph DB", "Scss", "UI/UX"]} 
          isMobile={this.props.isMobile}
          phoneScreen={[require('./images/pvmnt2.png'), require('./images/home.PNG'), require('./images/subscriptions.PNG'), require('./images/upcoming.PNG')]}
        />
        <ProjectCard 
          title="Grudge Trudgers"
          mainColor="#62CB80"
          gitLink="https://github.com/shuang2831/Grudge-Trudgers"
          reportLink={require('./reports/GrudgeTrudgersReport.pdf')}
          demoLink="/grudge-trudgers-web/index.html"
          description={
            `Grudge Trudgers is a top down 2.5D four-player party game that takes advantage of human beings’ ability to switch between cooperating and 
            competing with each other in an instant to create an experience where the four players will have to navigate through a variety of different 
            stages/minigames while attempting to individually collect the most gold possible. Among a total of 15, Grudge Trudgers consists of a variety
            of unique minigames with the stipulation that every game must give players the flexibility to either cooperate or compete. Within Grudge Trudgers,  
            players are treasure hunting pigs trying to escape a dungeon filled with perilous traps. Being the greedy pigs they are, players are encouraged 
            to both work together or sabotage their fellow players in order to earn gold to win the game. Developed over the course of 10 weeks from a team of 3, 
            Grudge Trudgers was demoed to students at Northwestern University and recieved high praise and traffic throughtout
            the day. Check out the report we put together for more information, or try out the demo!
            `
          }
          techArray={["Blender", "C#", "Game Design", "Gimp", "Unity",]} 
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/TvMB7MiQny0"
          bottomLeftImage={[require('./images/s1.png'), require('./images/s2.png'), require('./images/s3.png'), require('./images/s4.png'),
           require('./images/s5.png'), require('./images/s6.png'), require('./images/s7.png'), require('./images/s8.png'), require('./images/s9.png'), require('./images/s10.png'),
           require('./images/s11.png'), require('./images/s12.png'), ]}
          />
        <ProjectCard 
          title="Counsel Dynamic Mapping"
          mainColor="#6287CB"
          gitLink="https://github.com/shuang2831/blue-dynamic-mapping"
          exSiteLink="http://www.relationshipstore.org/what-is-dynamic-mapping/"
          exSite="Tim's Site"
          description={
            `Imagined by local Licensed Clinical Professional Counselor Tim O'Donahue, I and four of my peers over the course of 5 weeks developed an app that would streamline Tim's counseling 
            concepts and methods of what he calls Dynamic Mapping. With dynamic mapping, couples can create a map of their relationship dynamic, and this map can be used to help identify, heal 
            and improve problem areas of their relationship. The Dynamic Mapping app will allow each individual in the relationship to go through a series of specific questions
            and choose from a list of emotional responses and goals. These results would then be summarized and said individual would be reminded of their partner's 
            love language. When paired with sessions with Tim, couples can expect to amend their differences and find love for each other again. For more information,
            check out Tim's blurb at RelationshipStore.org.`
          }
          techArray={["Angular 2", "Cordova Ionic 2", "Firebase", "Scss", "UI/UX"]} 
          isMobile={this.props.isMobile}
          phoneScreen={[require('./images/dmHome.PNG'), require('./images/dmHome2.PNG'), require('./images/dmJournal.PNG'), require('./images/dmDisrespected.PNG'), require('./images/dmLove.PNG'), require('./images/dmRepair.PNG'), require('./images/dmSummary.PNG')]}
        />
        <ProjectCard 
          title="InfiniBlob"
          mainColor="#4BC34D"
          gitLink="https://github.com/shuang2831/InfiniBlob"
          demoLink="https://shuang2831.github.io/InfiniBlob-Demo/"
          description={
            `InfiniBlob is a top down 2.5D survival game where the player plays as Lu, InfiniBlob's cube headed protagonist, as he slashes and dashes through endless onslaught
            of blobs that rain from the sky. It starts of slow, but quickly ramps up until blobs take up the entire screen. InfiniBlob gives players a couple simple ways to attack
            consisting of a sword and a crossbow, both of which can be upgraded with power ups along the way. The game boasts five different forms of blobs such as red ones
            that attack quick, yellow ones that grow steadily in size, and more. The player increases his or her score by defeating blobs and collecting gold while the sun sets and rises
            each day. InfiniBlob was developed as my first game. With the exception of the trees, every asset, line of code, texture, and mechanic was designed and implemented by me
            over the course of five weeks. While it lacks a little polish, I'm leaving as is as a record of my very first production achievement. Check out the demo if you'd like
            to try it yourself!
            `
          }
          techArray={["Blender", "C#", "Game Design", "Gimp", "Unity",]} 
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/DOgXx6upqUs"
          bottomLeftImage={[require('./images/l11.png'), require('./images/l11.png'), require('./images/l2.png'), require('./images/l3.png'), require('./images/l4.png'),
           require('./images/l5.png'), require('./images/l6.png'), require('./images/l7.png'), require('./images/l8.png'), require('./images/l9.png'), require('./images/l10.png'),
          require('./images/l12.png'), ]}
          />
        <ProjectCard 
          title="Tangible Chinese Ink Rubbing Exhibit"
          mainColor="#45173F"
          reportLink={require('./reports/TIDAL_Final.pdf')}
          exSiteLink="https://www.fieldmuseum.org/node/4986"
          exSite="Field Museum"
          description={
            `For over fifteen hundred years Chinese Ink Rubbings have played a vital role in the preservation and 
           distribution of
           Chinese texts, poems, and even illustrations. The Field
           Museum of Chicago’s China Hall displays a book of ink
           rubbings taken from inscriptions on Mount Yi about the
           Qin Emperor’s reign, but it is behind glass and limited
           in its interaction with visitors. We proposed a tangible
           extension to the exhibit using a leap motion controller and mock tools that allows visitors to simulate the
           act of ink rubbing to encourage visitors to better appreciate
           this valuable technique. With the use of an artificial tablet
           of ancient Chinese inscriptions and mock tools, visitors can
           perform the ink rubbing technique in steps, gradually
           revealing the translation of ancient Chinese characters, and
           then continue to engage in the process as a reproduction
           method by sharing their work with others. This prototype was created by a team of three students as part of Northwestern's TIDAL lab.
           Check out the research report for more details.
            `
          }
          techArray={["UX Research", "Leap Motion", "Javascript", "Css", "HTML", "Tangibles"]} 
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/LY6hjj1KsMU"
          bottomLeftImage={[require('./images/inkrubbing.jpeg'), require('./images/inkrubbing2.PNG'), require('./images/inkrubbing3.PNG'), require('./images/inkrubbing4.PNG')]}
        />
         <ProjectCard 
          title="My Portfolio"
          mainColor="rgb(245, 76, 76)"
          description={
            `This site right here! This portfolio was created using React JS as a side project in order for me to practice some more web design. 
            While React JS is a little heavier than pure javascript, it allows this site to do a few cool things in response to user states. There are a few little
            easter eggs scattered about so make sure to keep your eyes peeled for those! Currently the tools I'm using 
            here are being mapped out to a package that can be leveraged by others to allow them to make their own portolios without having to sacrifice their unique edge
            that comes with putting their work online for the world to see. 
            `
          }
          techArray={["React JS", "HTML", "Javascript", "Css"]} 
          isMobile={this.props.isMobile}
          bottomLeftImage={[require('./images/landingPage.PNG'), ]}
        />
        <AboutBlock isMobile={this.props.isMobile} ref={(section) => { this.about = section; }}/>
        <ContactBlock ref={(section) => { this.contact = section; }}/>
      </Flexbox>
    );
  }
}

export default connect(mapStateToProps) (App)
