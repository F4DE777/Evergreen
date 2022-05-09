import React, {useEffect} from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "./Item";
import Violin from "../assets/1632735791._DSC308118@2x.png";
import Interhouse from "../assets/1632735791._DSC308338@2x.png";
import Church from "../assets/1632735791._DSC308228@2x.png";
import {Bounce } from 'react-reveal';
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./Vision.css";


function Vision() {

    useEffect(() => {
        Aos.init({  offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 120,});
    }, []);
  return (
    <>
    <div className='box-event'>
        <div className='box-event-cont'>
                <div data-aos="zoom-in-left">
                    <label htmlFor="">NEWS + EVENTS</label>
                </div>
                <div data-aos="zoom-in-right">
                    <h4>Featured News And Activities</h4>
                </div>
                <div data-aos="zoom-in-bottom">
                    <p>
                        <Bounce bottom cascade>
                            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky.
                        </Bounce>
                    </p>
                </div>
           
        </div>

    </div>

    <div className='vision-cont'>
      <Carousel itemsToShow={1}>
          <Item>
                <div  className="moreEvents">
                        <ul data-aos="zoom-in-left" className='event-list'>
                            <li>
                                <img src={Violin} alt="" className='img-fluid' />
                                <button className='event-btn'>EVENT</button>
                            </li>
                            <li>
                                <img src={Interhouse} alt="" className='img-fluid' />
                                <button className='event-btn'>EVENT</button>

                            </li>
                            <li className='v-hide'>  
                                <img src={Church} alt="" className='img-fluid' />
                                <button className='event-btn'>EVENT</button>

                            </li>
                        </ul>
                </div>
                <div className="more-news1">
                      <button>More News + Events</button>
                </div>
          </Item>
          <Item>
                <div  className='yellow-stand moreEvents'>
                            <ul data-aos="zoom-in-left" className='event-list'>
                                <li>
                                    <img src={Violin} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li>
                                    <img src={Interhouse} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li className='v-hide' >  
                                    <img src={Church} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                            </ul>
                    </div>
                <div className="more-news1">
                    <button>More News + Events</button>
                </div>
               
          </Item>
          <Item>
                    <div  className="moreEvents">
                            <ul data-aos="zoom-in-left" className='event-list'>
                                <li>
                                    <img src={Violin} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li>
                                    <img src={Interhouse} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li className='v-hide'>  
                                    <img src={Church} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                            </ul>
                    </div>
                    <div className="more-news1">
                        <button>More News + Events</button>
                    </div>
          </Item>
    
          
      </Carousel>
      </div>
    
    </>
  )
}

export default Vision