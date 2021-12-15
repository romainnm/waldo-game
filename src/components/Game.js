import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { MdOutlineTimer } from "react-icons/md";

export default function Game() {
  const {
    characters,
    setCharacters,
    levels,
    openDropdown,
    closeDropdown,
    showDropdown,
    alert,
    setAlert,
    currentLevel,
    /* setCurrentLevel, */
    startTimer,
    setStartTimer,
    gameTimer,
    setGamerTimer,
    gameStart,
    setGameStart,
    gameOver,
    setGameOver,
    finalTime,
    setFinalTime,
  } = useGlobalContext();
  const [clickPosition, setClickPosition] = useState({
    left: 0,
    top: 0,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const dropdownContainer = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(()=>{
    const handleResize = () => {
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  const clickLocation = (e) => {
    const xClickCoord =
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100;
    const yClickCoord =
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100;
    const clickCoord = { xClickCoord, yClickCoord };
    return clickCoord;
  };

  const updateClickPosition = (coordinates) => {
    const { xClickCoord, yClickCoord } = coordinates;
    const updatePositions = { left: xClickCoord, top: yClickCoord };
    setClickPosition(updatePositions);
  };

  const handleImageClick = (e) => {
    const coordinates = clickLocation(e);
    updateClickPosition(coordinates);
    openDropdown();
  };

  const dropdownPosition = (x, y) => {
    dropdownContainer.current.style.left = `${x}`;
    dropdownContainer.current.style.top = `${y}`;
  };
  const selectCharacter = (name) => {
    const newSelection = characters.find(
      (character) => character.name === name
    );
    setSelectedCharacter(newSelection);
  };

  const handleCharacterSelection = (e) => {
    selectCharacter(e.target.value);
    closeDropdown();
  };

  const checkCharacterPosition = () => {
    const { xChar, yChar } = selectedCharacter;
    const { left, top } = clickPosition;
    const checkX = left - 5 < xChar && xChar < left + 5;
    const checkY = top - 5 < yChar && yChar < top + 5;
    const checkXY = checkX && checkY;
    return checkXY;
  };

  const characterFound = () => {
    if (checkCharacterPosition()) {
      setShowAlert(true);
      handleAlert("success", `You found ${selectedCharacter.name}!`);
      setCharacters(
        characters.map((character) => {
          if (character.id === selectedCharacter.id) {
            return { ...character, found: true };
          }
          return character;
        })
      );
    } else {
      setShowAlert(true);
      handleAlert("danger", `That's not ${selectedCharacter.name}!`);
    }
  };

  const checkIsGameOver = () => {
    const isGameOver = characters.every((char) => char.found === true);
    if (isGameOver) {
      setGameStart(false);
      setGameOver(true);
      setFinalTime(gameTimer);
      setShowAlert(true);
      handleAlert("success", "Good job, you found everyone!");
    }
  };

  const handleAlert = (type, msg) => {
    setAlert({
      type: type,
      msgAlert: msg,
    });
  };

  const handleGameStart = () => {
    setGameStart(true);
    setStartTimer(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setAlert({ type: "", msgAlert: "" });
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  useEffect(() => {
    checkIsGameOver();
  }, [characters]);

  useEffect(() => {
    if (selectedCharacter !== null) {
      characterFound();
    }
  }, [selectedCharacter]);

  useEffect(() => {
    if (showDropdown) {
      dropdownPosition(
        clickPosition.left + 2 + "%",
        clickPosition.top - 15 + "%"
      );
    }
  }, [clickPosition]);

  useEffect(() => {
    if(gameStart){
      const timer = setInterval(() => {
        setGamerTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTimer]);

  if(gameStart){
    return (
      <>
        <header>
          <div className="top-header">
            <h1>Waldo Project</h1>
            <div className="remaining-characters__container">
              <h4 className="remaining-characters__title">
                Remaining characters
              </h4>
              <div className="remaining-characters__images">
                {characters.map((character) => {
                  const { id, name, image, found } = character;
                  return (
                    <img
                      key={id}
                      src={image}
                      alt={name}
                      className={`${found && "remaining-characters-found"}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </header>
        <section className="game__container">
          <div className="game__header">
            <h2>{levels[currentLevel].name}</h2>
            <div className="timer">
              <MdOutlineTimer />
              <h3 className="timer">{gameTimer}s</h3>
            </div>
          </div>
          {showAlert && (
            <div className={`alert alert-${alert.type}`}>
              <p>{alert.msgAlert}</p>
            </div>
          )}
          <div className="game-image__container">
            <img
              src={levels[currentLevel].image}
              alt={levels[currentLevel].name}
              onClick={(e) => handleImageClick(e)}
            />
            {showDropdown && (
              <div className="characters-dropdown" ref={dropdownContainer}>
                <h4>Select a character</h4>
                <form className="characters-selection">
                  {characters.map((character) => {
                    const { id, name, image } = character;
                    return (
                      <label key={id} className="character-label">
                        <input
                          type="radio"
                          name="character-label"
                          value={name}
                          onChange={(e) => handleCharacterSelection(e)}
                        />
                        <img src={image} alt={name} />
                        <p>{name}</p>
                      </label>
                    );
                  })}
                </form>
              </div>
            )}
          </div>
        </section>
      </>
    )}
    if(gameOver){
      return (
        <div className="modal">
          <h2>Level clear !</h2>
          <div className="clear-time">
            <p>clear time</p>
            <h3><MdOutlineTimer /> {finalTime}s</h3>
          </div>
          <p>Would you like to proceed to the next level?</p>
          <button>Next Level</button>
        </div>
      );
    }

    return(
   <div className="modal">
          <h2>Welcome to the Waldo project</h2>
          <h3>Instructions</h3>
          <p>
            Waldo, Wenda and Oddlaw are hiding again! Find them as quickly as
            possible
          </p>
          <button onClick={handleGameStart}>Start Game</button>
        </div>
  )
  }

  
  