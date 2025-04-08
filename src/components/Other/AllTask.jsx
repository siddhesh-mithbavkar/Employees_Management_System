import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setuserData] = useContext(AuthContext)

  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 rounded mt-5 space-y-3 h-60'>

      <div className=" py-2 px-4 flex justify-between rounded">
        <h2 className='w-1/2 '>Employee Name</h2>
        <h3 className='w-1/2 bg-black-500'>New Task</h3>
        <h5 className='w-1/2 bg-black-400'>Active Task</h5>
        <h5 className='w-1/2 bg-black-400'>Completed Task</h5>
        <h5 className='w-1/2 bg-black-400'>Failed Task</h5>

      </div>

      <div className='overflow-auto'>
        {
          userData.map((e, index) => {
            return <div key={index} className="bg-green-400 py-2 px-4 flex justify-between rounded gap-2">
              <h2 className='w-1/2 bg-blue-400'>{e.firstName}</h2>
              <h3 className='w-1/2 bg-orange-500'>{e.taskNumbers.newTask}</h3>
              <h5 className='w-1/2 bg-yellow-400'>{e.taskNumbers.active}</h5>
              <h5 className='w-1/2 bg-yellow-400'>{e.taskNumbers.completed}</h5>
              <h5 className='w-1/2 bg-yellow-400'>{e.taskNumbers.failed}</h5>
            </div>
          })
        }
      </div>


    </div>
  )
}

export default AllTask
