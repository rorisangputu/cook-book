import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav'
import Register from './pages/Register'
import Login from './pages/Login';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
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
        <Route path={'/addrecipe'} element={
          <AddRecipe />
        } />

      </Routes>
    </>
  )
}

export default App
