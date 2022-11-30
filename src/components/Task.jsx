import React from 'react';
import '../stylesheets/Task.css';

function Task({ id, handleCompleted, completed, task }) {

    return (
        <li className={completed ? `completed` : undefined}><input checked={completed} onChange={() => handleCompleted(id)} type="checkbox" /> <label>{task}</label></li>
    );
}

export default Task;