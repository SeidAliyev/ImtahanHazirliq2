import AdminRoot from "../Layout/AdminRoot";
import UserRoot from "../Layout/UserRoot";
import Add from "../Pages/Add";
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