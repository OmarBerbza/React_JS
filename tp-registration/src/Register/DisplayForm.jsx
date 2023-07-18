import React from 'react'
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function DisplayForm() {
  const location = useLocation();
  const fromData = location.state;

  return (
    <div className='container displayForm'>
      {/* <table border="table">
        <thead className=' text-light'>
          <tr>
            <th scope='col'>Indentifiant</th>
            <th scope='col'>Date de naissance</th>
            <th scope='col'>Ville</th>
            <th scope='col'>Genre</th>
            <th scope='col'>Loisirs</th>
            <th scope='col'>Photo</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody className=' text-light'>
          {Object.entries(fromData).map((info, index)=>{
            <tr key={index}> 
              <th scope="row">{info.indentifiant}</th>
              <th>{info.naissence}</th>
              <th>{info.ville}</th>
              <th>{info.genre}</th>
              <th>{info.loisir}</th>
            </tr>
          })}
        </tbody>
      </table> */}


        <h2 className='text-light'>From Data</h2>
        <p className='text-light'>Indentifiant: <b>{fromData.indentifiant}</b></p>
        <p className='text-light'>Date de naissance: <b>{fromData.naissence}</b></p>
        <p className='text-light'>Ville: <b>{fromData.ville}</b></p>
        <p className='text-light'>Genre: <b>{fromData.genre}</b></p>
        <p className='text-light'>Loisir: <b>{fromData.loisir}</b></p>
        <p className='text-light'>
          Photo: 
          <br /> <br />
          {fromData.preview && (
            <img src={fromData.preview} alt="Preview" />
          )}
        </p>
        
    </div>
  )
}

export default DisplayForm