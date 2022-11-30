import React from 'react';
import '../stylesheets/Completed.css';
import { IoMdTrash } from 'react-icons/io';
import TaskCompleted from './TaskCompleted';

function Completed({ tasks, handleCompleted, removeTask, removeAllCompleted }) {
    return (
        <div>
            {
                tasks.map(task => (
                    task.completed
                        ? <TaskCompleted
                            key={task.id}
                            id={task.id}
                            task={task.task}
                            completed={task.completed}
                            handleCompleted={handleCompleted}
                            removeTask={removeTask} />
                        : undefined

                ))

            }
            <div className='btn-clearAll'> <button onClick={(e) => removeAllCompleted(e)}><IoMdTrash />delete all</button></div>
        </div>
    );
}


export default Completed;