import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg bg-light rounded-bottom ">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fst-italic" to='/'>CRUD</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/' className='nav-link active' aria-current="page">Home</Link>
                        <Link to='/ajouterStagiaire' className="nav-link">Ajouter Stagiaire</Link>
                        <Link to='/listeStagiaire' className="nav-link">Liste Des Stagiaires</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header