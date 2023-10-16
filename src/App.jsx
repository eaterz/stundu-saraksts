import Day from "./Day";
import "./App.jsx";
import styles from "./App.module.css";

function App() {
  const visuDienuStunduSaraksts = [
    {
      diena: "Pirmdiena",
      stundas: [
        "Krievu valoda	",
        "Sociālās zinības un vēsture",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
      ],
    },
    {
      diena: "Otrdiena",
      stundas: [
        "Sociālās zinības un vēsture",
        "Dabaszinības	",
        "Matemātika	",
        "Sports",
      ],
    },
    {
      diena: "Trešdiena",
      stundas: ["datortikli", "datortikli", "programmēšana", "programmēšana"],
    },
    {
      diena: "Ceturdiena",
      stundas: [
        "programmēšana",
        "matematika",
        "latviesvaloda",
        "valodas kultura",
      ],
    },
    {
      diena: "Piekdiena",
      stundas: ["anglu val", "vesture"],
    },
  ];

  const vissSarakstsJSX = visuDienuStunduSaraksts.map((diena) => {
    return (
      <table className={styles.table}>
        <Day
          key={diena.diena}
          nosaukums={diena.diena}
          stundas={diena.stundas}
        />
      </table>
    );
  });
  return (
    <>
      <h1 className={styles.virs}>Stundu saraksts</h1>
      {vissSarakstsJSX}
    </>
  );
}

export default App;
