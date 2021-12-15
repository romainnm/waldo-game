import React, { useState, useContext, useRef } from "react";
import { characterList } from "./data";
import { levelList } from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [characters, setCharacters] = useState(characterList);
  const [levels, setLevels] = useState(levelList);
  const [showDropdown, setShowDropdown] = useState(false);
  const [alert, setAlert] = useState({ type: "", msgAlert: "" });
  const [currentLevel, setCurrentLevel] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [gameTimer, setGamerTimer] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [finalTime, setFinalTime] = useState(0);
  const dropdownContainer = useRef(null);

  const openDropdown = () => {
    setShowDropdown(true);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <AppContext.Provider
      value={{
        characters,
        setCharacters,
        levels,
        setLevels,
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
        dropdownContainer,
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
