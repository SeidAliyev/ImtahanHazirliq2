import AdminRoot from "../Layout/AdminRoot";
import UserRoot from "../Layout/UserRoot";
import Add from "../Pages/Add";
import Basket from "../Pages/Basket";
import Favorite from "../Pages/Favorite";
import Home from "../Pages/Home";

const routes =[
    {
        path: "/",
        element: <UserRoot/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/favorite",
                element: <Favorite/>,
            },
            {
                path: "/basket",
                element: <Basket/>,
            },
        ]
    }, 

    {
        path: "/",
        element: <AdminRoot/>,
        children:[
            {
                path: "/add",
                element: <Add/>,
            },
        ]
    }, 
]

export default routes