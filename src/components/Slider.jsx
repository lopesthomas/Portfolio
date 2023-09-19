import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import '../assets/styles/Modal.css'
import "../assets/styles/Slider.css"





function Slider ({ items }) {

    const [modal, setModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);

    const itemx2 = items
    const [currentPos, setCurrentPos] = useState(392);

    const [selectedItem, setSelectedItem] = useState("");

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        if(currentIndex === items.length - 1){
            setCurrentPos(392);
            setCurrentIndex(1)
        }else{
            setCurrentPos(currentPos - 392);
        };
        
        
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
        if(currentIndex === 0){
            setCurrentPos(-784);
        }else{
            setCurrentPos(currentPos + 392);
        };
    };

    const passItem = (x) => {
        setSelectedItem(x);
        
    }

    function clicklMultiple(x){
        setModal(true);
        passItem(x);
    }

    const styles = {
         transform: `translate3d( ${currentPos}px, 0px, 0px)`
    }
    return (
        <section id='Projets' className="slider">

            <PureModal
                header={selectedItem.title}
                footer={
                    <div>
                        <div className='btn-lienProjet'>
                            <a href={selectedItem.lien} target='_blank'>Lien du Projet</a>
                        </div>
                    {/* <button>Cancel</button>
                    <button>Save</button> */}
                    </div>
                }
                isOpen={modal}
                closeButton=<img src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" data-src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" alt="Cross " title="Cross " width="30" height="30"/>
                closeButtonPosition="bottom"
                onClose={() => {
                    setModal(false);
                    return true;
            }}>
                <img src={selectedItem.image} alt="" />
                <h3>Mission :</h3>
                <p>{selectedItem.content}</p>
                <h3>Objectifs :</h3>
                
                <p>{selectedItem.objectif}</p>
            </PureModal>


            <h2>Projets realisés</h2>
            <div className="slider-content">
                <button className="prev-button" onClick={prevSlide}></button>
                

                
                <div id='main' className="content-cards" style={styles} >
                   
                    {itemx2.map((item, index) => (

                        <div key={index}  className={`card-slider ${index === currentIndex ? 'active' : ''}`}>
                            {/* Affiche le contenu de ta card ici */}
                            <img className={`image-card`} src={item.image} alt="" />
                            <button className="btn-minia" onClick={() => clicklMultiple(item)}>{item.title}</button>
                        </div>
                    ))}
                   
                </div>
                <button className="next-button" onClick={nextSlide}></button>
            </div>
        </section>
    );
  }
  
  export default Slider;