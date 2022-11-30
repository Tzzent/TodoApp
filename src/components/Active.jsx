import React, { useState } from 'react';
import Task from '../components/Task.jsx';

//Active.jsx uses the All.css styles


function Active({ tasks, handleClickAdd, handleCompleted }) {

    const sendInputText = (e) => {
        const input_task = document.querySelector('.input-task');
        e.preventDefault();
        handleClickAdd(input_task.value);
    }

    return (
        <div className='form-tasks'>
            <form> <input className='input-task' type='text' placeholder='Add details' /> <button onClick={(e) => sendInputText(e)}>Add</button> </form>

            <div className='container-tasks'>
                <ul>
                    {
                        tasks.map(task =>
                            !task.completed
                                ?
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    task={task.task}
                                    completed={task.completed}
                                    handleCompleted={handleCompleted} />
                                : undefined
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Active;