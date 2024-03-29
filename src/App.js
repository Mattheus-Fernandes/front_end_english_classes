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
import Edit from './pages/Edit/Edit';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search/class/:student' element={<Search />}/>
          <Route path='/search/class/edit/:student' element={<Edit />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
