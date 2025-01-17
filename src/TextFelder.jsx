import { useState } from "react";

export default function TextFeld() {
  const [infoText, setInfotext] = useState("")
  
  function TitelChange(event){
    setInfotext(event.target.value)
  }

  return (
    <div id="felder">
      <input
        className="textfelder"
        placeholder="Titel"
        onChange={TitelChange}
        value={infoText}
      />
      <input className="textfelder" placeholder="Datum" />
      <textarea className="textfelder textfeldergroß"  placeholder="Inhalt" />
      <p>hallo</p>
    </div>
  );
}

