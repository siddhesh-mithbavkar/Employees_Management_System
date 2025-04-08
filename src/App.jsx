import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

// localStorage.clear()

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setuserData] = useContext(AuthContext)


  useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])


  const handleLogin = (email, password) => {
    if (email == "sid@98" && password == '9004') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
      }
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
    }
    else {
      alert('Invalid credentials');
    }
  }

  // const data = useContext(AuthContext)
  // console.log(data)


  // handleLogin('sid@98', 9004)

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
    </div>
  )
}

export default App
