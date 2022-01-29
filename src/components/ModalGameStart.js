import { useGlobalContext } from "../context";

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
      </div>
    </main>
  );
}

export default ModalGameStart;
