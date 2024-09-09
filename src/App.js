import React, { Component } from "react";
import "./App.css";
import LandingDiv from "./components/LandingDiv/LandingDiv";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import AboutBlock from "./components/AboutBlock/AboutBlock";
import ContactBlock from "./components/ContactBlock/ContactBlock";
import Flexbox from "flexbox-react";
import scrollToComponent from "react-scroll-to-component";

import { connect } from "react-redux";
import { actionCreators } from "./reducers/mainReducers";

const mapStateToProps = state => ({
  isMobile: state.isMobile
});

class App extends Component {
  constructor(props) {
    super(props);
    this.projectList = [
      {
        name: "TrueNorth",
        reference: this.truenorth
      },
      {
        name: "Careport Health",
        reference: this.careport
      },
      {
        name: "The VNBA",
        reference: this.vnba
      },
      {
        name: "Follain.com",
        reference: this.follain
      },
      {
        name: "Chatbot",
        reference: this.refs
      },
      {
        name: "FIDO",
        reference: this.fido
      },
      {
        name: "PingPong+",
        reference: this.pingpong
      },
      {
        name: "PVMNT",
        reference: this.grudge
      },
      {
        name: "Grudge",
        reference: this.pvmt
      },
      {
        name: "Counsel",
        reference: this.ink
      },
      {
        name: "InfiniBlob",
        reference: this.grudge
      },
      {
        name: "Ink Rubbing",
        reference: this.infiniblob
      },
      {
        name: "Portfolio",
        reference: this.infiniblob
      }
    ];

    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {};

  handleWindowSizeChange = () => {
    const { dispatch } = this.props;
    dispatch(actionCreators.resizeWindow(window.screen.width));
  };

  handleScrollToElement(blk) {
    scrollToComponent(blk, {
      offset: 0,
      align: "top",
      duration: 500,
      ease: "inCirc"
    });
  }

  handleScrollToProject(blk) {
    scrollToComponent(blk, {
      offset: -50,
      align: "top",
      duration: 500,
      ease: "inCirc"
    });
  }

  render() {
    const updatedNums = this.projectList.map(project => {
      return (
        <li style={{ zIndex: "25" }}>
          <button
            className="nav-link"
            onClick={() => this.handleScrollToProject(project.reference)}
          >
            {project.name}
          </button>
        </li>
      );
    });
    return (
      <Flexbox
        flexDirection="column"
        class="App"
        justifyContent="space-between"
      >
        {/* <Flexbox style={{position: 'fixed', color: 'black', zIndex: '1', right: '5em', top: '20em'}}>
            Hello
        </Flexbox> */}
        <div className="fixed-bg" />
        <LandingDiv
          isMobile={this.props.isMobile}
          projects={() => this.handleScrollToElement(this.projects)}
          about={() => this.handleScrollToElement(this.about)}
          contact={() => this.handleScrollToElement(this.contact)}
          ref={section => {
            this.top = section;
          }}
        />
        <Flexbox
          style={{
            position: this.props.isMobile ? "relative" : "fixed",
            top: this.props.isMobile ? "10px" : "35vh",
            right: this.props.isMobile ? "" : "5%",
            zIndex: "26",
            justifyContent: this.props.isMobile ? "center" : "flex-start",
            alignItems: this.props.isMobile ? "center" : "flex-start"
          }}
        >
          <ul
            style={{
              zIndex: "200",
              listStyle: "none",
              textAlign: this.props.isMobile ? "center" : "",
              padding: this.props.isMobile ? "0" : ""
            }}
          >
            <li>
              <button
                className="nav-link"
                onClick={() => this.handleScrollToProject(this.top)}
              >
                Top
              </button>
            </li>
            {updatedNums}
            <li>
              <button
                className="nav-link"
                onClick={() => this.handleScrollToProject(this.about)}
              >
                About
              </button>
            </li>
          </ul>
        </Flexbox>
        <Flexbox
          className="projects"
          ref={section => {
            this.projects = section;
          }}
        >
          {" "}
          Portfolio{" "}
        </Flexbox>
        <ProjectCard
          title="TrueNorth"
          mainColor="#131C7A"
          exSite="TrueNorth"
          exSiteLink="https://www.truenorth.com/"
          description={`Most recently I joined TrueNorth as their first hired mobile developer and worked on getting the brand new unreleased
          mobile app to 1.0 status. After about a year of development, we managed to release TrueNorth to our users and saw such immediate benefits
          that the mobile app shifted from being a side product to our main product all together. I watched as the mobile team, which at one point
          had gone down to just me, grow to 5+ developers all working on a React Native app that I had ownership of. Check out the app to learn more.`}
          techArray={[
            "Android",
            "iOS",
            "Javascript",
            "Typescript",
            "React Native",
            "ReactJS",
            "Rest API",
            "GraphQL"
          ]}
          isMobile={this.props.isMobile}
          phoneScreen={[
            require("./images/unnamed.png"),
            require("./images/unnamed2.png"),
            require("./images/unnamed3.png"),
            require("./images/unnamed4.png"),
            require("./images/unnamed5.png")
          ]}
          ref={section => {
            this.projectList[0].reference = section;
          }}
        />
        <ProjectCard
          title="Careport Health"
          mainColor="#28939D"
          exSite="Careport Health"
          exSiteLink="https://careporthealth.com/"
          description={`I spent a few years working on at a company called Careport Health where I came in as a Ruby on Rails developer
          for their Guide product. Gradually I took on more responsibilities and co-created a front end task force that eventually became
          its own team focused on building out and finding consistency between Careport's four main products (Guide, Transition, Connect, Insight).
          As a result of the team's work, Careport's products were brought into the modern world of user experience and execution. Additionally I took on a devops
          expert role in the company and even helped lead efforts in deployments and simplifying development pipelines. All of these new responsiblities
          led to my promotion to a Senior Software Engineer. Check out the Careport list
          of products for more information.`}
          techArray={[
            "AWS",
            "Javascript",
            "PostgreSQL",
            "ReactJS",
            "Ruby on Rails",
            "Css/Scss"
          ]}
          isMobile={this.props.isMobile}
          bottomLeftImage={[require("./images/guide.png")]}
          ref={section => {
            this.projectList[1].reference = section;
          }}
        />
        <ProjectCard
          title="The VNBA"
          mainColor="#001529"
          exSite="The VNBA"
          exSiteLink="https://thevnba.com/"
          description={`As a side project, I created a website for a fantasy basketball league some friends and I had running in NBA 2k20. This
          quickly ballooned in scope as within a year it went from a simple scheduling site to full interaction and compatibility with the game itself.
          By changing values in a google sheet through the site and using a custom bash script to edit memory values, I was able to update rosters and
          player data within seconds after a member of our league submitted a change online. We even had a discord bot that was connected to the site and
          would inform others of said changes. While we are on hiatus right now, you can still check out the site.`}
          techArray={["VueJS", "MemorryJS", "Bash", "DiscordJS", "NodeJS"]}
          isMobile={this.props.isMobile}
          bottomLeftImage={[
            require("./images/vnba1.png"),
            require("./images/vnba2.png"),
            require("./images/vnba3.png")
          ]}
          ref={section => {
            this.projectList[2].reference = section;
          }}
        />
        <ProjectCard
          title="Follain.com"
          mainColor="#9eb28f"
          exSite="Follain.com"
          exSiteLink="https://follain.com"
          description={`I worked at a clean beauty startup called Follain and was one of its two engineers
            building out and upkeeping its full stack e-commerce website. With a complex and diverse tech stack attached, our team
            moved quickly in implementing new features such as an online product matchmaker, CMS managed homepages, architectural improvements,
            and more. During the time I was there, we saw the web performance jump to modern standards and reach a level of stability
            previously unheard of at the company. Throughout the project our velocity never wavered and every change made to the site
            brought in more value to Follain's online experience. Please check it out!`}
          techArray={[
            "AWS",
            "Google Analytics",
            "GraphQL",
            "Heroku",
            "PostgreSQL",
            "ReactJS",
            "Ruby on Rails",
            "Solidus/Spree"
          ]}
          isMobile={this.props.isMobile}
          bottomLeftImage={[require("./images/follain.png")]}
          ref={section => {
            this.projectList[3].reference = section;
          }}
        />
        <ProjectCard
          title="FinTech Banking Chatbot"
          mainColor="#ff8000"
          exSite="Johnny's Designs"
          exSiteLink="http://johnnyhuang.design/fintech.html"
          description={`At a previous job, my team, a deisginer, another developer, and me, were tasked by a client
            in the banking industry with 
            implementing a Banking Chatbot POC that could perform various financial and banking duties such
            as transfering money between internal and external accounts, and freezing potentially fraudulant accounts. Using
            React Native, the team managed to successfully put together a fully fleshed out Chatbot experience with the help
            of DialogFlow, allowing users to not only use messages to perform bank transfers, but also have any required 
            info automatically requested by the app through Random Access Slot Filling. Our client was ecstatic with the results,
            and a full blown production version of the app was subsequently approved for development. Check out my Designer Johnny's portfolio 
            for some additional information on what went into this.`}
          techArray={[
            "Android",
            "iOS",
            "DialogFlow",
            "Javascript",
            "React Native"
          ]}
          isMobile={this.props.isMobile}
          phoneScreen={[
            require("./images/fintech11.png"),
            require("./images/fintech12.png"),
            require("./images/fintech13.png")
          ]}
          ref={section => {
            this.projectList[4].reference = section;
          }}
        />
        <ProjectCard
          title="FinTech FIDO Security Upgrade"
          mainColor="#00cc7a"
          exSite="FIDO Alliance"
          exSiteLink="https://fidoalliance.org/"
          description={`With security becoming more and more of a concern in the banking and credit card industry, a client at a previous
          job of mine tasked our team with leading a new FIDO ready login flow for their banking and credit card mobile application. As such, the team
          implemented a new biometric flow for both TouchID and FaceID on iOS devices that align with the FIDO protocols as specified by the FIDO
          alliance. These new security specifications prevent the potential of sensitive user information from being obtained by the wrong people through
          public key cryptography, and even guard against some of the most malicious forms of attack such as phishing and database breaches. Utilizing
          some native iOS SDKs, FIDO was integrated onto the client's brand new React Native application succesfully and build out not just for
          TouchID and FaceID, but also some alternative authentication methods such as Non-FaceID Facial Recognition and Voice Recognition. Although I cannot
          show the app itself, the video to the left is the FIDO Alliance's own explaination of what FIDO is.`}
          techArray={["FIDO", "iOS", "Javascript", "Swift", "React Native"]}
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/5ZIQabDrnT0"
          ref={section => {
            this.projectList[5].reference = section;
          }}
        />
        <ProjectCard
          title="Solstice PingPong+"
          mainColor="#4250ae"
          exSiteLink="https://www.solstice.com/fwd-2016"
          exSite="Solstice"
          description={`PingPong+ is an augmented reality connected-room Ping Pong experience by Solstice which I had the opportunity to work on while an
            employee there. While the company has worked in all different kinds of tech, PingPong+ is the product of an exploration towards a connected experience
            utilizing all different kinds of technologies like the Amazon echo, Apple TV, 
            Microsoft Kinect, and more. By hooking all of this tech together PingPong+ is able to elevate a typical game of ping pong to something more. Its Amazon Echo acts as a Convo UX hub for starting and stopping games. Its
            Apple TV displays scores and player names to an audience watching, its Microsoft Kinect tracks the ping pong ball and draws animations onto
            the table using a short throw projector, the Echo works as a central Convo UX hub to start games, and more. PingPong+ was showcased 
            at Solstice's FWD event and garnered attention from audience members and participants alike. Currently I am keeping the tech up to date and further exploring tis possiblities.
            Check out the video to see it in action! `}
          techArray={[
            "Amazon Echo",
            "Apple TV (Swift+TVML)",
            "AWS",
            "Microsoft Kinect (C++)",
            "Javascript"
          ]}
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/4eV6H9gn70c?start=108"
          bottomLeftImage={[
            require("./images/pingpong.jpg"),
            require("./images/pingpong2.jpg"),
            require("./images/pingpong3.jpg")
          ]}
          ref={section => {
            this.projectList[6].reference = section;
          }}
        />
        <ProjectCard
          title="PVMNT"
          mainColor="#3377ff"
          gitLink="https://github.com/shuang2831/blue_pvmnt2.0"
          description={`PVMNT is an Ionic 2 based event finder app that allows students on campus to easily sort and discover new and exciting campus events. PVMNT utilizes
            a customized algorithm and graph database in order to expose students to events that are both relevant to their interests as well as rising in popularity
            and buzz. That way, students can even see how popular an event is from the get to to guage whether they want to attend. Additionally events can be sorted
            by subscriptions, student groups, uprising, and new. With PVMNT, finding an event to attend has never been so easy! I developed PVMNT along with four other
            students over a five week interval. Check the Github for the names of everyone who worked on this project.`}
          techArray={[
            "Angular 2",
            "Cordova Ionic 2",
            "Firebase",
            "Neo4J Graph DB",
            "Scss",
            "UI/UX"
          ]}
          isMobile={this.props.isMobile}
          phoneScreen={[
            require("./images/pvmnt2.png"),
            require("./images/home.png"),
            require("./images/subscriptions.PNG"),
            require("./images/upcoming.PNG")
          ]}
          ref={section => {
            this.projectList[7].reference = section;
          }}
        />
        <ProjectCard
          title="Grudge Trudgers"
          mainColor="#62CB80"
          gitLink="https://github.com/shuang2831/Grudge-Trudgers"
          reportLink={require("./reports/GrudgeTrudgersReport.pdf")}
          demoLink="/grudge-trudgers-web/index.html"
          description={`Grudge Trudgers is a top down 2.5D four-player party game that takes advantage of human beings’ ability to switch between cooperating and 
            competing with each other in an instant to create an experience where the four players will have to navigate through a variety of different 
            stages/minigames while attempting to individually collect the most gold possible. Among a total of 15, Grudge Trudgers consists of a variety
            of unique minigames with the stipulation that every game must give players the flexibility to either cooperate or compete. Within Grudge Trudgers,  
            players are treasure hunting pigs trying to escape a dungeon filled with perilous traps. Being the greedy pigs they are, players are encouraged 
            to both work together or sabotage their fellow players in order to earn gold to win the game. Developed over the course of 10 weeks from a team of 3, 
            Grudge Trudgers was demoed to students at Northwestern University and recieved high praise and traffic throughtout
            the day. Check out the report we put together for more information, or try out the demo!
            `}
          techArray={["Blender", "C#", "Game Design", "Gimp", "Unity"]}
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/TvMB7MiQny0"
          bottomLeftImage={[
            require("./images/s1.png"),
            require("./images/s2.png"),
            require("./images/s3.png"),
            require("./images/s4.png"),
            require("./images/s5.png"),
            require("./images/s6.png"),
            require("./images/s7.png"),
            require("./images/s8.png"),
            require("./images/s9.png"),
            require("./images/s10.png"),
            require("./images/s11.png"),
            require("./images/s12.png")
          ]}
          ref={section => {
            this.projectList[8].reference = section;
          }}
        />
        <ProjectCard
          title="Counsel Dynamic Mapping"
          mainColor="#6287CB"
          gitLink="https://github.com/shuang2831/blue-dynamic-mapping"
          exSiteLink="http://www.relationshipstore.org/what-is-dynamic-mapping/"
          exSite="Tim's Site"
          description={`Imagined by local Licensed Clinical Professional Counselor Tim O'Donahue, I and four of my peers over the course of 5 weeks developed an app that would streamline Tim's counseling 
            concepts and methods of what he calls Dynamic Mapping. With dynamic mapping, couples can create a map of their relationship dynamic, and this map can be used to help identify, heal 
            and improve problem areas of their relationship. The Dynamic Mapping app will allow each individual in the relationship to go through a series of specific questions
            and choose from a list of emotional responses and goals. These results would then be summarized and said individual would be reminded of their partner's 
            love language. When paired with sessions with Tim, couples can expect to amend their differences and find love for each other again. For more information,
            check out Tim's blurb at RelationshipStore.org.`}
          techArray={[
            "Angular 2",
            "Cordova Ionic 2",
            "Firebase",
            "Scss",
            "UI/UX"
          ]}
          isMobile={this.props.isMobile}
          phoneScreen={[
            require("./images/dmHome.PNG"),
            require("./images/dmHome2.PNG"),
            require("./images/dmJournal.PNG"),
            require("./images/dmDisrespected.PNG"),
            require("./images/dmLove.PNG"),
            require("./images/dmRepair.PNG"),
            require("./images/dmSummary.PNG")
          ]}
          ref={section => {
            this.projectList[9].reference = section;
          }}
        />
        <ProjectCard
          title="InfiniBlob"
          mainColor="#4BC34D"
          gitLink="https://github.com/shuang2831/InfiniBlob"
          demoLink="https://shuang2831.github.io/InfiniBlob-Demo/"
          description={`InfiniBlob is a top down 2.5D survival game where the player plays as Lu, InfiniBlob's cube headed protagonist, as he slashes and dashes through endless onslaught
            of blobs that rain from the sky. It starts of slow, but quickly ramps up until blobs take up the entire screen. InfiniBlob gives players a couple simple ways to attack
            consisting of a sword and a crossbow, both of which can be upgraded with power ups along the way. The game boasts five different forms of blobs such as red ones
            that attack quick, yellow ones that grow steadily in size, and more. The player increases his or her score by defeating blobs and collecting gold while the sun sets and rises
            each day. InfiniBlob was developed as my first game. With the exception of the trees, every asset, line of code, texture, and mechanic was designed and implemented by me
            over the course of five weeks. While it lacks a little polish, I'm leaving as is as a record of my very first production achievement. Check out the demo if you'd like
            to try it yourself!
            `}
          techArray={["Blender", "C#", "Game Design", "Gimp", "Unity"]}
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/DOgXx6upqUs"
          bottomLeftImage={[
            require("./images/l11.png"),
            require("./images/l11.png"),
            require("./images/l2.png"),
            require("./images/l3.png"),
            require("./images/l4.png"),
            require("./images/l5.png"),
            require("./images/l6.png"),
            require("./images/l7.png"),
            require("./images/l8.png"),
            require("./images/l9.png"),
            require("./images/l10.png"),
            require("./images/l12.png")
          ]}
          ref={section => {
            this.projectList[10].reference = section;
          }}
        />
        <ProjectCard
          title="Tangible Chinese Ink Rubbing Exhibit"
          mainColor="#45173F"
          reportLink={require("./reports/TIDAL_Final.pdf")}
          exSiteLink="https://www.fieldmuseum.org/node/4986"
          exSite="Field Museum"
          description={`For over fifteen hundred years Chinese Ink Rubbings have played a vital role in the preservation and 
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
            `}
          techArray={[
            "UX Research",
            "Leap Motion",
            "Javascript",
            "Css",
            "HTML",
            "Tangibles"
          ]}
          isMobile={this.props.isMobile}
          topLeftVideo="https://www.youtube.com/embed/LY6hjj1KsMU"
          bottomLeftImage={[
            require("./images/inkrubbing.jpeg"),
            require("./images/inkrubbing2.PNG"),
            require("./images/inkrubbing3.PNG"),
            require("./images/inkrubbing4.PNG")
          ]}
          ref={section => {
            this.projectList[11].reference = section;
          }}
        />
        <AboutBlock
          isMobile={this.props.isMobile}
          ref={section => {
            this.about = section;
          }}
        />
        <ContactBlock
          ref={section => {
            this.contact = section;
          }}
        />
      </Flexbox>
    );
  }
}

export default connect(mapStateToProps)(App);
