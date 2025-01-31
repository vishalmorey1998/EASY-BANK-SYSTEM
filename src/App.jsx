
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import VisitorLayout from './layout/VisitorLayout'
import UserLayout from './layout/UserLayout'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
function App() {


  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/*' element={<VisitorLayout/>}/>
      <Route path='/userlayout/*' element={<UserLayout/>}/>
    </Routes>
    
    
    </BrowserRouter>
  
  )
}

export default App
