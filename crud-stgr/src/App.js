import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListStagiaire from './Component/ListeStagiaire';
import AjouterStagiaire from './Component/AjouterStagiaire';
import Header from './Component/Header';
import SearchStagiaire from './Component/SearchStagiaire';
import { useState } from 'react';

function App() {
  const stagiaires = [
    {username: "omarBerbza", nomPrenome: "Omar BERBZA", numero: "3535", ville: "Massa", fillier: "DEV Full stack", image: "https://cdn3.vectorstock.com/i/1000x1000/90/32/young-man-student-cartoon-vector-19619032.jpg"},
    {username: "yassineElHina", nomPrenome: "Yassine EL HINA", numero: "3333", ville: "Agadir", fillier: "Droit", image: "https://cdn5.vectorstock.com/i/1000x1000/90/44/young-man-student-cartoon-vector-19619044.jpg"},
    {username: "anasHennouz", nomPrenome: "Anas HENNOUZ", numero: "3434", ville: "Ait Melloul", fillier: "Machine Learning", image: "https://www.shutterstock.com/shutterstock/photos/1058618351/display_1500/stock-vector-young-male-student-cartoon-1058618351.jpg"},
    {username: "abdellatifMezian", nomPrenome: "Abdellatif MEZIAN", numero: "3527", ville: "Massa", fillier: "DEV Full stack", image: "https://cdn5.vectorstock.com/i/1000x1000/90/29/young-man-student-cartoon-vector-19619029.jpg"},
  ];
  
  const [listStagiaire, setListStagiaire] = useState(stagiaires);

  const addStr = (str)=>{
    setListStagiaire((prev)=> [...prev, str])

    console.log(listStagiaire)
  }

  const deleteStr = (username, numero)=>{
    setListStagiaire((prev)=> {return prev.filter((itm)=> itm.username !== username && itm.numero !== numero)});
  }
  
  const searchStr = (username)=>{
    console.log("i was in serach");
    setListStagiaire((prev)=> {return prev.filter((itm)=> itm.username === username )});

  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='ajouterStagiaire' element={<AjouterStagiaire handleClick={(str)=> addStr(str)} />} />
        <Route path='listeStagiaire' element={<ListStagiaire handleDelete={(username, numero)=> deleteStr(username, numero)} 
        listStagiaire = {listStagiaire} 
        handleSearch = {(username)=>searchStr(username)}/>}/>

        <Route path='searchStagiaire' element={<SearchStagiaire/>}/>
      </Routes>
    </div>
  );
}

export default App;
