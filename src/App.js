import logo from './logo.svg';
import './App.css';
import AddSub from './components/AddSub';
import DeleteSub from './components/DeleteSub';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewSub from './components/ViewSub';
import SearchSub from './components/SearchSub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddSub/>}/>
        <Route path='/view' element={<ViewSub/>}/>
        <Route path='/search' element={<SearchSub/>}/>
        <Route path='/delete' element={<DeleteSub/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
