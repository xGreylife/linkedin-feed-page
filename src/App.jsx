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

<<<<<<< HEAD
import Header from './components/Header/Header'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import Feed from './components/Feed/Feed';


function App() {
  return (
    <>
      <Header />
      <div className='page-content'>
        <LeftSidebar/>
        <Feed/>
      </div>
    </>
  )
=======
export const LoggedInUserContext = createContext({});
// const loggedInUserURL = 'https://dummyjson.com/c/bc38-1a37-4cd0-a6f0';
const loggedInUserURL = 'http://localhost:5000/api/user';

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
        axios.get(loggedInUserURL)
        .then((response) => {
            setLoggedInUser(response.data);
        })
        .catch((err) => {
            console.log('Failed to get loggedInUser');
        });
    }, []);

    return (
        <LoggedInUserContext.Provider value={loggedInUser || {}}>
           <RouterProvider router={router}/>
        </LoggedInUserContext.Provider>
    )
>>>>>>> feature/header-sidebar
}

export default App
