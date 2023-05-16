import React, { useEffect} from 'react'
import {  Outlet , useNavigate } from 'react-router-dom';
import { useAuth } from "../../hook/useAuth";


function GuestLayout() {
  const { authData } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (authData.user){
      navigate("/")
    }
  }, [authData.user])
  
  return (
    <>
        <Outlet/>
    </>
  )
}

export default GuestLayout