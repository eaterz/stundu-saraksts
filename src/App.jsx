import Day from "./Day";

function App() {
  const pirmdienStundas = [
    "Krievu valoda	",
    "Sociālās zinības un vēsture",
    "Sistēmu programmēšana",
    "Sistēmu programmēšana",
  ];
  const otrdienStundas = [
    "Sociālās zinības un vēsture",
    "Dabaszinības	",
    "Matemātika	",
    "Sports",
  ];
  const tresdienasStundas = [
    "datortikli",
    "datortikli",
    "programmēšana",
    "programmēšana",
  ];
  const ceturdienasStundas = [
    "programmēšana",
    "matematika",
    "latviesvaloda",
    "valodas kultura",
  ];
  const piekdienStundas = ["anglu val", "vesture", " ", " "];
  return (
    <>
      <Day nosaukums="pirmdien" stundas={pirmdienStundas} />
      <Day nosaukums="otrdien" stundas={otrdienStundas} />
      <Day nosaukums="trešdiena" stundas={tresdienasStundas} />
      <Day nosaukums="ceturdiena" stundas={ceturdienasStundas} />
      <Day nosaukums="piekdiena" stundas={piekdienStundas} />
    </>
  );
}

export default App;
