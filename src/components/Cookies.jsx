import { useState } from "react";
import "../assets/styles/Cookies.css"

function Cookies() {
    const [validCookies, setValidCookies] = useState(true);
    function desactiveCookies() {
        setValidCookies(false);
    }
    return (<>
        { validCookies ? ( <div className="bck-cookies" >
            <div className="box-cookies">
                <p>Se site web est susceptible d'avoir des cookies. Pour poursuivre veuillez sélectionner "Accepter les cookies".</p>
                <button onClick={desactiveCookies}>Accepter les cookies</button>
            </div>
        </div> ) : ""}
    </>
        
    );
  }
  
  export default Cookies;