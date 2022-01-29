import { useGlobalContext } from "../context";
// icons
import { MdOutlineTimer } from "react-icons/md";

function ModalGameOver() {
  const { finalTime, nextLevel, levelSelected, playAgain } = useGlobalContext();
  return (
    <main>
      <div className="modal gameover-modal">
        <h2>Level {levelSelected} clear !</h2>
        <div className="clear-time">
          <p>CLEARING TIME</p>
          <h3>
            <MdOutlineTimer /> {finalTime}s
          </h3>
        </div>
        <p>Would you like to proceed to the next level?</p>
        <button type="button" onClick={nextLevel}>
          Next Level
        </button>
        <button type="button" className="btn-again" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </main>
  );
}

export default ModalGameOver;
