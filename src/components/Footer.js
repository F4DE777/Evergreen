import React from 'react';
import SchLogo from '../assets/MaryLandlogo.png'
import Twitter from "../assets/Component48–1.svg";
import Face from "../assets/Component47–1.svg";
import Insta from "../assets/Component49–1.svg";
import WaterMark from "../assets/Group1066.png";
import Enquire from "../assets/1632735791._DSC3088ytht@2x.png"
import Visit from "../assets/1632735791._DSC3088sdd@2x.png"
import Apply from "../assets/1632735791._DSC3088rf@2x.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



import "./Footer.css";



function Footer() {
  return (
    <>
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

                
            <footer className="footer ">
                <div className="container-lg">
                    <div className="row">
                        <div className=" col-xl-3 col-md-3 col-sm-12 col-xs-12 mb-2 mb-lg-0 Army ">
                            <div className="container-lg  Gap">
                                <h6 className="use text-white">STAY UP TO DATE WITH <br></br>
                                    THE LATEST NEWS
                                </h6>
                                <div className="controller-input">
                                    <input type="text"  placeholder="Your email here"
                                           className="form-controlling form" />
                                    <button className="submit px-2" >
                                        Submit
                                    </button>
                                    
                                </div>
                                <div className="socials">
                                        <header className="h5 text-white text-left lined ">Connect And Share</header>
                                        <ul className="list-unstyled d-flex text-white mr-4 mb-4">
                                            <li className="  mr-4  dxty">
                                                <a href="/"
                                                    className={'link'} target={'_blank'}>
                                                    <img src={Face} alt="social" className="img-fluid"/>
                                                </a>
                                            </li>
                                            <li className="mr-4 dxty">
                                                <a href="/" className={'link'} target={'_blank'}>
                                                    <img src={Twitter} alt="social" className="img-fluid"/>
                                                </a>
                                            </li>
                                            <li className="mr-4 dxty">
                                                <a href="/"
                                                className={'link'} target={'_blank'}>
                                                    <img src={Insta} alt="social" className="img-fluid"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                

                            </div>
                        </div>


                        <div className=" col-xl-5 col-md-5 col-sm-12 col-xs-12  mt-4">
                            <div className="container-lg usefuls">
                                <div >
                                    <div className="badge-cont">
                                        <img src={SchLogo} alt="badge"  className='schbadge'/>
                                    </div>
                                    <div class="grid-container">
                                        <div>
                                            <h4>TEMPORAL SITE</h4>
                                            <p>4 Ukwa Street, Independence Layout, Enugu</p>
                                        </div>
                                        <div>
                                            <h4>DAY SCHOOL</h4>
                                            <p>8 Aguleri Street, Opposite High Court, Enugu</p>
                                        </div>
                                        <div>
                                            <h4>PHONE</h4>
                                            <p>0808</p>
                                        </div>  
                                        <div>
                                            <h4>E-MAIL</h4>
                                            <p>evergreenschool@gmail.com</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className=" col-xl-4 col-md-4 col-sm-12 col-xs-12  mt-3 Army ">
                            <div className="container-lg  Gap">
                                <div className="row">
                                    <div className="col-12">
                                        <h6 className="use text-white">Useful Links </h6>
                                            <div style={{display:'flex', gap:'3rem'}}>
                                                 <ul className='grade-level'>
                                                    <li><Link>Home </Link> </li>
                                                    <li><Link>Apply </Link></li> 
                                                    <li><Link>Admission List</Link></li> 
                                                    <li><Link>Scholarships</Link></li> 
                                                    <li><Link>Alumni</Link></li> 
                                                </ul>
                                                <ul className='grade-level'>
                                                    <li><Link>About Us </Link></li> 
                                                    <li><Link>Payment</Link></li> 
                                                    <li><Link>Career</Link></li> 
                                                </ul>
                                            </div>
                                           
                                    </div>
                                    <div className="col-12">
                                        <div className='w-mark'>
                                            <a href={'http://educare.school/'}  style={{display: 'inline-block'}}>
                                                <img src={WaterMark} alt="Aisa" className="img-fluid">
                                                </img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                               
                                <div>
                                    
                                </div>
                               
                                

                            </div>
                        </div>
                    </div>
                   
                   
                    <div className="divider">
                        {/* <div className="container-lg">
                            <h4>Back to top</h4>
                        </div> */}
                    </div>
                    <div className="container-lg">
                        <div className="copyrights">
                            <div className=" ">
                                <p className=" mb-0 text-white fullyear">
                                    &copy; {new Date().getFullYear()} {''} Evergreen Schools - All rights reserved{' '}
                                </p>
                            </div>
                            <div className="policy">
                                <p>Contact Us</p>
                                <div className="divide"/>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
  )
}

export default Footer