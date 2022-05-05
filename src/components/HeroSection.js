import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/Rectangle-2@2x.png";
import Des from "../assets/Rectangle-22@2x.png";
import Hard from "../assets/Rectangle-2e@2x.png";
import Pex from "../assets/Rectangle-2s@2x.png";
import Believe from "../assets/Group1080ed@2x.png";
import Inspire from "../assets/Group1080e@2x.png";
import Succeed from "../assets/Group1130uyjjy@2x.png";
import Teacher from "../MaryLand/1632735791._DSC3088@2x.png";
import Cart from "./Carousel";
import Vision from "./Vision";
import "./HeroSection.css";
import {  InstagramEmbed, TwitterEmbed} from 'react-social-media-embed';

function HeroSection() {


  return (
    <>
    <div className="page-trans ">
        <div>
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
        </div>
         
          {/* <div className="hooked-cov ">
            <div className="hooked">
                <div className="search-fixed"> <Link>Search</Link> </div>
                <div className="enquire-fixed"><Link>Enquire</Link></div>
                <div className="apply-fixed"><Link>Apply</Link></div>
                <div className="visit-fixed"><Link>Visit</Link></div>
            </div>
          </div> */}

          <div className="intro-container">
            <div className="intro-cover">
            <div className="welcome-img">
                <img className="head-teacher-img " src={Teacher} alt="" />
              </div>
              <div className="welcome-note">
                {/* <span className="tip-block"></span> */}
                <label htmlFor="#">GREETINGS</label>
                <h3>
                  Welcome to MCSS
                </h3>
                <div  className="mt-3">
                    <p>I welcome you all to this noble institution, Maryland Comprehensive Secondary School and I congratulate your beloved parents/guardian on your admission to this school.</p>
                    <p>
                        I must say that it is a great privilege to be in this great school that has and will continue to provide highly esteemed and holistic, qualitative education to many people holding key posts in various works of life in and outside our country. You have come therefore to be part of MCSS family and to show the stuff you are made of, in contributing to the good and golden legacy that the school has made in world history.
                    </p>
                    <p>Once again you are welcome.</p>
                </div>
                <div className="mt-5 more">
                  <button to={"/"} className="read">
                    Read More
                  </button>
                </div>
              </div>
              
            </div>
          </div>

          <div className='circle-container'>
                                <div  className='center'>
                                <h4>
                                    Nuturing global citizens and future game-changers
                                </h4>
                                  
                                  {/* <img src={Teacher} alt=""/> */}
                                
                                </div>
                                <a href='/' className='deg0'><img src={Teacher} alt=""/></a>
                                <a href='/' className='deg45'><img src={Teacher} alt=""/></a>
                                <a href='/' className='deg135'><img src={Teacher} alt=""/></a>
                                <a href='/' className='deg180'><img src={Teacher} alt=""/></a>
                                <a href='/' className='deg225'><img src={Teacher} alt=""/></a>
                                <a href='/' className='deg315'><img src={Teacher} alt=""/></a>
          </div>


          <div className="container marg " >
              <div className="row">
                    <div className="col-12 yellow-border">
                      <div>
                        <div className="mission-cont">
                          <label htmlFor="#"> OUR MISSION</label>
                          <h4>At A Glance</h4>
                          <div >
                            <p>
                              The quick, brown fox jumps over a lazy dog.
                               DJs flock by when MTV ax quiz prog. Junk MTV 
                               quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                                Waltz, bad nymph,
                            </p>
                          </div>
                        </div>
              
                      </div>
                    </div>
              </div>
          </div>



          
          <div className="container">
                          <div className="row " style={{marginTop:'7rem',overflow:'visible'}}>
                            <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift" style={{ background: `url(${Believe}) center/cover no-repeat`,
                                 height: '724px', marginTop:'8rem'
                                 }}>
                                  <h4>Creche</h4>
                             </div>
                            <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift"  style={{ background: `url(${Inspire}) center/cover no-repeat`, 
                                height: '724px', 
                                }}>
                                  <h4>Junior Primary</h4>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift" style={{ background: `url(${Succeed}) center/cover no-repeat`, 
                                height: '724px',  marginTop:'5rem'
                                }}>
                                  <h4>Higher Primary</h4>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3 swift" style={{ background: `url(${Succeed}) center/cover no-repeat`, 
                                height: '724px',  marginTop:'12rem'
                                }}>
                                  <h4>Secondary</h4>
                            </div>
                          </div>

                        </div>
                        <Vision/>
                       
                        



                         

                          <div>
                                

                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <InstagramEmbed url="https://www.instagram.com/p/CdJgyZjD7IK/" width={550} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <TwitterEmbed url="https://twitter.com/LaLigaEN/status/1521928395965317123" width={550} />
                                </div>

                          </div>

                          <Cart/>          
          
         
          
          

    </div>

    </>
  );
}

export default HeroSection;
