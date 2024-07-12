import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav'
import Register from './pages/Register'
import Login from './pages/Login';
import Recipe from './pages/Recipe';
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
        <Route path={'/recipe/:id'} element={
          <Recipe />
        } />

      </Routes>
    </>
  )
}

export default App
