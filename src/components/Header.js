import { useGlobalContext } from "../context";

const Header = () => {
  const { characters } = useGlobalContext();
  return (
    <header>
      <div className="top-header">
        <h1>Waldo Project</h1>
        <div className="remaining-characters__container">
          <h4 className="remaining-characters__title">Remaining characters</h4>
          <div className="remaining-characters__images">
            {characters.map((character) => {
              const { id, name, image, found } = character;
              return (
                <img
                  key={id}
                  src={image}
                  alt={name}
                  className={`${found && "remaining-characters-found"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
