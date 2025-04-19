
import './App.css'
import Events from './components/Events'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Master from './Layout/master'
import UniversityEvent from './Events/universityevents'
import LocalEvents from './Events/localevents'
import CommunityEvents from './Events/communityevents'
import Login from './components/Login'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Master/>}>
    <Route path='/' element={<Home/>}></Route> 
    <Route path='/events' element={<Events/>}></Route> 
    <Route path='/login' element={<Login/>}></Route> 
    <Route path='/universityevents' element={<UniversityEvent/>}></Route> 
    <Route path='/localevents' element={<LocalEvents/>}></Route> 
    <Route path='/communityevents' element={<CommunityEvents/>}></Route> 
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
