import React from 'react'
import { characterList, levelList } from '../data'
import { useGlobalContext } from '../context';

export default function Modal() {
    const {isModalOn, startGame } = useGlobalContext();
    
    return (
        <div className={`${
            isModalOn ? 'modal-overlay' : "modal-overlay hide-modal"
        }`}>
            <h1>Waldo & Co</h1>
            <p>Waldo and his friends are hidding. Find them!</p>
            
            <section className="modal-section">
                <h2>You will have to find</h2>
                <div className="modal-image-list">

                </div>
                {characterList.map((character)=>{
                    const {id, name, image} = character;
                    return(
                        <img key={id} src={image} alt={name} className="modal-image"/>
                    )
                })}
                <h3>{levelList[0].name}</h3>
                <button onClick={startGame}>Start Game</button>
            </section>
        </div>
    )
}
