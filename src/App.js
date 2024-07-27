import logo from './logo.svg';
import './App.css';
import AddSub from './components/AddSub';
import DeleteSub from './components/DeleteSub';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AddSub/>
      <DeleteSub/>

    </div>
  );
}

export default App;
