import React, { useState } from 'react';
import '../stylesheets/All.css';
import Task from './Task';

function All({ tasks, handleClickAdd, handleCompleted }) {

    const sendInputText = (e) => {
        const input_task = document.querySelector('.input-task');
        e.preventDefault();
        handleClickAdd(input_task.value);
    }

    return (
        <div className='form-tasks'>
            <form>
                <input className='input-task' type='text' placeholder='Add details' /> <button onClick={(e) => sendInputText(e)}>Add</button>
            </form>
            <div className='container-tasks'>
                <ul>
                    {
                        tasks.map(task =>
                            <Task
                                key={task.id}
                                id={task.id}
                                task={task.task}
                                completed={task.completed}
                                handleCompleted={handleCompleted} />
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default All;