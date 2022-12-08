import { Route,Routes } from 'react-router-dom'
import NavigationRouter from './Routes/Navigation/Navigation.component'
import Login from './Routes/login/Login.navigation'
import Signup from './Routes/signup/signup.component'
import Homepage from './Routes/homepage/Homepage.router'
import ChangePassword from './Routes/changepassword/changepassword.router'
import ProfileRouter from './Routes/profile/profile.router'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavigationRouter/>}>
          <Route index element={<Homepage/>} />
          <Route path='/password' element={<ChangePassword/>}/>
          <Route path='/profile' element={<ProfileRouter/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
