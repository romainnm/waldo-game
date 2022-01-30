import { useGlobalContext } from "../context";
//Components
import Stopwatch from "./Stopwatch";
//icons
import { MdOutlineTimer } from "react-icons/md";
const Leaderboard = ({ level }) => {
  const { loading, getTopTen } = useGlobalContext();
  const topPlayers = getTopTen(level);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div>
      <h2>Level {level}</h2>
      <ol>
        {topPlayers
          .map((player, index) => {
            const { name, time } = player;
            return (
              <li key={index}>
                <div className="center">
                  <span className="bold">{name}~</span>
                  <Stopwatch timer={parseInt(time)} />
                  <MdOutlineTimer />
                </div>
              </li>
            );
          })
          .slice(0, 10)}
      </ol>
    </div>
  );
};

export default Leaderboard;
