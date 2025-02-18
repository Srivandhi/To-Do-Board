
import './App.css';
import { InputForm } from './components/InputFrom'
import { useState } from 'react';
import { Board } from './components/Board';

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className='px-12'>
      <div className="App flex flex-col items-center justify-center py-8 gap-4">
        <h1 className=' font-semibold text-xl '>Todo Board</h1>

        <InputForm taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="flex felx-col gap-4 sm:grid grid-cols-3 px-4 sm:px-4 md:px-8 md:px-10 lg:px-12">
        {
          taskList.map((task, index) =>
            <Board
              key={index}
              index = {index}
              task={task}
              taskList = {taskList}
              setTaskList = {setTaskList}
            />
          )
        }
      </div>

    </div>

  );
}

export default App;
