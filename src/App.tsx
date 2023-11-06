import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './pages/Upload/Upload';
import RecipeList from './pages/RecipeList/RecipeList';
import Profile from './pages/Profile/Profile';
import Explore from './pages/Explore/Explore';
import ExploreMap from './pages/Explore/ExploreMap';
import LogIn from './pages/Profile/LogIn';
import SignUp from './pages/Profile/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/ExploreMap" element={<ExploreMap />} />
      </Routes>
    </Router>
  );

}

export default App;
