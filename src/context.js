import React, { useState, useContext } from "react";
import { characterList } from "./data";
import { levelList } from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [characters, setCharacters] = useState(characterList);
  const [levels, setLevels] = useState(levelList);
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState({ type: "", msgAlert: "" });
  const [currentLevel, setCurrentLevel] = useState(0);
  const [startTimer, setStartTimer] = useState(true);
  const [gameTimer, setGamerTimer] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        characters,
        setCharacters,
        levels,
        setLevels,
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
