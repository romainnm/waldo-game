import React, {useState, useContext} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [isModalOn, setModalOn] = useState(true);
    const [isTimerActive, setIsTimerActive] = useState(false)

    const startGame = () => {
        setIsGameStarted(true)
        setModalOn(false)
        setIsTimerActive(true)
    }
    const endGame = () => {
        setIsGameFinished(true)
    }
    const openModal = () => {
        setModalOn(true)
    }
    const handleTimer = () => {
        setIsTimerActive(true);
    }

    return(
        <AppContext.Provider
            value={{
                isGameFinished,
                isGameStarted,
                isModalOn,
                startGame,
                endGame,
                openModal,
                isTimerActive,
                handleTimer
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export {AppContext, AppProvider}