export const Board = ({ index,task,taskList,setTaskList }) => {
    const handleDelete = ()=>{
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((currentTasks => currentTasks.filter(todo=> index===removeIndex)))

    }
    return (
            <div className="max-w-md  rounded-xl text-center text-lg border flex flex-col items-center justify-center max-w-md ">
                <p>{task}</p>
                <button className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4 mb-4 " onClick={handleDelete}>
                    Delete
                </button>
            </div>
    )
}