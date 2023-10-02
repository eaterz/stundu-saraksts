import Stunda from "./stundas";

function Day(props) {
  const stunduSarakstsJSX = props.stundas.map((stunda) => {
    return <Stunda name={stunda} />;
  });
  return (
    <>
      <p>sodien ir {props.nosaukums}</p>
      <ol>{stunduSarakstsJSX}</ol>
    </>
  );
}

// .map() - iet cauri visiem masiva ...
// elementiem, bet arī atgriež to ko prasa
// .forEach() - iet cauri visiem masiva elementiem, bet neko netagriež

export default Day;
