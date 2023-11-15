import React, { useState } from 'react';
import './style.css';

let taskId = 0;

export default function App() {
  const [nametask, setNametask] = useState('')
  const [task, setTask] = useState([]);

  return (
    <div className="app__container">
      <h1>TALLER MADAFACKA CUSTOMS</h1>
      <h2>Orden de trabajo</h2>
      <h3>Datos del cliente:</h3>
      <div className="customer__data">
        <form>
          <label>Nombre y apellidos:
            <input type="text" name="name" />
          </label>
          <label>Dirección:
            <input type="text" name="name" />
          </label>
          <label>Tlf de contacto:
            <input type="text" name="name" />
          </label>  
        </form>
      </div>
      <h3>Datos de la motocicleta:</h3>
      <div className="motorcycle__data">
        <form>
          <div className="marcaYmodelo"> 
            <label>Marca:
              <input type="text" name="name" />
            </label>
            <label>Modelo:
              <input type="text" name="name" />
            </label>
          </div>
          <div className="dateAndKlms">
            <label>Año:
              <input type="text" name="name" />
            </label>
            <label>Kilómetros:
              <input type="text" name="name" />
            </label>
          </div>
        </form>
      </div>  
      <h3><u>Listado de tareas a realizar:</u></h3>
      <div className="addTask__container">
      <input className="inputTask" value={nametask}
        onChange={e => setNametask(e.target.value)}
      />
      <button onClick={() => 
        setTask([...task,
        { id: taskId++, nametask: nametask }
        ])} className="myButton">Añadir tarea
      </button>
      </div>  
      <ul className="taskList">
        {task.map(taskItem => (
          <li key={taskItem.id}>
            {taskItem.nametask}{' '}
            <button onClick={() => {
              setTask(task.filter(a =>
                a.id !== taskItem.id
              ));
            }} className="deleteButton">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}