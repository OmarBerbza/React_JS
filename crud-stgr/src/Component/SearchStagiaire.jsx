import React, { useState } from 'react'

function SearchStagiaire(props) {
  const [stagiaire, setStagiaire] = useState(
    {
      username:''
    }
  );

  return (
    <div className="container">
      <form className='formSearch' onSubmit={(e)=> e.preventDefault()}>
        <input type="text" value={stagiaire.username} name='username' onChange={(e)=>setStagiaire({...stagiaire, [e.target.name]: e.target.value})} className="form-control mt-3 w-50 searchForm" placeholder="Nom d'utilisateur" />

        <button id='searchBtnId' className='btn btn-primary mt-3 searchButton' onClick={()=> props.handleSearch(stagiaire.username)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchStagiaire