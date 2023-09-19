import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Slider from './components/Slider';
import Techno from './components/Techno';
import Propos from './components/Propos';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Slider/>
      <Techno/>
      <Propos/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
