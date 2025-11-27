import { Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Home from './component/Home'

import StudentList from './component/StudentList'
import AddStudent from './component/AddStudent'
import UserList from './component/UserList'
import AddUser from './component/AddUser'
import DashBoard from './component/DashBoard'


function App() {

  return (
    <>


      <Routes>

        {/* Default root route */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/studentList' element={<StudentList />} />
        <Route path='/addStudent' element={<AddStudent />} />
        <Route path='/editStudent/:id' element={<AddStudent />} />

        {/* User Management Routes */}
        <Route path='/userList' element={<UserList />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/editUser/:id' element={<AddUser />} />

      </Routes>


    </>



  )
}

export default App
