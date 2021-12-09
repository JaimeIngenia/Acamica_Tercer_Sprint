import { useState } from "react";
import Busqueda from "./components/busqueda/Busqueda";
import Header from "./components/header/Header";
import Resultado from "./components/resultado/Resultado";
import styles from "./App.module.css"



function App() {
  const [darkMode,setDarkMode]=useState(true)
  const [clickSugerido,setClickSugerido]=useState([])
  const [trending,setTrending]=useState([])
  const [breaks,setBreaks]=useState(false);
  return (
    <div className={ !darkMode? styles.AppDark : styles.AppLigth }>
      <Header 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <Busqueda 
      clickSugerido={clickSugerido}
      setClickSugerido={setClickSugerido}
      setTrending={setTrending}
      trending={trending}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      setBreaks={setBreaks}
      breaks={breaks}

      />
      <Resultado
      clickSugerido={clickSugerido}
      setClickSugerido={setClickSugerido}
      setTrending={setTrending}
      trending={trending}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      setBreaks={setBreaks}
      breaks={breaks}
      />
    </div>
  );
}

export default App;
