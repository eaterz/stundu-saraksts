import Stunda from "./stundas";

function Day(props) {
  return (
    <>
      <p>sodien ir {props.nosaukums}</p>
      <ol>
        <Stunda name={props.stundas[0]} />
        <Stunda name={props.stundas[1]} />
        <Stunda name={props.stundas[2]} />
        <Stunda name={props.stundas[3]} />
      </ol>
    </>
  );
}
export default Day;
