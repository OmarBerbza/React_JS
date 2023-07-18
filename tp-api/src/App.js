import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [user, setUser] = useState([]);

    useEffect(()=>{
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(res=> res.json())
      // .then(data=> setUser(data))
      
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=> {setUser(res.data)})
    }, [])

  return (
    <div className="App">
      <h3 className='navbar bg-dark text-light p-2'>Les APIs</h3>
      <p className='p-2'>This data comes from API used by axios:</p>
      <div className='container'>
        {user.map((us, index)=> (
          <dl>
            <dt className='' key={index}><span className='fw-bold text-success'>User Name:</span> {us.username}</dt>
            <dd className='m-2' key={index}><span className='fw-bold'>Name:</span> {us.name}</dd>
            <dd className='m-2' key={index}><span className='fw-bold'>E-mail:</span> {us.email}</dd>
            <dd className='m-2' key={index}><span className='fw-bold'>Adress:</span> Street {us.address.street}, City {us.address.city} </dd>
            <dd className='m-2' key={index}><span className='fw-bold'>Website:</span> {us.website}</dd>
            <hr/>
          </dl>
        ))}
      </div>
    </div>
  );
}

export default App;
