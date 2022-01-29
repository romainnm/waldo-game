import React, { useState, useEffect, useContext, useRef } from "react";
import levels from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /* === States === */
  const [levelSelected, setLevelSelected] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", msgAlert: "" });
  const [startTimer, setStartTimer] = useState(false);
  const [waitStartGame, setWaitStartGame] = useState(true);
  const [gameTimer, setGameTimer] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  const [finalTime, setFinalTime] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [clickPosition, setClickPosition] = useState({
    left: 0,
    top: 0,
  });
  const dropdownContainer = useRef(null);
  /* === Manage window === */
  // eslint-disable-next-line
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  /* === Initialize stage === */
  useEffect(() => {
    if (gameStart) {
      setCharacters(levels[levelSelected - 1].characters);
    }
    // eslint-disable-next-line
  }, [gameStart]);

  /* === Alert logics === */
  const handleAlert = (show, type, msg) => {
    setAlert({
      show: show,
      type: type,
      msgAlert: msg,
    });
  };

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        closeDropdown();
        setAlert({ ...alert, show: false });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  /* === Game Start & End logics === */
  // Start
  const handleGameStart = () => {
    setComingSoon(false);
    setWaitStartGame(false);
    setGameOver(false);
    setGameStart(true);
    setStartTimer(true);
  };
  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        setGameTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTimer]);
  // Game Over
  const checkIsGameOver = () => {
    const isGameOver = characters.every((char) => char.found === true);
    if (isGameOver) {
      setGameStart(false);
      setGameOver(true);
      setFinalTime(gameTimer);
      setStartTimer(false);
      setGameTimer(0);
      handleAlert(true, "success", "Good job, you found everyone!");
    }
  };
  useEffect(() => {
    if (!waitStartGame) {
      checkIsGameOver();
    }
    // eslint-disable-next-line
  }, [characters]);
  const nextLevel = () => {
    const newLevel = levelSelected + 1;
    if (newLevel > 2) {
      setComingSoon(true);
      setGameStart(false);
      setWaitStartGame(false);
      setGameOver(false);
    } else {
      setLevelSelected(newLevel);
      handleGameStart();
    }
  };
  const playAgain = () => {
    const newLevel = levelSelected;
    setLevelSelected(newLevel);
    handleGameStart();
  };
  const restart = () => {
    setLevelSelected(1);
    setWaitStartGame(true);
  };

  /* === Click & coordintates logics === */
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

  /* === Dropdown logics (character selection on click) === */
  const openDropdown = () => {
    setShowDropdown(true);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
  };
  // update the dropdown position onclick
  const dropdownPosition = (refContainer, x, y) => {
    refContainer.current.style.left = `${x}`;
    refContainer.current.style.top = `${y}`;
  };
  useEffect(() => {
    if (showDropdown) {
      dropdownPosition(
        dropdownContainer,
        clickPosition.left + 2 + "%",
        clickPosition.top - 5 + "%"
      );
    }
    // eslint-disable-next-line
  }, [clickPosition]);

  /* === Character selection from Dropdown logics === */
  const selectCharacter = (name) => {
    const newSelection = characters.find(
      (character) => character.name === name
    );
    setSelectedCharacter(newSelection);
  };
  const handleCharacterSelection = (character) => {
    selectCharacter(character.value);
  };
  // check character position & if it is found
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
      if (!selectedCharacter.found) {
        handleAlert(true, "success", `You found ${selectedCharacter.name}!`);
      } else {
        handleAlert(true, "success", `Already found!`);
      }
      setCharacters(
        characters.map((character) => {
          if (character.id === selectedCharacter.id) {
            return { ...character, found: true };
          }
          return character;
        })
      );
    }
    if (!checkCharacterPosition()) {
      if (selectedCharacter.found) {
        handleAlert(
          true,
          "danger",
          `${selectedCharacter.name} was already found!`
        );
      } else {
        handleAlert(true, "danger", `That's not ${selectedCharacter.name}!`);
      }
      setSelectedCharacter(null);
    }
  };
  useEffect(() => {
    if (selectedCharacter !== null) {
      characterFound();
    }
    // eslint-disable-next-line
  }, [selectedCharacter]);

  return (
    <AppContext.Provider
      value={{
        characters,
        alert,
        showDropdown,
        dropdownContainer,
        waitStartGame,
        gameOver,
        gameTimer,
        finalTime,
        nextLevel,
        levelSelected,
        handleGameStart,
        handleCharacterSelection,
        handleImageClick,
        selectedCharacter,
        playAgain,
        restart,
        comingSoon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
