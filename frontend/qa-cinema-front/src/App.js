import './css/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import UserPage from './components/pages/UserPage';
import FilmListPage from './components/pages/FilmListPage';
import FilmPage from './components/pages/FilmPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/films" element={<FilmListPage/>} />
        <Route path="/films/:id" element={<FilmPage/>} />    
      </Routes>
    </BrowserRouter>
  )
}

export default App