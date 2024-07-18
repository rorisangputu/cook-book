import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav'
import Register from './pages/Register'
import Login from './pages/Login';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
import RecipePage from './pages/RecipePage';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import MyRecipes from './components/Profile/MyRecipes';
import EditProfile from './components/Profile/EditProfile';
import LikeRecipes from './components/Profile/LikedRecipes';
import LikedRecipes from './components/Profile/LikedRecipes';
function App() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Nav />
      <div className='flex-grow'>
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
          <Route path={'/about'} element={
            <About />
          } />
          <Route path={'/contact'} element={
            <Contacts />
          } />
          <Route path={'/profile'} element={
            <Profile />
          }>
            <Route path={'/profile/myrecipes'} element={<MyRecipes />} />
            <Route path={'/profile/liked-recipes'} element={<LikedRecipes />} />
            <Route path={'/profile/edit-profile'} element={<EditProfile />} />
            <Route path={'/profile/favorite-profiles'} element={<h1>Favorite Profiles</h1>} />
          </Route>

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
