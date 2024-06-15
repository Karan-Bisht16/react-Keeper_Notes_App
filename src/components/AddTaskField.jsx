import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function AddTaskField(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const titleField = document.getElementById("title-field");
    const contentField = document.getElementById("content-field");

    function updateIsClicked() {
        setIsClicked(true);
    }

    function updateTitle(event) {
        const { value } = event.target;
        setTitle(value);
    }

    function updateContent(event) {
        const { value } = event.target;
        setContent(value);
    }
    function shortcut(event) {
        if (event.shiftKey && event.keyCode === 13) {
            validateData();
        }
    }
    function validateData(event) {
        try {
            event.preventDefault();
        } catch (TypeError) { }
        if (title.trim() === "") {
            titleField.focus();
            return false;
        } else if (content.trim() === "") {
            contentField.focus();
            return false;
        }
        props.addNote(title, content);
        setTitle("");
        setContent("");
        titleField.focus();
    }

    return (
        <form className="add-task-section" onSubmit={validateData}>
            {isClicked && (
                <input id="title-field" onChange={updateTitle} name="title" placeholder="Title" value={title} />
            )}
            <textarea id="content-field" onClick={updateIsClicked} onChange={updateContent} onKeyDown={shortcut} name="content" placeholder="Take a note..." rows={isClicked ? 3 : 1} value={content} />
            <Zoom in={isClicked}>
                <Fab onClick={validateData}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    );
}

export default AddTaskField;
