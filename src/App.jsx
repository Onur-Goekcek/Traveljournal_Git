import { useState } from "react";
import "./App.css";
import Text from "./Texte";
import TextFeld from "./TextFelder";
import SaveButton from "./SaveButton";
import HinterGrundFeld from "./SpeicherGrid";

function App() {
  const [titelText, setTiteltext] = useState("")
  
  function TitelChange(event){
    setTiteltext(event.target.value)
  }

  return (
    <div id="felder">
      <Text />
      <input
        className="textfelder"
        placeholder="Titel"
        onChange={TitelChange}
        value={titelText}
      />
      <input className="textfelder" placeholder="Datum" />
      <textarea className="textfelder textfeldergroß"  placeholder="Inhalt" />
      <SaveButton 
      titel = {titelText}/>
      <HinterGrundFeld/>
    </div>
  );
}

export default App;
