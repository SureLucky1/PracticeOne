import React, { useEffect, useReducer, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Navbarcss.css";
import { Link, useLocation } from "react-router-dom";
import Graphic from "./Graphic";
import Digital from "./Digital";
import Writing from "./Wiring";
import Video from "./Video";
import Music from "./Music";
import Programming from "./Programming";
import Photography from "./Photography";
import Business from "./Business";
import AiService from "./AI Services";

const initialState = {
  isHovering: false,
  isMoving: false
};


const Detail = {

}
function Navbar() {
  const { pathname } = useLocation();
const [graphic, setGraphic] = useState(false);  
const [digital, setDigital] = useState(false);  
const [writing, setWriting] = useState(false);  
const [video, setVideo] = useState(false);  
const [music, setMusic] = useState(false);  
const [programming, setProgramming] = useState(false);  
const [photography, setPhotography] = useState(false);  
const [business , setBusiness] = useState(false);  
const [aiService , setAiService] = useState(false);  
function reducer(state, action) {
  switch (action.type) {
    case 'HOVER':
      return {
        ...state,
        isHovering: true
      };
    case 'UNHOVER':
      return {
        ...state,
        isHovering: false
      };
    case 'Move':
      return {
        ...state,
        isMoving: true
      };
    case 'UnMove':
      return {
        ...state,
        isMoving: false
      };
    default:
      return state;
  }
}


  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    function handleMouseEnter() {
      if(window.scrollY > 0){
        dispatch({ type: 'HOVER' });
      }else{
         dispatch({ type: 'UNHOVER' });
      }
    }
    function handleMiniBar() {
      if(window.scrollY > 200){
        dispatch({ type: 'Move' });
      }else{
         dispatch({ type: 'UnMove' });
      }
    }
    window.addEventListener('scroll', handleMouseEnter);
    window.addEventListener('scroll', handleMiniBar);


  }, []);

  return (
    <div onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
      <div className={pathname !== "/one" ? state.isHovering ? "nav hover" : "nav" : "nav hoverr"}>
    <div className="container" >
        <nav className="navbar navbar-expand-sm navbar-light" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
  <div className="container-fluid" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
  <Link to="/"><h2 className={state.isHovering || pathname !== "/" ? "fiverr hover" : "fiverr"} ><b>fiverr<span style={{color:"green"}}>.</span></b></h2></Link>
    <input type="text" placeholder="What service are you looking for today?" className={pathname !== "/one" ? state.isHovering ? "fiverrSearch hover" : "fiverrSearch" : "fiverrSearch hover"}/>
    <div style={{
      }} className={state.isHovering || pathname !== "/" ? "searchIcon hover" : "searchIcon"}><FontAwesomeIcon icon={faMagnifyingGlass} size="30px"/></div>
    <ul className="navbar-nav">
    
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Fiverr Business</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">English</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Become a Seller</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Sign in</a>
      </li>
      <button className={state.isHovering || pathname !== "/" ? "button hover" : "button"}>Join</button>
    </ul>
  </div>
  

</nav>
<div className={pathname !== "/one" ? state.isMoving ? "small hover" : "small" : "small hoverr"} >
  <div className="container-fluid-mini" onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <ul className="navbar-nav mini">
    <Link className="link menuLink" to="/one" onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Graphics & Design
            </Link>
             
            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Digital Marketing
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Writing & Translation
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Video & Animation
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
              Music & Audio
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
              Programming & Tech
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
              Photography
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Business
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              AI Services
            </Link>
    </ul>
    
  </div>
    </div>
    </div>
    {graphic === true && <Graphic  setGraphic={setGraphic}/>}
    {digital === true && <Digital  setDigital={setDigital}/>}
    {writing === true && <Writing setWriting={setWriting}/>}
    {video === true && <Video setVideo={setVideo}/>}
    {music === true && <Music setMusic={setMusic}/>}
    {programming === true && <Programming setProgramming={setProgramming}/>}
    {photography === true && <Photography setPhotography={setPhotography}/>}
    {business === true && <Business setBusiness={setBusiness}/>}
    {aiService === true && <AiService setAiService={setAiService}/>}
    </div>
    </div>
  );
}

export default Navbar;
