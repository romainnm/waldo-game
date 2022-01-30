import { useGlobalContext } from "../context";
//Components
import AlertsGame from "./AlertsGame";
//icons
import { GrFormClose } from "react-icons/gr";

function CharacterDropdown({ handleCharacterSelection }) {
  const { characters, dropdownContainer, alert, closeDropdown } =
    useGlobalContext();

  return (
    <div className="characters-dropdown" ref={dropdownContainer}>
      {alert.show && <AlertsGame />}
      <button type="button" className="close-btn" onClick={closeDropdown}>
        <GrFormClose />
      </button>
      <h4>Select a character</h4>
      <form className="characters-selection">
        {characters.map((character) => {
          const { id, name, image } = character;
          return (
            <label key={id} className="character-label">
              <input
                type="radio"
                name="character-label"
                value={name}
                onChange={(e) => handleCharacterSelection(e)}
              />
              <img src={image} alt={name} />
              <p>{name}</p>
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default CharacterDropdown;
