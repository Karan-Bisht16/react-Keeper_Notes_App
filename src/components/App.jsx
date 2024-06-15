import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import AddTaskField from "./AddTaskField";

function App() {
    const [notesArray, setNotesArray] = useState([]);

    function updateNotesArray(newTitle, newContent) {
        setNotesArray(prevNotesArray => {
            let newNoteObj = {
                title: newTitle,
                content: newContent
            }
            return [...prevNotesArray, newNoteObj];
        });
    }

    function deleteNote(index) {
        console.log(index);
        setNotesArray(prevNotesArray => {
            return prevNotesArray.filter((obj, i) => {
                return i != index
            });
        })
    }

    return (
        <div>
            <Heading />
            <AddTaskField
                addNote={updateNotesArray}
            />
            <div className="note-container">
                {notesArray.map((note, i) => (
                    <Note
                        key={i}
                        id={i}
                        title={note.title}
                        content={note.content}
                        deleteFunction={deleteNote}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;