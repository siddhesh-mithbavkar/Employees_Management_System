import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='bg-yellow-600 h-full w-[300px] rounded-xl flex-shrink-0 p-3'>
            <div className='flex justify-between items-center mb-3'>
                <h3 className='text-lg bg-red-600 px-2 py-1 rounded-lg'>{data.category}</h3>
                <h4 className='text-sm bg-green-500 px-2 py-1 rounded-lg'>{data.date}</h4>
            </div>
            <h2 className='text-2xl font-bold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='mt-3'>
                <button className='bg-yellow-800 text-lg w-full'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
