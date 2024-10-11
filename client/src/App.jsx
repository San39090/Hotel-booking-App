import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/indexPages'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import AccountPage from './pages/AccountPage'
import PlacesPage from './pages/PlacesPage'
import PlacesFormPage from './pages/PlacesFormPage'
import PlacePage from './pages/PlacePage'
import BookingPage from './pages/BookingPage'
import BookingsPage from './pages/BookingsPage'

axios.defaults.baseURL = 'https://hotel-booking-app-czf3.onrender.com';
axios.defaults.withCredentials=true;


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/account" element={<AccountPage/>}/>
          <Route path="/account/places" element={<PlacesPage/>}/>
          <Route path="/account/places/new" element={<PlacesFormPage/>}/>
          <Route path="/account/places/:id" element={<PlacesFormPage/>}/>
          <Route path='/place/:id' element={<PlacePage/>}/>
          <Route path='/account/bookings' element={<BookingsPage/>}/>
          <Route path='account/bookings/:id' element={<BookingPage/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
