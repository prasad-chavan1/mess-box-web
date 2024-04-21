import { useState } from 'react'
import './App.css'
import Home from './components/home/Home';
import About from './components/about/About';
import AddMess from './components/addMess/Addmess';
import LocateMess from './components/locateMess/Locatemess'
import Footer from './components/footer/Footer';
import Login from './components/loginRegister/Login';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/loginRegister/Register';
import './assets/assets'
function App() {
  const [showLogin, setShowLogin] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        {showLogin?<Login setShowLogin={setShowLogin} /> : <></>}
          {/* <div className="background"> */}
            <Header setShowLogin={setShowLogin} />
            <Home />
            {/* <Footer /> */}
          {/* </div> */}
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <About />
          <Footer />
        </>
      )
    },
    {
      path: "/addMess",
      element: <AddMess />
    },
    {
      path: "/locateMess",
      element: (
        <>
          <LocateMess />
          <Footer />
        </>
      )
    },
    {
      path: "/login",
      element: <Login />      
    },
    {
      path: "/register",
      element: <Register />      
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
