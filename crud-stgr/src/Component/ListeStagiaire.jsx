import React from 'react'
import Header from './Header'
import SearchStagiaire from './SearchStagiaire'

function ListeStagiaire(props) {

  return (
    <div className='container'>
        <Header/>
        <br />
        <SearchStagiaire handleSearch = {(username)=> props.handleSearch(username)} />
        <h1 className='mt-3'>Les liste des stagiaires:</h1>

        <div className="row">
            {props.listStagiaire.map((ite, index)=>{
                return(
                    <div className="card col-lg-4 col-md-6" key={index}>
                        <div className="cont">
                            <img src= {ite.image} className="card-img-top" alt="..."/>
                            <div className="overlay">
                                <div className="text"><b>Nom et prenom: </b><br />{ite.nomPrenome}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><b>Username: </b>{ite.username}</p>
                            <p className="card-text"><b>Numéro: </b>{ite.numero}</p>
                            <p className="card-text"><b>Ville: </b>{ite.ville} </p>
                            <p className="card-text"><b>Fillier: </b>{ite.fillier} </p>
                        </div>
                        <button onClick={()=> props.handleDelete(ite.username, ite.numero)} className="btn btn-danger delete ms-4">Supprimer</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ListeStagiaire