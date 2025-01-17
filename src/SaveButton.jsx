import { useState } from "react";

export default function SaveButton(props) {
  const [saveInput, setSave] = useState([{id:1, titel:"Hallo"}]);
  const [newIndex, setNewIndex] = useState(1);
  

  const deleteButton = (
    <button className="deleteButton" onClick={()=>deleteList(save)}>
      <img
        src="https://icon-library.com/images/delete-icon-png/delete-icon-png-12.jpg"
        className="Delete"
      />
    </button>
  );

  const saveList = saveInput.map((save) => (
    <li className="speicher" key={saveInput.id} index={saveInput.id}>
      {save.titel}
      <button className="deleteButton" onClick={()=>deleteList(save.id)}>
      <img
        src="https://icon-library.com/images/delete-icon-png/delete-icon-png-12.jpg"
        className="Delete"
      />
    </button>
    </li>
  ));

  function changeSave() {
    setNewIndex((prevNewIndex) => prevNewIndex+1)
    const newTitel = {
      id: newIndex,
      titel: props.titel,
    };
    setSave((prevSaveInput) => [...prevSaveInput, newTitel]);
  }

  function deleteList(e) {
    setSave((save) => save.filter((item) => item.id !== e));
    // setNewIndex((prevIndex) => prevIndex + 1);
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
