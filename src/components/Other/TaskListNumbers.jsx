import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className="rounded-xl bg-green-500 px-4 py-2 w-full">
            <h2 className="font-bold text-3xl">{data.taskNumbers.active}</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className="rounded-xl bg-orange-500 px-4 py-2 w-full">
            <h2 className="font-bold text-3xl">{data.taskNumbers.newTask}</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className="rounded-xl bg-yellow-500 px-4 py-2 w-full">
            <h2 className="font-bold text-3xl">{data.taskNumbers.completed}</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className="rounded-xl bg-blue-500 px-4 py-2 w-full">
            <h2 className="font-bold text-3xl">{data.taskNumbers.failed}</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className="rounded-xl bg-violet-500 px-4 py-2 w-full">
            <h2 className="font-bold text-3xl">{data.taskNumbers.total}</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
