import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { MdOutlineTimer } from "react-icons/md";

export default function Game() {
  const {
    characters,
    setCharacters,
    levels,
    openModal,
    closeModal,
    showModal,
    alert,
    setAlert,
    currentLevel,
    setCurrentLevel,
    startTimer,
    setStartTimer,
    gameTimer,
    setGamerTimer,
  } = useGlobalContext();
  const [clickPosition, setClickPosition] = useState({
    left: 0,
    top: 0,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const modalContainer = useRef(null);

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
    //setSelectedCharacter({})
    const coordinates = clickLocation(e);
    updateClickPosition(coordinates);
    openModal();
  };

  const modalPosition = (x, y) => {
    modalContainer.current.style.left = `${x}`;
    modalContainer.current.style.top = `${y}`;
  };
  const selectCharacter = (name) => {
    const newSelection = characters.find(
      (character) => character.name === name
    );
    setSelectedCharacter(newSelection);
  };

  const handleCharacterSelection = (e) => {
    selectCharacter(e.target.value);
    closeModal();
    //Check function
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
    if (showModal) {
      modalPosition(clickPosition.left + 2 + "%", clickPosition.top - 15 + "%");
    }
  }, [clickPosition]);

  useEffect(() => {
    setStartTimer(true);
    const timer = setInterval(() => {
      setGamerTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
          {showModal && (
            <div className="characters-modal" ref={modalContainer}>
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
  );
}
