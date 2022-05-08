import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/Rectangle-2@2x.png";
import Des from "../assets/Rectangle2io@2x.png";
import Hard from "../assets/Rectangle2dff@2x.png";
import Pex from "../assets/Rectangle2sdcx@2x.png";
import Believe from "../assets/Rectangle10030@2x.png";
import Inspire from "../assets/Rectangle0030e@2x.png";
import Succeed from "../assets/Rectangle10030r@2x.png";
import Senior from "../assets/Rectangle10030rr@2x.png";
import Teacher from "../MaryLand/1632735791._DSC3088@2x.png";
import Cart from "./Carousel";
import Vision from "./Vision";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./HeroSection.css";
import {  InstagramEmbed, TwitterEmbed} from 'react-social-media-embed';
import styled from 'styled-components';
import Scroll from "./scrollToTop";
import {Fade,LightSpeed,Rotate,Zoom,Bounce } from 'react-reveal';
import Jump from 'react-reveal/Jump'
import ScrollReveal from 'scrollreveal'


const Socialmedia = styled.div`
      position:relative;
      display:grid;
      grid-template-columns: 1fr 35rem 30rem;
      /* column-gap: 20px; */
      width:90%;
      overflow:hidden ;
      margin: 0 auto;
`

const SocialmediaItem = styled.div`

`

const SocialmediaContent = styled.div`


  h4{
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-family:  skia;
  }

  p{
    font-size: clamp( 0.5rem, 1.5vw, 1.2rem);
    font-family:  monserat;
  }

  a{
    text-decoration:none ;
    color:#2696F7 ;
  }

  label{
    color:#8E2028 ;
    font-size:18px ;
  }

`


const Section =styled.section``

function HeroSection() {

  ScrollReveal().reveal('.circle-container');

  return (
    <Section  >
      <Scroll/>
        <div className="page-trans" >
            <Fade  bottom>
              <Carousel fade >
                <Carousel.Item>
                  <img className="imgCaro d-block w-100 img-fluid " src={scholar} alt="Scholar" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="imgCaro  d-block w-100 img-fluid " src={Des} alt="Student" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="imgCaro d-block w-100 img-fluid " src={Hard} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="imgCaro d-block w-100 img-fluid " src={Pex} alt="" />
                </Carousel.Item>
              </Carousel>
            </Fade>
            <Rotate bottom right>
                <div className="hooked-cov ">
                  <div className="hooked">
                      <div className="search-fixed"> <Link>Search</Link> </div>
                      <div className="enquire-fixed"><Link>Enquire</Link></div>
                      <div className="apply-fixed"><Link>Apply</Link></div>
                      <div className="visit-fixed"><Link>Visit</Link></div>
                  </div>
                </div>
            </Rotate>
            
              

              <div className="intro-container" >
                <div className="intro-cover">

                <LightSpeed left>
                      <div className="welcome-img">
                        <img className="head-teacher-img " src={Teacher} alt="" />
                      </div>
                </LightSpeed>
                  

                  <LightSpeed right>
                      <div className="welcome-note">
                      {/* <span className="tip-block"></span> */}
                      <Zoom bottom>
                        <label htmlFor="#">GREETINGS</label>
                      </Zoom>
                      <Zoom right>
                          <h3>
                            Welcome to Evergreen Schools
                          </h3>
                      </Zoom>
                      <Bounce right cascade>
                          <div  className="mt-3">
                              <p>I welcome you all to this noble institution, Maryland Comprehensive Secondary School and I congratulate your beloved parents/guardian on your admission to this school.</p>
                              <p>
                                  I must say that it is a great privilege to be in this great school that has and will continue to provide highly esteemed and holistic, qualitative education to many people holding key posts in various works of life in and outside our country. You have come therefore to be part of MCSS family and to show the stuff you are made of, in contributing to the good and golden legacy that the school has made in world history.
                              </p>
                              <p>Once again you are welcome.</p>
                          </div>
                      </Bounce>
                      
                      <div className="mt-5 more">
                        <button to={"/"} className="read">
                          Read More
                        </button>
                      </div>
                      </div>
                  </LightSpeed>
                  
                  
                </div>
              </div>

              <div className='circle-container'>
                  <div  className='center'>
                  <h4>
                      Nuturing global citizens and future game-changers
                  </h4>
                  </div>
                  <a href='/' className='deg0'><img src={Teacher} alt=""/></a>
                  <a href='/' className='deg45'><img src={Teacher} alt=""/></a>
                  <a href='/' className='deg135'><img src={Teacher} alt=""/></a>
                  <a href='/' className='deg180'><img src={Teacher} alt=""/></a>
                  <a href='/' className='deg225'><img src={Teacher} alt=""/></a>
                  <a href='/' className='deg315'><img src={Teacher} alt=""/></a>
              </div>

              <div  >
                  <div className="container marg "  >
                    <div className="row">
                          <div className="col-12 yellow-border">
                            <div>
                              <div className="mission-cont">
                                <LightSpeed top>
                                    <label htmlFor="#"> GET TO KNOW US</label>
                                </LightSpeed>
                                <LightSpeed left>
                                      <h4>Explore Evergreen School</h4>
                                </LightSpeed>
                                
                                    <div >
                                      <p>
                                        <Bounce bottom cascade>
                                            The quick, brown fox jumps over a lazy dog.
                                            DJs flock by when MTV ax quiz prog. Junk MTV 
                                            quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                                              Waltz, bad nymph,
                                          </Bounce>
                                      </p>
                                    </div>
                               
                                
                              </div>
                    
                            </div>
                          </div>
                         
                    </div>
                  </div>
                  <div className="container" id="greet" >
                        <Bounce  bottom cascade>
                              <div className="row " style={{marginTop:'7rem',overflow:'visible'}}>
                                        <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift" style={{ background: `url(${Believe}) center/cover no-repeat`,
                                            height: '724px', marginTop:'8rem'
                                            }}>
                                              <h4>Creche</h4>
                                              <div className="overlay-img"></div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift"  style={{ background: `url(${Inspire}) center/cover no-repeat`, 
                                            height: '724px', 
                                            }}>
                                              <h4>Junior Primary</h4>
                                              <div className="overlay-img1"></div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift" style={{ background: `url(${Succeed}) center/cover no-repeat`, 
                                            height: '724px',  marginTop:'5rem'
                                            }}>
                                              <h4>Higher Primary</h4>
                                              <div className="overlay-img2"></div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift" style={{ background: `url(${Senior}) center/cover no-repeat`, 
                                            height: '724px',  marginTop:'12rem'
                                            }}>
                                              <h4>Secondary</h4>
                                              <div className="overlay-img3"></div>
                                        </div>
                              </div>
                        </Bounce>
                                  

                  </div>
              </div>
              
              <Jump top>
                      <Vision/>
              </Jump>
                          
                            



                            

              <Socialmedia>
                    <SocialmediaContent>
                        <label>SOCIALS</label>
                          <h4>Stay connected <br /> with us in Evergreen</h4>
                          <p>
                            Be sure to follow us <a href="/">@Evergreenschoolsenugu</a>  to stay connected and peek into a day in Evergreen
                          </p>
                    </SocialmediaContent>

                    <SocialmediaItem style={{ display: 'flex', justifyContent: 'center' }}>
                          <InstagramEmbed url="https://www.instagram.com/houseofhighlights/" width={550} />
                    </SocialmediaItem>

                    <SocialmediaItem style={{ display: 'flex', justifyContent: 'center' }}>
                          <TwitterEmbed url="https://twitter.com/search?q=%23EndASUUStrike&src=trend_click&vertical=trends" width={550} />
                    </SocialmediaItem>

              </Socialmedia>

              <Cart/>          
              
            
              
              

        </div>

    </Section>
  );
}

export default HeroSection;
