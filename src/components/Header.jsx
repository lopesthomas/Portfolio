import '../assets/styles/Header.css'
import video from '../assets/pexels1.mp4'
import imageGitHub from "../assets/images/icones/GitHub.png"

function Header() {
    return (
        <section className="page-hero">
            <div className="page-video">              
                <video id="hero-video" src={video} autoPlay muted playsInline loop></video>
            </div>
            <div className="text-video">
                <h1>Thomas Lopes</h1>
                <h2>Développeur Front-end.</h2>
                <div className="bloc-btn">
                    <div className="btn-contacter">
                        <a href="#contacter" >Me Contacter</a>
                    </div>
                    <div className="btn-github">
                        <a className="btn" href="https://github.com/lopesthomas" target="_blank">Github
                            <img src={imageGitHub} alt="GitHub icon" width="48" height="48"/>
                        </a>
                    </div>
                    
                </div>
                
                {/* <button>Contacter</button> */}
            </div>
        
        </section>
    );
  }
  
  export default Header;