import { useState } from "react";
import "../assets/styles/Cookies.css"
import { CookiesProvider, useCookies } from "react-cookie";



function Cookies() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [validWindowCookies, setValidWindowCookies] = useState(true);
    function desactiveWindowCookies() {
        setValidWindowCookies(false);
    }
    removeCookie();
    
    // composantDidMount() {
    //     window .addEventListener( "beforeunload" , (e) => {
    //      e.preventDefault();
    //      cookies.remove( "utilisateur" );
    //    });
    //  }
    return (<>
        { validWindowCookies ? ( <div className="bck-cookies" >
            <div className="box-cookies">
                <p>Ce site web est susceptible d'avoir des cookies. Pour poursuivre veuillez sélectionner "Accepter les cookies".</p>
                <div className="cookies-btns">
                    <button onClick={desactiveWindowCookies}>Accepter les cookies</button>
                    <button onClick={desactiveWindowCookies}>Refuser</button>
                </div>
                
            </div>
        </div> ) : ""}
    </>
        
    );
  }
  
  export default Cookies;