import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/Rectangle-2@2x.png";
import Des from "../assets/Rectangle-22@2x.png";
import Hard from "../assets/Rectangle-2e@2x.png";
import Pex from "../assets/Rectangle-2s@2x.png";
import Photos2 from "../assets/Rectangle-2s@2x.png";
import Photos3 from "../assets/Rectangle9err@2x.png";
import Photos4 from "../assets/Rectangle-22@2x.png";
import Photos5 from "../assets/Rectanglehlijkn@2x.png";
import Photos6 from "../assets/Rectangle9rrf@2x.png";
import Photos7 from "../assets/Rectangle9.png";
import Photos8 from "../assets/Rectangle9rrr@2x.png";
import Photo1 from "../assets/Rectanglefff@2x.png";
import Teacher from "../MaryLand/1632735791._DSC3088.png";
import { Link } from "react-router-dom";
import Enquire from "../assets/1632735791._DSC3088ytht@2x.png"
import Visit from "../assets/1632735791._DSC3088sdd@2x.png"
import Apply from "../assets/1632735791._DSC3088rf@2x.png"
import Cart from "./Carousel"
import Vision from "./Vision";
import "./HeroSection.css";

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
          <div className="believe">
              <h4>Believe.</h4>
              <h4>Inspire.</h4>
              <h4>Succeed.</h4>
          </div>
          <div className="hooked-cov">
            <div className="hooked">
                <div className="search-fixed"> <Link>Search</Link> </div>
                <div className="enquire-fixed"><Link>Enquire</Link></div>
                <div className="apply-fixed"><Link>Apply</Link></div>
                <div className="visit-fixed"><Link>Visit</Link></div>
            </div>
          </div>

          <div className="intro-container">
            <div className="intro-cover">
              <div className="welcome-note">
                <span className="tip-block"></span>
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
                <div className="mt-5">
                  <button to={"/"} className="read">
                    Read More
                  </button>
                </div>
                <span className="green-line"></span>
              </div>
              <div className="welcome-img">
                <img className="head-teacher-img " src={Teacher} alt="" />
              </div>
            </div>
          </div>


          <div className="container">
              <div className="row">
                    <div className="col-12">
                      <div>
                        <div className="mission-cont">
                          <label htmlFor="#"> OUR MISSION</label>
                          <h4>At A Glance</h4>
                          <div>
                            <p>
                              AT MCSS we are Intentional with providing an 
                              enduring legacy of qualitative and affordable education 
                              in Nigeria. Our students as much as possible, acquire the 
                              best education in a conducive, fair, competitive and dynamic
                              atmosphere with the assistance of competent and dedicated teache
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
          </div>

          
          <Vision/>
          <Cart/>
          <div className="gallery-cont">
            <div>
                <div className="gallery-head">
                  <label htmlFor="">EXPLORE</label>
                    <h1>Take A School Tour</h1>
                    <p>Our Campus Have A Lot To Offer For Our Students</p>
                  </div>
                <table className='gallery'>
                  <tr>
                    <td className='mic-img'>
                      <div  style={{ background: `url(${Photos7}) center/cover no-repeat`,   height: '100%', width: '-webkit-fill-available'   }} >
                          <div className='text-cover'>
                              <div className='text-content'>
                              <i class="fas fa-caret-left"></i>
                              <i class="fas fa-search"></i>
                              <i class="fas fa-caret-right"></i>
                              <i class="fa-solid fa-magnifying-glass-plus"></i>
                              </div>
                            </div>
                      </div>
                        
                    </td>
                    <td colSpan='2'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                      <div style={{ background: `url(${Photos4}) center/cover no-repeat`,  height: '100%', width: '-webkit-fill-available'  }} className='img-fluid'>
                        <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                      </div>
                    </td>
                    <td rowSpan='2'>
                      <div style={{
                        background: `url(${Photos2}) center/cover no-repeat`,
                        height: '100%', width: '417px'
                      }} className='img-fluid'>
                          <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                      </div>
                    </td>
                    <td>
                      <div style={{
                        background: `url(${Photos3}) center/cover no-repeat`,
                        height: '100%', width: '-webkit-fill-available'
                      }} className='img-fluid'>
                          <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td >
                      <div style={{
                        background: `url(${Photos8}) center/cover no-repeat`,
                        height: '100%', width: '371px'
                      }} className='img-fluid'>
                          <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                      </div>
                    </td>
                    <td>
                    <div style={{
                        background: `url(${Photo1}) center/cover no-repeat`,
                        height: '100%', width: '371px'
                      }} className='img-fluid'>
                          <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                      </div>
                    </td>
                    <td>
                      <div style={{
                        background: `url(${Photos5}) center/cover no-repeat`,
                        height: '100%', width: '371px'
                      }} className='img-fluid'>
                          <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                      </div>
                    </td>
                    <td>
                      <div style={{
                        background: `url(${Photos6}) center/cover no-repeat`,
                        height: '100%', width: '371px'
                      }} className='img-fluid'>
                          <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                  </div>             
                  </td>
                  </tr>
                </table>
                <div className="more-news">
                      <button>More News + Events</button>
                </div>
            </div>
          </div>
          <div className="container  smooth">
                        <div className="join-head">
                          <label htmlFor="">EXPLORE</label>
                            <h1>Discover More</h1>
                        </div>
                        <div className="row mb-5 mt-5">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12  ">
                                <div className='join-img'>
                                    <img src={Enquire} alt="stairs " className="img-fluid"/>
                                </div>
                                <div className="ing-tag">
                                    <h4>Enquire</h4>
                                  </div>  
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 ">
                                <div className='join-img1'>
                                    <img src={Visit} alt="stairs" className="img-fluid"/>
                                </div>
                                <div className="ing-tag">
                                    <h4>Visit</h4>
                                  </div>  
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 ">
                                <div className='join-img2'>
                                    <img src={Apply} alt="stairs" className="img-fluid"/>
                                </div>
                                <div className="ing-tag">
                                    <h4>Apply</h4>
                                  </div>  
                            </div>

                        </div>
          </div>

    </div>

    </>
  );
}

export default HeroSection;
