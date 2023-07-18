import React, { useState } from 'react'
import Header from './Header';

function ListStagiaire(props) {
    
  const villes = [
    {id: 1, vil: "Ville"},
    {id: 2, vil: "Massa"},
    {id: 3, vil: "Agadir"},
    {id: 4, vil: "Ait Melloul"},
    {id: 5, vil: "Tiznit"},
  ];

    const [stagiaire, setStagiaire] = useState(
    {
      username:'',
      numero:'', 
      ville:'',
      fillier:'', 
      image: "https://xsgames.co/randomusers/avatar.php?g=male",
    }
    );
    

  return (
    <div className='container'>
      <Header/>
      <br />
      <h1 className='mt-3'>Ajouter stagiaire:</h1>
      <form className='mt-4' onSubmit={(e)=> e.preventDefault()}>

        <input type="text" value={stagiaire.username} name='username' onChange={(e)=>setStagiaire({...stagiaire, [e.target.name]: e.target.value})} className="form-control mt-3 w-50" placeholder="Nom d'utilisateur" />

        <input type="number" value={stagiaire.numero} name='numero' onChange={(e)=>setStagiaire({...stagiaire, [e.target.name]: e.target.value})} className="form-control mt-3 w-50" placeholder="Numero"/>

        <input type="text" value={stagiaire.fillier} name='fillier' onChange={(e)=>setStagiaire({...stagiaire, [e.target.name]: e.target.value})} className="form-control mt-3 w-50" placeholder="Fillier" />

        <select className="form-select mt-3 w-50" name='ville' onChange={(e)=> setStagiaire({...stagiaire, [e.target.name]: e.target.value})} aria-label="Default select example">
          {villes.map((item, index)=>{
            return(
              <option value={item.vil} key={index}>{item.vil}</option>
            )
          })}
        </select>

        <button onClick={()=> props.handleClick(stagiaire)} className='btn btn-success mt-3 addBtn'>Ajouter</button>
      </form>
    </div>
  )
}

export default ListStagiaire