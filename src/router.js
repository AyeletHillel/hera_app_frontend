import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
  
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />}>
        <Route path="" element={<Home />}/>
        <Route path=":id" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
    </Route>)
  )
  
  export default router