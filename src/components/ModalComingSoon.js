import { useGlobalContext } from "../context";

function ModalComingSoon() {
  const { restart } = useGlobalContext();
  return (
    <main>
      <div className="modal">
        <h2>Coming Soon!</h2>
        <h3>We are currently working on the next levels!</h3>
        <button type="button" onClick={restart}>
          Restart
        </button>
      </div>
    </main>
  );
}

export default ModalComingSoon;
