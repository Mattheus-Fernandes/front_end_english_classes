//CSS
import './App.css';

//HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Lib UI
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
import Header from './component/Header/Header';

//Pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Change from './pages/Change/Change';
import Register from "./pages/Register/Register"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search/class' element={<Search />}/>
          <Route path='/edit/class' element={<Change />}/>
          <Route path='register/class' element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
