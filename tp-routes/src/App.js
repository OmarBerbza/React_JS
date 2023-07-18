import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './HeaderComp/Header';
import Home from './HeaderComp/Home';
import About from './HeaderComp/About';
import Support from './HeaderComp/Support';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/support' element={<Support/>}/>
      </Routes>
    </div>
  );
} 

export default App;
