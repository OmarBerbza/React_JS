import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Component/Details';
import Header from './Component/Header';
import Product from './Component/Product';

function App() {
  const state = {
    products : [
      {   
        id: 1, 
        title: "HP VICTUS Gaming Laptop", 
        price: "7800 DH", 
        picture: "https://tabtel.ma/7706-large_default/ordinateur-portable-hp-pavilion-gaming-17-cd2012nk-601g5ea.jpg",
        video: "https://www.youtube.com/embed/dfQW7afBAyQ",
        ram: "16 Go",
        brand: "HP",
        screen: "15.6 Inches",
        system: "Windows 11 Home",
        Item_Weight: "5.06 Pounds",
        Resolution: "1080p, 720p",
        Total_USB: "2"
      },
      {   
        id: 2, 
        title: "DELL gaming laptop", 
        price: "8000 DH", 
        picture: "https://duga.ma/3897-large_default/ordinateur-portable-gaming-dell-g15-5511-dl-g15-i7-4rtx.jpg",
        video: "https://www.youtube.com/embed/9MqopaYIKc4",
        ram: "16 Go",
        brand: "DELL",
        screen: "15.6 Inches",
        system: "Windows 11 Home",
        Item_Weight: "5 Pounds",
        Resolution: "1080p, 720p",
        Total_USB: "4"
      },
      {   
        id: 3, 
        title: "Acer Chromebook Laptop", 
        price: "6000 DH", 
        picture: "https://m.media-amazon.com/images/I/41jptbLpTML._SS400_.jpg",
        video: "https://www.youtube.com/embed/XYyiwb58iHU",
        ram: "16 Go",
        brand: "Acer",
        screen: "15.6 Inches",
        system: "Windows 11 Home",
        Item_Weight: "5.06 Pounds",
        Resolution: "1080p, 720p",
        Total_USB: "3"
      },
      {   
        id: 4, 
        title: "Laptop - HUAWEI", 
        price: "7000 DH", 
        picture: "https://evotrading.ma/wp-content/uploads/2022/03/pc-portable-huawei-matebook-14-tgl-i5-1135g7-8gb-512go-ssd.png",
        video: "https://www.youtube.com/embed/VRCxNz5vO4k",
        ram: "16 Go",
        brand: "HUAWEI",
        screen: "17 Inches",
        system: "Windows 11 Home / Linux",
        Item_Weight: "5.06 Pounds",
        Resolution: "1080p, 720p",
        Total_USB: "4"
      }
  ]
}

  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Product products={state.products} />}/>
        <Route path='/details/:id' element={<Details products={state.products} />}/>
      </Routes>
    </div>
  );
}

export default App;
