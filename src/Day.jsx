import Stunda from "./Stunda";
import styles from "./Day.module.css";

function Day(props) {
  const stunduSarakstsJSX = props.stundas.map((stunda, indekss) => {
    return (
      <table className={styles.stunda}>
        <Stunda key={indekss} name={stunda} />
      </table>
    );
  });
  return (
    <>
      <table className={styles.diena}>
        <p>sodien ir {props.nosaukums}</p>
      </table>

      <ol>{stunduSarakstsJSX}</ol>
    </>
  );
}

// .map() - iet cauri visiem masiva ...
// elementiem, bet arī atgriež to ko prasa
// .forEach() - iet cauri visiem masiva elementiem, bet neko netagriež

export default Day;
