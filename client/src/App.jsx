import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav'
import Register from './pages/Register'
import Login from './pages/Login';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
import RecipePage from './pages/RecipePage';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={'/'} element={
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
        <Route path={'/recipes'} element={
          <RecipePage />
        } />

      </Routes>
    </>
  )
}

export default App
