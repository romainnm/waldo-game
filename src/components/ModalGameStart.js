import { useGlobalContext } from "../context";
// Components
import Leaderboard from "./Leaderboard";

function ModalGameStart() {
  const { handleGameStart } = useGlobalContext();
  return (
    <main>
      <div className="modal">
        <h2>Welcome to the Waldo project</h2>
        <h3>Instructions</h3>
        <p>
          Waldo, Wenda and Oddlaw are hiding again! Find them as quickly as
          possible
        </p>
        <button onClick={handleGameStart}>Start Game</button>
        <h1 className="title-top">Top 10 players</h1>
        <div className="leaderboards-container">
          <div className="leaderboard">
            <Leaderboard level={1} />
          </div>
          <div className="leaderboard">
            <Leaderboard level={2} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ModalGameStart;
