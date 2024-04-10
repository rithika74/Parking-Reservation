import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './Css/Style.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Index from './Components/Index';
import Signup from './Components/Signup';
import User from './Components/User';
import Admin from './Components/Admin';
import ReserveSlot from './Components/ReserveSlot';
import Reservations from './Components/Reservations';
import UserReservations from './Components/UserReservations';
import UserDetails from './Components/UserDetails';
import Login from './Components/Login';
import Provider from './Components/Provider';
import Reports from './Components/Reports';
import Slots from './Components/Slots';
import ParkingArea from './Components/ParkingArea';
import Areas from './Components/Areas';
import AddAreas from './Components/AddAreas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Index />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='/userpage' element={<User />}>
          <Route index element={<Index />} />
          <Route path='reserve' element={<ReserveSlot />} />
          <Route path='reservations/:id' element={<Reservations />} />
          <Route path='areas' element={<ParkingArea />} />
          <Route path='slots/:areaId/:slotId' element={<Slots />} />
        </Route>
        <Route path='/adminpage' element={<Admin />}>
          <Route index element={<Index />} />
          {/* <Route path='parkingareas' element={<Areas />} />
          <Route path='addareas' element={<AddAreas />} /> */}
          <Route path='areas' element={<ParkingArea />} />
          <Route path='viewreservations' element={<UserReservations />} />
          <Route path='userdetails' element={<UserDetails />} />
          <Route path='reports' element={<Reports />} />
        </Route>
        <Route path='/providerpage' element={<Provider />}>
          <Route index element={<Index />} />
          <Route path='parkingareas' element={<Areas />} />
          <Route path='addareas' element={<AddAreas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
