import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { RiHome4Fill } from "react-icons/ri";

function App() {

  toast.success("Welcome to the LMS Front End!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,});  ``
  return <>
  <Button variant="primary">
    Primary Button <RiHome4Fill/></Button>
  <h1>Under construction</h1>;
  <ToastContainer />
  </>
}

export default App
