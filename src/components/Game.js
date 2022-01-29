import { useGlobalContext } from "../context";

// Components
import GameStart from "./GameStart";
import ModalGameOver from "./ModalGameOver";
import ModalGameStart from "./ModalGameStart";
import ModalComingSoon from "./ModalComingSoon";

export default function Game() {
  const { waitStartGame, gameOver, handleGameStart, comingSoon } =
    useGlobalContext();

  if (waitStartGame) {
    return <ModalGameStart handleGameStart={handleGameStart} />;
  }
  if (gameOver) {
    return <ModalGameOver />;
  }
  if (comingSoon) {
    return <ModalComingSoon />;
  }

  return <GameStart />;
}
