import './App.css';
import All from './components/All.jsx';
import Active from './components/Active';
import Completed from './components/Completed.jsx';
import './stylesheets/Nav.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [active, setActive] = useState('1'); //State. to control the nav buttons

  // Function to control the stateActive
  const handleClickBTN = (e) => {
    e.preventDefault();
    setActive(e.target.id);
  }

  // ----------Functions for forms----------
  const [tasks, setTasks] = useState([]);

  const handleClickAdd = (text) => {
    if (text == '') {
      alert('Please write a detail 😃');
    } else {
      const task = {
        id: uuidv4(),
        task: text,
        completed: false
      };
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  const handleCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => {
      return task.id != id;
    })
    setTasks(updatedTasks);
  }

  const removeAllCompleted = (e) => {
    e.preventDefault();

    const updatedTasks = tasks.filter(task => {
      return !task.completed;
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <div className='main'>

        <div className='container-todo'>
          <div className='title'> <h1>#todo</h1> </div>
          <div className='todo'>
            <div className='nav'>
              <ul>
                <li><button onClick={(e) => handleClickBTN(e)} className={active == '1' ? 'active' : undefined} id='1'>All</button></li>
                <li><button onClick={(e) => handleClickBTN(e)} className={active == '2' ? 'active' : undefined} id='2'>Active</button></li>
                <li><button onClick={(e) => handleClickBTN(e)} className={active == '3' ? 'active' : undefined} id='3'>Completed</button></li>
              </ul>
            </div >
            <div className='container-form'>
              
              {
                active == ('1')
                  ? <All
                    tasks={tasks}
                    handleClickAdd={handleClickAdd}
                    handleCompleted={handleCompleted} />
                  : active == ('2')
                    ? <Active
                      tasks={tasks}
                      handleClickAdd={handleClickAdd}
                      handleCompleted={handleCompleted} />
                    : <Completed
                      tasks={tasks}
                      handleCompleted={handleCompleted}
                      removeTask={removeTask}
                      removeAllCompleted={removeAllCompleted} />
              }

            </div>


          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
