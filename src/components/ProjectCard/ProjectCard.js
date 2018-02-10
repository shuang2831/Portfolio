import React, { Component } from 'react';
import './ProjectCard.css';
import Flexbox from 'flexbox-react';
import Radium from 'radium';
import SlideShow from '../SlideShow/SlideShow';
import TechBoxes from '../TechBoxes/TechBoxes';

import Play from 'react-icons/lib/fa/play';
import GitCircle from 'react-icons/lib/fa/github';
import Pdf from 'react-icons/lib/fa/file-pdf-o';
import Site from 'react-icons/lib/fa/external-link';

class ProjectCard extends Component {
  render() {
    var leftToRight =  Radium.keyframes(
      { 
        '0%': { left:-1000,
          // transform: 'translate(0,0em)'
              },
        '100%': { left: window.outerWidth, 
          //transform: 'translate(0em, -20em)'
        },
      }, 'fade'
    );
    var styles = {
      elementToMoveRight: {
    
        animation: 'x 15s linear 0s infinite',
        animationName: leftToRight, 
        position: 'absolute',
        zIndex: '-1',
        width: '3em',
        height: '3em',
        top: '30em',
      },
      containers: {
        padding: '1em 1em',
        
      },
      card: {
        /* Add shadows to create the "card" effect */
        boxShadow: '0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1)',
        transition: '0.3s',
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,2989d8+50,7db9e8+100 */
        // background: 'linear-gradient(135deg, #87fcc4 0%,#ebe7b3 100%)',
        paddingBottom: '1em',
        paddingTop: '1em',
        backgroundColor: 'white',
        borderRadius: '5px', /* 5px rounded corners */
        flex: 1,
      
        marginLeft: 'auto',
        marginRight: 'auto',

        maxWidth: this.props.isMobile ? '95vh' : '1000px',
      
      },
      cardContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        marginBottom: '10em',
        zIndex: '2',
        maxWidth: this.props.isMobile ? '200vh' : '1000px',
        flex: '1',
        flexDirection: 'row',
      },
      titleText: {
        color: this.props.mainColor || 'black',
        fontFamily: 'Oswald, sans-serif',
        opacity: '0.8',
        fontSize: '4em',
        padding: '0.2em',

      },
      descriptionText: {
        color: '#525f7f',
        fontFamily: 'Lato, sans-serif',

        fontSize: '1.1em',
        lineHeight: '2em',
        padding: '1em',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      photoTopLeft: {
        position: 'relative',
        // top: '-6.5em',
        // left: '-4em',
        maxWidth: this.props.isMobile? '80vw' : '80vw',
        height: '17em',
        width: '25em',
        objectFit: 'cover',
      
        border: '5px solid rgb(255, 255, 255)',
        boxShadow: '0 10px 24px 0 rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        zIndex:'25',
        alignSelf: 'center',
      },
      photoBottomLeft: {
        position: 'relative',
        // bottom: '-6em',
        // left: '-4em',
        maxWidth: '80vw',
        width: '25em',
        height: '17em',
        objectFit: 'cover',
      
        border: '5px solid rgb(255, 255, 255)',
        boxShadow: '0 10px 24px 0 rgba(0, 0, 0, 0.3)',
        zIndex: '25',
      },
      techs: {
        marginLeft: this.props.isMobile? '0em' : '0em', 
        flexWrap: 'wrap',
        padding: '1em',
      },
      techBox: {
        borderRadius: '5px',
        marginTop: '0.2em',
        marginBottom: '0.2em',
        marginLeft: '0.4em',
        marginRight: '0.4em',
        padding: '0.5em',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.1em',
        backgroundColor: this.props.mainColor || 'black',
        color: 'white',
      },
      contentContainer: {
        padding: this.props.isMobile? '0em' : '1em',
        maxWidth: this.props.isMobile ? '95vh' : '1000px',
      },
      mediaContainer: {
        position: 'relative',
        left: '-5em',
        marginRight: this.props.isMobile ? '0em': '-4em',
        justifyContent: 'space-evenly',

      },
      phoneContainer: {
        width: '20em',
        height: '36em',
        position: 'relative',
        objectFit: 'cover',
        border: '5px solid rgb(50, 50, 50)',
        borderRadius: '5px',
        borderWidth: '35px 5px',
        boxShadow: '0 10px 24px 0 rgba(0, 0, 0, 0.3)',
        zIndex:'25',
        maxWidth: '80vw',
      },
      links: {
        borderRadius: '5px',
        fontSize: '3em',
        color: this.props.mainColor || 'black',
        marginRight: '0.2em',
        marginLeft: '0.2em',
        textAlign: 'center',
      },
      linkText: {
        color: this.props.mainColor || 'black',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'Oswald, sans-serif',
      },
      linkContainer: {
        marginTop: '1em',
        marginBottom: '1em',
        alignSelf: this.props.isMobile? 'center' : 'flex-end',
      },
      linksContainer: {
        border: '5px solid rgb(255, 255, 255)',
        boxShadow: '0 10px 24px 0 rgba(0, 0, 0, 0.3)',
        backgroundColor: 'rgb(255, 255, 255)',
        position: 'absolute',
        right: '-6em',
        top: '0em',
        width: '4em',
        borderRadius: '5px',
        justifyContent: 'space-evenly',
        alignSelf: "flex-end",
      },
      linksContainerMobile: {
        border: '5px solid rgb(255, 255, 255)',
        boxShadow: '0 10px 24px 0 rgba(0, 0, 0, 0.3)',
        backgroundColor: 'rgb(255, 255, 255)',
        position: 'relative',
        flexWrap: 'wrap',
        borderRadius: '5px',
        justifyContent: 'space-evenly',
        alignSelf: "center",
      },
      aLink: {
        textDecoration: 'none',
        ":hover": {
          opacity: '0.5',
        },
      }
      
    }
    return (
      <Flexbox className="cardContainer" flexDirection="column">
        <Flexbox style={styles.card} flexDirection="column">
          <Flexbox style={styles.containers} >
          { !this.props.isMobile &&  <Flexbox flexDirection="column" style={styles.mediaContainer}>
              { this.props.topLeftVideo && !this.props.phoneScreen &&
                <iframe src={this.props.topLeftVideo} frameBorder="0" allow="encrypted-media"  allowFullScreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen" 
                  msallowfullscreen="msallowfullscreen" 
                  oallowfullscreen="oallowfullscreen" 
                  webkitallowfullscreen="webkitallowfullscreen" style={styles.photoTopLeft}
                  title="video">
                </iframe>
              }
              { this.props.bottomLeftImage && !this.props.phoneScreen &&
                <SlideShow photos={this.props.bottomLeftImage} style={styles.photoBottomLeft} chosenColor={this.props.mainColor}/>
              }  
              { this.props.phoneScreen && <SlideShow photos={this.props.phoneScreen} style={styles.phoneContainer} chosenColor={this.props.mainColor} /> }
            </Flexbox> }
            <Flexbox flexDirection="column" style={styles.contentContainer}>
              <Flexbox style={styles.titleText}>
                  {this.props.title}
              </Flexbox>
              <Flexbox className="card-description" style={styles.descriptionText}>
                {this.props.description}
              </Flexbox>
              <TechBoxes techArray={this.props.techArray} style={styles.techs} boxStyle={styles.techBox}/>

              <Flexbox flexDirection={'column'}>
              { this.props.isMobile && this.props.topLeftVideo && !this.props.phoneScreen &&
                <iframe src={this.props.topLeftVideo} frameBorder="0" allow="encrypted-media"  allowFullScreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen" 
                  msallowfullscreen="msallowfullscreen" 
                  oallowfullscreen="oallowfullscreen" 
                  webkitallowfullscreen="webkitallowfullscreen" style={styles.photoTopLeft}
                  title="video">
                </iframe>
              }
               { this.props.isMobile && this.props.bottomLeftImage && !this.props.phoneScreen &&
                <SlideShow photos={this.props.bottomLeftImage} style={styles.photoBottomLeft} chosenColor={this.props.mainColor}/>
              }  
              {  this.props.isMobile && this.props.phoneScreen && <SlideShow photos={this.props.phoneScreen} style={styles.phoneContainer} chosenColor={this.props.mainColor}/> }
             </Flexbox>   
            </Flexbox>
            
          </Flexbox>
          { (this.props.demoLink || this.props.gitLink || this.props.reportLink || this.props.exSiteLink) 
              && <Flexbox flexDirection="column" style={this.props.isMobile? styles.linksContainerMobile : styles.linksContainer}>
              {this.props.gitLink && <a href={this.props.gitLink} target="_blank" style={styles.aLink} >
                 
                <Flexbox flexDirection="column"  style={styles.linkContainer}>
                  <GitCircle style={styles.links}/>
                  <Flexbox style={styles.linkText}>
                    Code
                </Flexbox>
                </Flexbox>
              </a> }
              { this.props.demoLink && <a href={this.props.demoLink} target="_blank" style={styles.aLink}>
              <Flexbox flexDirection="column"  style={styles.linkContainer}>
                <Play style={styles.links}/>
                <Flexbox style={styles.linkText}>
                  Demo
                </Flexbox>
              </Flexbox>
              </a> }
              { this.props.reportLink && <a href={this.props.reportLink} target="_blank" style={styles.aLink}>
              <Flexbox flexDirection="column" style={styles.linkContainer}>
                <Pdf style={styles.links}/>
                <Flexbox style={styles.linkText}>
                  Report
                </Flexbox>
              </Flexbox>
              </a> }
              { this.props.exSiteLink && <a href={this.props.exSiteLink} target="_blank" style={styles.aLink}>
              <Flexbox flexDirection="column"  style={styles.linkContainer}>
                <Site style={styles.links}/>
                <Flexbox style={styles.linkText}>
                 {this.props.exSite}
                </Flexbox>
              </Flexbox>
              </a> }
              </Flexbox> }
        </Flexbox>

    </Flexbox>
    );
  }
}

export default (ProjectCard);
