const Stopwatch = ({ timer }) => {
  return (
    <>
      {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
      {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
      {("0" + ((timer / 10) % 100)).slice(-2)}
    </>
  );
};

export default Stopwatch;
