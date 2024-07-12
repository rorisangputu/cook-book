import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav'
import Register from './pages/Register'
import Login from './pages/Login';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={
          <Home />
        } />
        <Route path={'/register'} element={
          <Register />
        } />
        <Route path={'/login'} element={
          <Login />
        } />

      </Routes>
    </>
  )
}

export default App
