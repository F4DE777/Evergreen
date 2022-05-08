import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import SchLogo from '../assets/toTop.svg'



const breatheAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`


const ToTop = styled.div`
    display:${({scrollState}) => (scrollState ? 'block' :'none' )} ;
    position:fixed;
    cursor: pointer;
    z-index: 100;
    bottom: 2.5rem;
    right: 0.5rem;
    border-radius: 2rem;
    padding: 1rem;
    
    img{
      height: 2.5rem;
      animation-name: ${breatheAnimation};
      animation-duration: 2s;
      animation-iteration-count: 2;

    }
`


function ScrollToTop() {
    const [scrollState, setscrollState] = useState(false);
    const toTop = () => {
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("scroll", ()=>{
      window.pageYOffset > 1000 ? setscrollState(true) : setscrollState(false);
    });

  return (
    <ToTop onClick={toTop} scrollState ={scrollState}>
        <img src={SchLogo} alt=" scrollToTop" />
    </ToTop>
  )
}
export default ScrollToTop;                                                                                                                                                                                                                                                                                                                     







