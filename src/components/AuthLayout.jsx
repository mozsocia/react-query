
import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";




function AuthLayout() {
  const { authUser} = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (!authUser) {
      navigate("/login")
    }
  }, [authUser])

  return (
    <>
       <Outlet />
    </>
  )
}

export default AuthLayout