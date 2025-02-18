import { useState } from "react"

export const InputForm = ({taskList,setTaskList})=>{
    const [task,setTask] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        setTaskList([...taskList,task]);
        setTask("");
    }
    return (
        <>
        <form className="flex flex-row items-center gap-3">
            <input type="text" placeholder="Enter task" 
            className="border rounded-lg px-2 text-lg py-1.5" 
            value = {task} onChange={(event)=>{setTask(event.target.value)}}></input>
            <button className='bg-violet-500 font-semibold text-white py-1.5 px-4 rounded hover:opacity-70' 
            onClick={handleSubmit}>Add</button>
        </form>
        </>
    )
}