import './App.css' 
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Dashboard/Home.jsx'
import LoginPage from './Pages/Auth/LoginPage'
import AddProduct from './Pages/AddProduct/AddProduct.jsx'
 


function App() {
 
  return (
    <>
      {/* <Notifications /> */}
      {/* <InstallButton /> */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
       
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/add_product' element={<AddProduct/>}/>
        
      </Routes>
    </>
  )
}

export default App
