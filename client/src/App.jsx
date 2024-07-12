import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {


  return (
    <Router>
      <Routes>
        <Route index element={
          <Home />
        } />
        <Route path={'/login'} element={
          <SignIn />
        } />
      </Routes>
    </Router>
  )
}

export default App
