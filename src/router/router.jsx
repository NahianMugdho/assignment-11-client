import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MailLayout from "../layout/MailLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MailLayout></MailLayout>,
      errorElement:<h2>Not found</h2>,
      children:[
        {
            path: '/',
            element:<Home></Home> ,
        },
        {
          path: '/login',
          element:<Login></Login> ,
        },
        {
          path: 'register',
          element:<Register></Register>,

        },
      ]
    },
  ]);
 
  
  export default router;