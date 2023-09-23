import { useState } from "react";
import "../assets/styles/Contact.css"

import PureModal from 'react-pure-modal';
import '../assets/styles/Modal.css'

function Contact() {
    const [modale, setModale] = useState(false);

    const [conditionsDonnees,setConditionsDonnees] = useState(false);
    function openModaleDonnees() {
        setConditionsDonnees(true)
    }
    function closeModalDonnees() {

    }
    return (
        <section className="contact">


<PureModal
                header={<div>Politique de confidentialité</div>}
                footer={
                    <div>
                        <p> </p>
                    </div>
                }
                isOpen={modale}
                closeButton=<img src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" data-src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" alt="Cross " title="Cross " width="30" height="30"/>
                closeButtonPosition="bottom"
                onClose={() => {
                    setModale(false);
                    return true;
            }}>
                <div>
                    <p>J’accorde une importance toute particulière au droit à la vie privée des internautes et m’engage à protéger leurs données personnelles selon la législation française et européenne en vigueur.</p>
                    <p>La présente politique de confidentialité, désignée ci-après la « Politique », expose mes pratiques concernant les informations que je peux collecter sur le Site et leur utilisation.</p>
                    <h3>IDENTITÉ DU RESPONSABLE DE TRAITEMENT</h3>
                    <p>J’agis en qualité de Responsable de traitement à l’égard des données personnelles collectées sur le Site :</p>
                    <p>
                        <li>Thomas LOPES</li>
                        <li>thomaslopes001@gmail.com</li>
                    </p>
                        
                    
                    <h3>PORTÉE ET ACCEPTATION DE LA PRÉSENTE POLITIQUE</h3>
                    <p>La présente Politique s’applique uniquement aux informations collectées à partir de mon Site et ne s’applique pas aux informations collectées à partir d’autres sources, notamment, sans que cette liste ne soit limitée, Facebook®, Twitter®, YouTube® ou tout autre site ou réseaux social tiers.
                        En utilisant mon Site, vous acceptez les termes de la présente Politique. Si vous refusez les termes de la présente Politique, je vous invite à ne pas utiliser mon Site ou à ne pas me transmettre d’information à caractère personnel.</p>
                    <h3>DONNÉES COLLECTÉES SUR MON SITE</h3>
                    <p>Je collecte et conserve certaines données à caractère personnel vous concernant (c’est-à-dire les informations qui permettent de vous identifier directement ou indirectement) ci-après « Données personnelles », et ce, uniquement lorsque vous les communiquez volontairement sur mon Site.

                        Je traite notamment, vos nom, prénom, adresse électronique, adresse IP, etc.

                        Je peux être amené à vous demander de me communiquer des Données personnelles, notamment dans les cas suivants :</p>
                    
                    <p>
                        <li>quand vous souhaitez me faire part de vos commentaires ou me transmettre vos questions</li>
                        <li>lorsque vous souhaitez me contacter</li>
                    </p>
                    <p>Lorsque vous naviguez sur mon Site, je ne collecterai que les Données personnelles que vous me fournissez volontairement, à l’exception de certains éléments de données à caractère personnel collectées automatiquement par les systèmes d’information et programmes utilisés pour le fonctionnement du Site et dont la transmission est inhérente à l’utilisation d’internet.</p>
                    <p>Je vous demanderais uniquement les informations strictement nécessaires à votre participation aux activités de mon Site. A cet effet, le caractère facultatif ou obligatoire des Données personnelles demandées vous est signalé par un astérisque ou tout autre moyen.</p>
                    <h3>FINALITÉS DE LA COLLECTE DES DONNÉES PERSONNELLES</h3>
                    <p>Chaque formulaire présent sur le site restreint au strict nécessaire la collecte des données personnelles et indique systématiquement :</p>
                    <p>
                        <li>les finalités de la collecte des données personnelles</li>

                        <li>le caractère obligatoire ou facultatif des données</li>

                    </p>
                    <p>En aucun cas je ne pourrai utiliser ces données personnelles pour une finalité autre que celle(s) explicitement annoncée(s) sur le formulaire et acceptée(s) par l’internaute. De même, ces données personnelles ne pourront être transmises ou cédées à des tiers sans une mention explicite de cette possibilité sur le formulaire.</p>
                    <p>Les données personnelles collectées sur mon Site me sont entièrement destinées.</p>
                    <p>Je peux être amené à divulguer les Données personnelles aux autorités judiciaires, aux forces de l’ordre ou à toute autre autorité lorsque cela est requis par la loi.</p>
                    <h3>DURÉE DE CONSERVATION</h3>
                    <p>Je conserverai vos Données personnelles pendant la durée nécessaire ou pour la durée requise par la loi en vigueur.</p>
                    <h3>VOS DROITS</h3>
                    <p>Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 (art. 34), vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données qui vous concernent. Pour exercer ce droit, vous pouvez me contacter par mail à l’adresse thomaslopes001@gmail.com ou par courrier à l’adresse :</p>
                    <p>Thomas LOPES 35 Rue Bir Hakeim, 01640 Jujurieux</p>
                    <p>Conformément à la réglementation en vigueur, votre demande doit être signée et accompagnée de la photocopie d’un titre d’identité portant votre signature et préciser l’adresse à laquelle doit vous parvenir la réponse. Une réponse vous sera alors adressée dans un délai de 2 mois suivant la réception de la demande.</p>
                    <h3>SÉCURITÉ</h3>
                    <p>La sécurité de vos Données personnelles est très importante pour moi. Les données personnelles recueillies sur le site www.thomaslopes-portfolio.com sont traitées selon des protocoles sécurisés qui limitent considérablement les risques d’interception ou de récupération par des tiers.</p>
                    <p>Toutefois, en raison de la nature ouverte du réseau internet, je ne peux pas exclure les actes de piratage, ou l’accès non autorisé des tiers. En continuant à utiliser mon Site, vous acceptez ces risques.</p>
                    <p>Dans la limite de ce qui est autorisé par les lois en vigueur je décline toute responsabilité en cas de dommage direct ou indirect, des pertes, coûts, que ce soit contractuelle, délictuelle, y compris par négligence, que vous pourriez subir en cas d’accès non autorisé, de perte ou d’altération de vos données personnelles.</p>
                </div>
            </PureModal>








            <div className="box">
                <h2 id="contacter">Contact</h2>
                <form action="mailto:thomaslopes001@gmail.com" method="post" encType="text/plain">
                    <label value="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Entrer votre email (ex: joannes@gmail.com)" />
                    <label value="message">Message</label>
                    {/* <input type="text" name="" id="message" placeholder="Que souhaitez-vous dire ?" /> */}
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Que souhaitez-vous dire ?"></textarea>
                    <div className="check-conditions">
                        <input type="checkbox" name="politique des données" id="checkbox" />
                        <p>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la <a  onClick={() => setModale(true)}>conservations des données</a></p>
                        
                    </div>
                    <input className="btn-envoyer" type="submit" value="envoyer" />
                </form>
            </div>
            {conditionsDonnees ? (<div className="modale-conditions">test</div>) : ""}
        </section>
    );
  }
  
  export default Contact;