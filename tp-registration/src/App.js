import './App.css';
import Header from './HeaderFooter/Header';
import Form from './Register/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './HeaderFooter/Footer';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayForm from './Register/DisplayForm';


function App() {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Form/>} />
          <Route path='/display' element={<DisplayForm/>} />
        </Routes>
        
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
