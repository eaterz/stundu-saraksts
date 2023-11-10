import Stunda from "./Stunda";

function Day(props) {
  const stunduSarakstsJSX = props.stundas.map((stunda, indekss) => {
    return <Stunda key={indekss} name={stunda} />;
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
