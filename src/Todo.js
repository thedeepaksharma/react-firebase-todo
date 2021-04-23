import React, { useState } from 'react';
import './App.css';
import { Modal } from '@material-ui/core';
import db from "./firebase";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection("todos").doc(props.todo.id).set({
            todo: input
        }, { merge: true });

        setOpen(false);
    }

    return (
        <>
        <Modal
        open = {open}
        onClose = {e => setOpen(false)} 
        >
            <div className={classes.paper}>
                <h1>I'm a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                <button onClick={updateTodo}>Update Todo</button>
            </div>         
        </Modal>
        <div>
            <li>{props.todo.todo}</li>
            <button onClick={e => setOpen(true)}>Edit</button>
            <button onClick={event => {
                db.collection("todos").doc(props.todo.id).delete();
            }}>Delete Me</button>
        </div>
        </>
    )
}

export default Todo
