import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setuserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')


    const [newtask, setnewtask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        setnewtask({ taskTitle, date, assignTo, category, description, active: false, failed: false, newTask: true, completed: false })

        const data = userData

        console.log(data);


        data.forEach((e) => {
            // console.log(e.firstName)
            if (assignTo == e.firstName) {
                e.tasks.push(newtask)
            }
        })

        setuserData(data)

        setTaskTitle('')
        setDate('')
        setassignTo('')
        setcategory('')
        setdescription('')
    }

    return (
        <>
            <form onSubmit={(e) => { submitHandler(e) }} className='flex w-full items-start justify-around mt-10 p-5 space-x-5 text-[#000]'>
                <div className='w-full space-y-5'>
                    <div>
                        <h3>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} className='w-full py-2 px-4 mt-1  text-[#000]' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input value={date} onChange={(e) => { setDate(e.target.value) }} className='w-full py-2 px-4 mt-1  text-[#000]' type="date" />
                    </div>
                    <div>
                        <h3>Assign To</h3>
                        <input value={assignTo} onChange={(e) => { setassignTo(e.target.value) }} className='w-full py-2 px-4 mt-1 text-[#000]' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input value={category} onChange={(e) => { setcategory(e.target.value) }} className='w-full py-2 px-4 mt-1 text-[#000]' type="text" />
                    </div>
                </div>

                <div className='w-full flex flex-col'>
                    <h3 className='mb-1'>Description</h3>
                    <textarea className='text-black' value={description} onChange={(e) => { setdescription(e.target.value) }} name='' id='' cols={30} rows={10}></textarea>
                    <button className='mt-5 bg-green-400 px-5 py-2'>Create Task</button>
                </div>

            </form>
        </>
    )
}

export default CreateTask
