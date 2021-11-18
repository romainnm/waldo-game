import React, { useState, useRef, useEffect } from 'react';
import {characterList, levelList} from '../data';

export default function Game() {
  const gameImage = useRef(null);
  const tooltip = useRef(null);
  const [level, setLevel] = useState(levelList[0]);
  const [characters, setCharacters] = useState(characterList)
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [characterInfos, setCharacterInfos] = useState('');
  const [clickCoord, setClickCoord] = useState({xClick:0, yClick:0});
  const [isCharacterFound, setIsCharacterFound] = useState(false);
  const [isTooltipOn, setIsTooltipOn] = useState(false) 
    



const checkCoordinates = () =>{
  const {naturalWidth, width} =  gameImage.current
  const ratio = width/naturalWidth
  const {xChar, yChar} = characterInfos;
  const {xClick, yClick} = clickCoord;  
  const checkXCoord = ((xClick-10) < (xChar*ratio)) && ((xChar*ratio) < (xClick+10));
  const checkYCoord = ((yClick-10) < (yChar*ratio)) && ((yChar*ratio) < (yClick+10));
  const isCoordCorrect = (checkXCoord && checkYCoord)
  return isCoordCorrect;
}
    
const handleClick = (e) => {
  setIsTooltipOn(false)
  setClickCoord({xClick:e.nativeEvent.offsetX, yClick:e.nativeEvent.offsetY})
  setIsTooltipOn(true);
  handleTooltipLocation();
} 

const handleTooltipLocation = () => {
  tooltip.current.style.top = `${clickCoord.yClick/2}px`;
  tooltip.current.style.left = `${clickCoord.xClick+20}px`;
}

const getSelectedCharacterInfos = () => {
  const newSelection = characters.find((char) => char.name === selectedCharacter)
    setCharacterInfos(newSelection)
}
const handleOnChange = (e) => {
  setIsCharacterFound(false);
  setSelectedCharacter(e.target.value)
}

// Handle window resize
useEffect(()=>{
  const handleResize = () => {
    checkCoordinates();
  } 
  window.addEventListener("resize", handleResize)
  return () => {
    window.removeEventListener("resize", handleResize);
  }
},[handleClick])
// Get selected character information
useEffect(()=>{
  getSelectedCharacterInfos();   
},[selectedCharacter]) 
//Check if character is found
useEffect(()=>{
  if(characterInfos !== undefined){
    setIsCharacterFound(checkCoordinates()); 
  } else{return}
},[clickCoord])

    return (
      <>
        <div className="game-container">
            <h2 className="current-level">{level.name}</h2>
              
              {isCharacterFound && 
                <h2>
                  Hey you found {characterInfos.name}!
                </h2>
              }
              
              <div className="game-image-container">
                <div ref={tooltip} className={`${
                  isTooltipOn ? "char-selection-tooltip show-tooltip" : "char-selection-tooltip"  
                }`}>
                  <h3 className="tooltip-title">Who did you find!?</h3>
                  <form className="char-selection">
                    {characters.map((character)=>{
                      const {id, name, image} = character;
                      return(
                        <label key={id} className="char-label">
                          <input type="radio" name="radio-char-list" value={name} onChange={handleOnChange}/>
                          <img src={image} alt={name} className="char-selection-image"/>
                          {name}
                        </label>
                      )
                    })}
                  </form>
                </div>
                <img src={level.image} alt={level.name} ref={gameImage} onClick={handleClick}/>
              </div>
            
        </div>
      </>
    )
}
