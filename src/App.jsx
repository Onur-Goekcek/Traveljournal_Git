import { useState } from "react";
import "./App.css";
import Text from "./Texte";
import TextFeld from "./TextFelder";
import SaveButton from "./SaveButton";


function App() {
  const [titelText, setTiteltext] = useState("");
  const [dateText, setDatetext] = useState("");
  const [inhaltText, setInhalttext] = useState("");

  function inhaltChange(event) {
    setInhalttext(event.target.value);
  }

  function dateChange(event) {
    setDatetext(event.target.value);
  }

  function TitelChange(event) {
    setTiteltext(event.target.value);
  }

  return (
    <div id="felder">
      <Text />
      <input
        className = "textfelder"
        placeholder = "Titel"
        onChange = {TitelChange}
        value = {titelText}
      />
      <input
        className = "textfelder"
        placeholder = "Datum"
        onChange = {dateChange}
        value = {dateText}
      />
      <textarea
        className="textfelder textfeldergroß"
        placeholder="Inhalt" 
        onChange = {inhaltChange}
        value = {inhaltText}
      />
      <SaveButton 
      titel = {titelText} 
      date = {dateText}
      inhalt = {inhaltText}
      />
    </div>
  );
}

export default App;
