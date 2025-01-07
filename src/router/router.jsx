import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MailLayout from "../layout/MailLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Queries from "../pages/Queries";
import PrivateRoute from "./PrivateRoute";
import AddQueries from './../pages/AddQueries';
import QueryDetails from './../pages/QueryDetails';
import MyRec from "../pages/MyRec";
import MyQueries from "../pages/MyQueries";


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
        {
          path: 'queries',
          element:<Queries></Queries>,

        },
        {
          path: 'queries/addqueries',
          element:<PrivateRoute><AddQueries></AddQueries> </PrivateRoute>,

        },
        {
          path: '/querydetails/:id',
          element:<PrivateRoute><QueryDetails></QueryDetails> </PrivateRoute>,
        },
        {
          
            path: '/myrec',
            element:<MyRec></MyRec>,
          
        },
        {
          
          path: '/myqueries',
          element:<MyQueries></MyQueries>,
        
      },
      ]
    },
  ]);
 
  
  export default router;