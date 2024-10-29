import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "../pages/login"
import Home from "../pages/home"
const Navigator = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Home/>} />
         
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Navigator