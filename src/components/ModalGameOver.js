import React from "react";
import { useGlobalContext } from "../context";
import { MdOutlineTimer } from "react-icons/md";

function ModalGameOver() {
  const { finalTime } = useGlobalContext();
  return (
    <div className="modal">
      <h2>Level clear !</h2>
      <div className="clear-time">
        <p>clear time</p>
        <h3>
          <MdOutlineTimer /> {finalTime}s
        </h3>
      </div>
      <p>Would you like to proceed to the next level?</p>
      <button>Next Level</button>
    </div>
  );
}

export default ModalGameOver;
