import React,  {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import SchLogo from '../assets/MaryLandlogo@2x.png'
import fIcon from '../assets/Icon feather-user.svg';
import {navMenus} from './MenuItems';
import Dropdown from './Dropdown';
import Fade from 'react-reveal/Fade';

import classes from './NavBar.module.css';
import './NavBar.css'
// import classes from './AdmissionForm.module.css';


function NavBar() {
  const [click , setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  const [activeMenu, setActiveMenu] = useState({
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
  })

  const onMouseEnter = (e) => {
    const menuText = e.target.text.trim().toLowerCase() || 'about';

    if (window.innerWidth < 960){
      setDropdown(false);
    }else{
      setActiveMenu({
        menu1: menuText === 'about',
        menu2: menuText === 'admission',
        menu3: menuText === 'academics',
        menu4: menuText === 'school life',
        menu5: menuText === 'gallery',
        menu6: menuText === 'news',
      })
    }

  }

  const onMouseLeave = () =>{
    if(window.innerWidth < 960){
      setDropdown(false);
    }else{
      setActiveMenu({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false,
      })
    }
  };

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
   <Fade top className='navContainer'>
        <div  className={classes.navCont}>
          <div className={classes.imgCont}>
            <Link to={'/'}>
                  <img src={SchLogo} alt=" logo" className={classes.imgContent}  />
            </Link>
          </div>
              <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}      />
            </div>
            <ul  className={click ? "nav-list active" : "nav-list"}>

              <li  className='nav-item ' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavLink  to={'/about'}
                          className='nav-links bubble'  
                          onClick={closeMobileMenu}>
                        ABOUT
                </NavLink>
                {activeMenu.menu1 && <Dropdown menuArray={navMenus.about}/>}
              </li>

              <li className='nav-item ' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavLink to={'/admission'} className='nav-links bubble' onClick={closeMobileMenu}>
                    ADMISSION
                </NavLink>
                {activeMenu.menu2 && <Dropdown menuArray={navMenus.admission}/>}
              </li>

              <li className='nav-item ' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <NavLink to={'/academics'} className='nav-links bubble' onClick={closeMobileMenu}>
                    ACADEMICS
                </NavLink>
                {activeMenu.menu3 && <Dropdown menuArray={navMenus.academics}/>}
             </li>

              <li  className='nav-item ' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavLink to={'/school'} className='nav-links' onClick={closeMobileMenu}>
                    STUDENT LIFE
                </NavLink>
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  >
                <NavLink to={'/gallery'} className='nav-links' onClick={closeMobileMenu}>
                  GALLERY
                </NavLink>
              </li>

              <li className='nav-item '> 
                <NavLink to={'/news'} className='nav-links' onClick={closeMobileMenu}>
                      NEWS AND EVENTS
                </NavLink>
              </li>

                  <button className={classes.btnPortal} >
                    <img src={fIcon} alt="person"  className={classes.fIcon} />
                  Portal</button>

            </ul>
        </div>
   </Fade>
  )
}

export default NavBar