import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MyNetwork from './pages/MyNetwork';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import MyProfile from './pages/MyProfile';
import RootLayout from './pages/RootLayout';

export const LoggedInUserContext = createContext({});
const loggedInUserURL = 'https://dummyjson.com/c/bc38-1a37-4cd0-a6f0';


const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootLayout/>, 
        children:[
            {index: true, element: <Home />},
            {path: 'mynetwork', element: <MyNetwork />},
            {path: 'jobs', element: <Jobs />},
            {path: 'messaging', element: <Messaging />},
            {path: 'notifications', element: <Notifications />},
            {path: 'myprofile', element: <MyProfile/>},
        ]
    }
]);

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(()=>{
        axios.get(loggedInUserURL).then((response) => {
            setLoggedInUser(response.data);
        })
    }, []);

    return (
        <LoggedInUserContext.Provider value={loggedInUser || {}}>
           <RouterProvider router={router}/>
        </LoggedInUserContext.Provider>
    )
}

export default App
