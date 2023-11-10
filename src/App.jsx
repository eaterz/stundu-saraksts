import Day from "./Day";
import "./App.jsx";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [StunduSaraksts, setStunduSaraksts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const respons = await fetch(
        "https://cheese-cake.onthewifi.com/api/lessons"
      );
      const data = await respons.json();
      console.log(data);
      setStunduSaraksts(data.IPa22);
      setLoading(false);
    }
    getData();
  }, []);

  const vissSarakstsJSX = StunduSaraksts.map((diena, dienas) => {
    return <Day key={dienas} stundas={diena.classes} />;
  });
  return (
    <>
      <h1 className={styles.virs}>Stundu saraksts</h1>
      {loading ? <p>laoding...</p> : vissSarakstsJSX}
    </>
  );
}

export default App;
