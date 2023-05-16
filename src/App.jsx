import './App.css'
import { Routes, Route } from "react-router-dom";
import AuthLayout from './components/AuthLayout';
import GuestLayout from './components/GuestLayout';
import AuthProvider from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TodoList from './pages/TodoList'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Dashboard />} />

          </Route>

          <Route path="/" element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todo" element={<TodoList />} />

          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
