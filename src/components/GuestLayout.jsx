import React, { useEffect} from 'react'
import {  Outlet , useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";


function GuestLayout() {
  const { authUser } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (authUser){
      navigate("/")
    }
  }, [authUser])
  
  return (
    <>
        <Outlet/>
    </>
  )
}

export default GuestLayout