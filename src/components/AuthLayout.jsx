
import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from "../../hook/useAuth";




function AuthLayout() {
  const { authData } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (!authData.user) {
      navigate("/login")
    }
  }, [authData.user])

  return (
    <>
       <Outlet />
    </>
  )
}

export default AuthLayout