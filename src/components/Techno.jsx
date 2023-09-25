import "../assets/styles/Techno.css"
import imageHTML from "../assets/images/icones/HTML.png"
import imageCSS from "../assets/images/icones/CSS.png"
import imageJS from "../assets/images/icones/JS.png"
import imageREACT from "../assets/images/icones/REACT.png"
import imageJSON from "../assets/images/icones/JSON.png"
import imageEXPRESSJS from "../assets/images/icones/EXPRESSJS.png"
import imageNODE from "../assets/images/icones/NODEJS.png"
import imageMONGODB from "../assets/images/icones/MONGODB.png"

function Techno() {
    return (
        <section id="Techno" className="technologies">
            <h2>Technologies</h2>
            <div className="tech-icons">
                <img src={imageHTML}  alt="Html 5 " title="Html 5 " width="64" height="64"/>
                <img src={imageCSS} alt="Css 3 " title="Css 3 " width="64" height="64"></img>
                <img src={imageJS} alt="Js " title="Js " width="64" height="64"/>
                <img src={imageREACT} alt="React" title="React " width="64" height="64"></img>
                <img src={imageJSON} alt="Json " title="Json " width="64" height="64"></img>
                <img src={imageEXPRESSJS} alt="Express Js icon" title="ExpressJS " width="64" height="64" ></img>
                <img src={imageNODE} alt="color" title="NodeJS " loading="lazy" width="64" height="64" lazy="loaded"></img>
                <img src={imageMONGODB} alt="MongoDB icon" title="MongoDB " width="64" height="64"/>

                
            </div>

        
        </section>
    );
  }
  
  export default Techno;