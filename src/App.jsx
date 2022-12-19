
import React from 'react'
// import { Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import HomePage from './Components/HomePage/home';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactUs from './Components/ContactUs/ContactUs';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },{
      path:"/about",
      element: <About/>
    },{
      path:"/Portfolio",
      element: <Portfolio/>
    },{
      path:"/ContactUs",
      element: <ContactUs/>
    }
  ]);

  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route path='/' element={<HomePage/>}/>
      // {/* <Route path='/productspage' element={<Productspage ondelete={ondelete} basket={basket} onAdd={onAdd} onRemove={onRemove}/>}/> */}
      // {/* <Route path='/About' element={<About />}/> */}
      // {/* <Route path='/cart' element={<Cart ondelete={ondelete} basket={basket} onAdd={onAdd} onRemove={onRemove}/>}/> */}
    // </Routes>
  )
}

export default App
