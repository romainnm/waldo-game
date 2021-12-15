import { useGlobalContext } from "../context";

function CharacterDropdown({ handleCharacterSelection }) {
  
  const { characters, dropdownContainer } = useGlobalContext();


  return (
    <div className="characters-dropdown" ref={dropdownContainer}>
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

export default CharacterDropdown
