import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Product from "./pages/Product"
import { productsLoader } from "./loaders"
  
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />}>
        <Route path="products" element={<Home />} loader={productsLoader}/>
        <Route path=":id" element={<Product />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
    </Route>)
  )
  
  export default router