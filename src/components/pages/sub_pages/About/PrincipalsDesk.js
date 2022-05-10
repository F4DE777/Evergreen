import React from 'react';
import { Link } from 'react-router-dom';
import Teacher from "../../../../assets/sister10@2x.png";
import Pex from "../../../../assets/Group10121@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import './Style.css'

function PrincipalsDesk() {
  return (
    <>
        <div className="page-trans">
                <section>
                    <div className="header-img">
                        <img src={Pex} alt="Header" className="img-fluid" />
                    </div>
                </section>
                <CBreadcrumb style={{"--cui-breadcrumb-divider": "'>'"}}>
                    <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
                    <CBreadcrumbItem href="/about/administrators-message">About</CBreadcrumbItem>
                    <CBreadcrumbItem active>Welcome Address</CBreadcrumbItem>
                </CBreadcrumb>

                <section className="container">
                    <div className="comments">
                        <div className="intro">
                            <small>About </small>
                            <header>Welcome Address</header>
                        </div>
                        <div className=" create">
                                <div className='sub-cover'>
                                    <ul className='sub-menu'>
                                        <li>
                                            <Link to={'/'}>
                                                Home
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="active" to={'/about/administrators-message'}>
                                                Welcome Address
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about/proprietors-message'}>
                                                Proprietor’s Message
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about/history'}>
                                                History Of The School
                                            </Link>
                                           
                                        </li>
                                        <li>
                                            <Link to={'contact-us'}>
                                                Contact Us
                                            </Link>
                                            
                                        </li>
                                    </ul>
                                </div>
                                <img src={Teacher} alt="" className='principals-img' /> <p>
                                        I am excited to welcome you to evergreen schools. By working hard, we have continued to blaze the trail in the delivery of quality education these past years and have set enviable standards. 
                                </p>
                                <p>    Evergreen schools is unique because we believe in child centred learning. This philosophy sets the child free to explore and learn in an atmosphere of compassion, mutual respect and trust.</p>
                                <p>Small class size, supportive staff, a working system which recognizes and promotes the individuality of the child, allows each child to develop his/her talent. We have come to realize that children have different aptitudes and that they learn and develop at different stages. It is important to allow them</p>
                                <p>Our rich curriculum which encompasses the best of British and Nigerian contents, empowers the child to flow freely with the dynamics of a globalized world. We work with the aim of raising independent thinkers who are open to ideas, inquisitive, confident, kind and responsible, with an enduring love for learning and a purposeful future. Our pupils graduate from evergreen schools with excellent grades ,and with the freedom that comes from knowing that they are valued by staff and their peers, they move on to highly rated secondary school in Nigeria, ready to soar. This is the freedom we create and celebrate in the education we impart in them. While they were here, they received the best and as they leave, we believe they will always strive for the best.</p>
                                <p>Back to you my dear children; be optimistic that you can join the team of achievers that both Nigeria and the world have ever received; it may not be easy, but it is possible. As you have come to be part of MCSS family, try to be good Ambassadors of this great citadel of learning obey the school rules and regulations, be punctual, attentive and open. Once again you are highly welcome and remain blessed.</p>
                                
                                
                        </div> 
                        <div className='rev'>
                            <h4>MRS DORIS CHINEDU-OKORO </h4>
                            <h4>ADMINISTRATOR</h4>
                        </div>
                    </div>
                </section>
 
        </div>
            
    </>
  )
}

export default PrincipalsDesk