import { useState } from "react";
import { useGlobalContext } from "../context";
// icons
import { MdOutlineTimer } from "react-icons/md";
//Components
import Stopwatch from "./Stopwatch";
import Leaderboard from "./Leaderboard";

function ModalGameOver() {
  const {
    finalTime,
    nextLevel,
    levelSelected,
    playAgain,
    topTen,
    addLeaderboard,
  } = useGlobalContext();

  const [playerName, setPlayerName] = useState("");
  return (
    <main>
      <div className="modal gameover-modal">
        <h2>Level {levelSelected} clear !</h2>
        <div className="clear-time">
          <p>CLEARING TIME</p>
          <h3>
            <MdOutlineTimer /> <Stopwatch timer={parseInt(finalTime)} />
          </h3>
          {topTen && (
            <>
              <form
                className="form-topten"
                onSubmit={(e) => addLeaderboard(e, playerName, finalTime)}
              >
                <h3 className="form-title">You made it to the top 10!</h3>
                <p>
                  Would you like to enter your name to enter the leaderboard?
                </p>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="input-leaderboard"
                  placeholder="Enter name"
                />
                <button type="submit" className="btn-leaderboard">
                  submit
                </button>
              </form>
            </>
          )}
        </div>

        <div className="button-container">
          <button type="button" onClick={playAgain}>
            Play Again
          </button>
          <button type="button" className="btn-next" onClick={nextLevel}>
            Next Level
          </button>
        </div>
        <h1 className="title-top">Top 10 players</h1>

        <div className="leaderboard">
          <Leaderboard level={levelSelected} />
        </div>
      </div>
    </main>
  );
}

export default ModalGameOver;
