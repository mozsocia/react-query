import './App.css'
import { Routes, Route } from "react-router-dom";
import AuthLayout from './components/AuthLayout';
import GuestLayout from './components/GuestLayout';
import AuthProvider from './context/AuthContext';

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />} />

          </Route>

          <Route path="/" element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
