import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import Experts from '../pages/Doctors/Experts';
import Chat from '../pages/Chat';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import { Routes, Route } from 'react-router-dom';

import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/docDashboard';
import ProtectRoute from './ProtectRoute';
import ChatRoom from '../components/ChatRoom';
import ChatList from '../components/ChatList';


import AdminLogin from '../pages/Admin/AdminLogin';
import SuccessPage from '../pages/Doctors/SuccessPage';

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/experts' element={<Experts/>}/>
    <Route path='/doctors/:id' element={<DoctorDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/> 
    <Route path='/checkout-success' element={<SuccessPage/>}/>


    <Route path='/users/profile/me' element={<ProtectRoute allowedRoles={['users']}> <MyAccount/></ProtectRoute>}/>
    <Route path='/doctors/profile/me' element={<ProtectRoute allowedRoles={['doctor']}> <Dashboard/></ProtectRoute> }/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path="/chat/:doctorId" element={<ChatRoom />} />
    <Route path="/chatlist" element={<ChatList />} />

    <Route path='/adminLogin' element={<AdminLogin/>}/>
  </Routes>
  );
}
export default Routers;