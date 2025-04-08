import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    // console.log(data.tasks);
    
    return (
        <div id='tasklist' className='h-[55%] w-full rounded-lg mt-10 flex items-center justify-start py-6 gap-5 overflow-x-auto flex-nowrap'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem}/>
                }
                else if (elem.newTask) {
                    return <NewTask key={idx} data={elem}/>
                }
                else if (elem.completed) {
                    return <CompletedTask key={idx} data={elem} />
                }
                else if (elem.failed) {
                    return <FailedTask key={idx} data={elem}/>
                }
            })}
        </div>
    )
}

export default TaskList
