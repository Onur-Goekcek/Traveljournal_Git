import { useState } from "react";
import haken from "./Picture/Grüner-Haken-klein.jpg";
import InfoPage from "./SavedInfoPage";

export default function SaveButton(props) {
  const [saveInput, setSave] = useState([]);
  const [newIndex, setNewIndex] = useState(1);

  const saveList = saveInput.map((save) => (
    <li className="speicher" key={saveInput.id} index={saveInput.id}>
      {save.titel}
      <div className="buttons-container">
        <button className="openButton" onClick={() =>openInfo(save.id)}>
          <img src={haken} className="Haken" />
        </button>
        <button className="deleteButton" onClick={() => deleteList(save.id)}>
          <img
            src="https://icon-library.com/images/delete-icon-png/delete-icon-png-12.jpg"
            className="Delete"
          />
        </button>
      </div>
    </li>
  ));

  function openInfo(e) {
    console.log(saveInput)
    const foundItem = saveInput.find((save) => save.id === e);
    const newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.write(`<h1>${foundItem.date}</h1>
    <p>${foundItem.inhalt}</p>`);
  }

  function changeSave() {
    setNewIndex((prevNewIndex) => prevNewIndex + 1);
    const newTitel = {
      id: newIndex,
      titel: props.titel,
      date: props.date,
      inhalt: props.inhalt,
    };
    console.log(props.date)
    setSave((prevSaveInput) => [...prevSaveInput, newTitel]);
  }

  function deleteList(e) {
    setSave((save) => save.filter((item) => item.id !== e));
    console.log(e);
  }

  return (
    <div className="speichern">
      <button id="savebutton" onClick={changeSave}>
        Speichern
      </button>
      <ul className="speicherfeld">{saveList}</ul>
    </div>
  );
}
