import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Slider from './components/Slider';
import Techno from './components/Techno';
import Propos from './components/Propos';
import Contact from './components/Contact';


function App() {

  const items = [
    // Remplace les éléments ci-dessous par tes données de carte réelles
    { title: 'Mon Vieux Grimoire', content: 'Kévin me contacte pour me proposer de travailler avec lui en mutualisant nos compétences front/back sur un tout nouveau projet qui lui a été proposé. Il s’agit d’une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres. Ma mission sera de développer le backend.', objectif: [{id:'inscription / connexion / déconnexion'},{id:'ajout de livres'}, {id:'modifications de livres'}, {id:'suppression de livres'}, {id:'notation de livres'}].map(({id}) => {return <li key={id}>{id}</li>}) , lien: 'https://github.com/lopesthomas/API-books', image: mvg },
    { title: 'Nina Carducci', content: "En tant que développeur freelance, je propose mes services d’optimisation SEO. Nina Carducci a répondu favorablement à ma demande d'apport en soutien.", objectif: [{id:'une optimisation globale du site, tant sur les performances que sur le SEO'},{id:'mettre en place le référencement local en utilisant Schema.org'},{id:'ajouter les metas pour les réseaux sociaux'},{id:'faire les modifications liées à l’accessibilité du site.'}].map(({id}) => {return <li key={id}>{id}</li>}) , lien: 'https://github.com/lopesthomas/Nina-Carducci' , image: nc },
    { title: 'Sophie Bluel', content: 'Envoyée en renfort comme développeur front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur, je suis chargée de développer certaines fonctionnalités.', objectif: [{id:"la page de présentation des travaux de l'architecte (à partir du HTML fourni) ;"},{id:"la page de connexion de l'administrateur du site (le client) (code à créer de zéro)"},{id:"la modale permettant d'uploader de nouveaux médias"}].map(({id}) => {return <li key={id}>{id}</li>}) , lien: 'https://github.com/lopesthomas/ArchiWebos' , image: sb },
    { title: 'Booki', content: 'L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.', objectif: [{id:"intégrer l'interface du site avec du code HTML et CSS"},{id:"respecter la maquette"}].map(({id}) => {return <li key={id}>{id}</li>}) , lien: 'https://github.com/lopesthomas/SiteBooki' , image: booki },
    { title: 'Kasa', content: 'Kasa me recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web.', objectif: [{id:'démarrer le projet React'},{id:"développer l’ensemble de l’application"},{id:'les composants React'},{id:'les routes React Router'}].map(({id}) => {return <li key={id}>{id}</li>}) , lien: 'https://github.com/lopesthomas/Kasa' ,  image: kasa },
  ];

  return (
    <div className="App">
      <Header />
      <Banner />
      <Slider items={items} />
      <Techno/>
      <Propos/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
