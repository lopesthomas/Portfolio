import '../assets/styles/Banner.css'
import imageBurger from "../assets/images/icones/burger-bar.png"
import { useState } from 'react';

function Banner() {
  const [activeMenu, setActiveMenu] = useState(false)
  
  // const [menuString, setMenuString] = useState("menu-burger-nav");
  function menuBurger() {
    if(activeMenu){
      setActiveMenu(false)
    } else {
      setActiveMenu(true);
    }
  }
    return (
      <header className="top-header">
        <div className="nav-liens">
            <a href="#Accueil">Accueil</a>
            <a href="#Projets">Projets</a>
            <a href="#Techno">Technologies</a>
            <a href="#Propos">A Propos</a>
            <a href="#contacter">Contact</a>
        </div>
        { activeMenu ? 
          ( <div className="menu-burger-nav active">
          <button onClick={menuBurger}><img src={imageBurger} alt="Menu de navigation" /></button>
          <div className='menu-nav-list'>
            <a href="#Accueil" onClick={menuBurger}>Accueil</a>
            <a href="#Projets" onClick={menuBurger}>Projets</a>
            <a href="#Techno" onClick={menuBurger}>Technologies</a>
            <a href="#Propos" onClick={menuBurger}>A Propos</a>
            <a href="#contacter" onClick={menuBurger}>Contact</a>
          </div>
        </div> )
        : 
        ( <div className="menu-burger-nav">
          <button onClick={menuBurger}><img src={imageBurger} alt="Menu de navigation" /></button>
          <div className='menu-nav-list'>
            <a href="#Accueil">Accueil</a>
            <a href="#Projets">Projets</a>
            <a href="#Techno">Technologies</a>
            <a href="#Propos">A Propos</a>
            <a href="#contacter">Contact</a>
          </div>
        </div> )
      }
        
      </header>
    );
  }
  
  export default Banner;
  