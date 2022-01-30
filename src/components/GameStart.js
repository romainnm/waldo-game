import React from "react";
import { useGlobalContext } from "../context";
// Icons
import { MdOutlineTimer } from "react-icons/md";
// Components
import Header from "./Header";
import CharacterDropdown from "./CharacterDropdown";
import Stopwatch from "./Stopwatch";
// Datas
import levels from "../data";

const GameStart = () => {
  const {
    showDropdown,
    levelSelected,
    handleCharacterSelection,
    handleImageClick,
    gameTimer,
  } = useGlobalContext();

  return (
    <main>
      <Header />
      <section className="game__container">
        <div className="game__header">
          <h2>{levels[levelSelected - 1].name}</h2>
          <div className="timer">
            <MdOutlineTimer />
            <h3 className="timer">

            <Stopwatch timer={gameTimer} />
            </h3>
          </div>
        </div>
        <div className="game-image__container">
          <img
            src={levels[levelSelected - 1].image}
            alt={levels[levelSelected - 1].name}
            onClick={(e) => handleImageClick(e)}
          />
          {showDropdown && (
            <CharacterDropdown
              handleCharacterSelection={(e) =>
                handleCharacterSelection(e.target)
              }
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default GameStart;
