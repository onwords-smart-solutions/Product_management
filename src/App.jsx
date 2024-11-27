import './App.css' 
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Dashboard/Home.jsx'
import LoginPage from './Pages/Auth/LoginPage'
import AddProduct from './Pages/AddProduct/AddProduct.jsx'
import Stocks from './Pages/Stocks/Stocks.jsx'
 


function App() {
 
  return (
    <>
      {/* <Notifications /> */}
      {/* <InstallButton /> */}
      <Routes>
        <Route exact path='/' element={<AddProduct/>} />
       
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/products' element={<Home />}/>
        <Route path='/stocks' element={<Stocks />}/>
        
      </Routes>
    </>
  )
}

export default App
