import React from "react";
import { IoMdTrash } from 'react-icons/io';
import '../stylesheets/TaskCompleted.css';

function TaskCompleted({ id, handleCompleted, removeTask, completed, task }) {
    return (
        <div className='container-task-completed'>
            <li className={completed ? 'test completed' : 'test'}>
                <div className="input-container">
                    <input checked={completed} onChange={() => handleCompleted(id)} type="checkbox" />
                </div>
                <label>{task}</label>
            </li>
            <div onClick={() => removeTask(id)} className="icon-trash">
                <IoMdTrash size='25px' />
            </div>

        </div>
    );
}

export default TaskCompleted;