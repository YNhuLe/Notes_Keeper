import React from "react";
import Heading from "./Header";
import Footing from "./Footer";
import Note from "./Note";
import notes from "../note";

function App() {
  return (
    <div>
      <Heading />
      {/* <Note /> */}
      {notes.map((eachNote) => (
        <Note
          key={eachNote.id}
          title={eachNote.title}
          content={eachNote.content}
        />
      ))}
      <Footing />
    </div>
  );
}

export default App;
