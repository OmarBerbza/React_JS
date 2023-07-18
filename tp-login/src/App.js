import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState({nom: "", password: ""});
  const [loged, setLoged] = useState(false);

  const data = [
    {user: "omar", password: "1234"},
    {user: "ahmed", password: "5678"},
    {user: "anas", password: "4321"}
  ];

  const [message, setMessage] = useState({userWrong: "", passWrong: ""});

  const handleChange = (event)=>{
    const {name, value} = event.target;

    setInputValue((pre)=>{
      return{...pre, [name]: value}
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    const userFound = data.find(u=> u.user === inputValue.nom);

    if(userFound){
      if(userFound.password === inputValue.password){
        setMessage({});
        setLoged(true);
      }
      else{
        setMessage({passWrong: 'Password is incorrect!'})
      }
    }else{
      setMessage({userWrong: 'The user name is incorrect!'})
    }
  }

  return loged ? (<h1 className='container mt-5 text-center'>Welcome {inputValue.nom} in admin page !</h1>)
  :(
    <form className="App container p-4 border mt-3" onSubmit={handleSubmit}>
      <h3 className='text-center text-success'>Login :</h3>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">User Name</label>
        <div className="col-sm-10">
          <input type="text" name='nom' value={inputValue.nom} onChange={handleChange} className="form-control" id="inputEmail3" />
        </div>
      </div>
      <p className='text-danger text-center'>{message.userWrong}</p>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" onChange={handleChange} name='password' value={inputValue.password} className="form-control" id="inputPassword3"/>
        </div>
      </div>
      <p className='text-danger text-center'>{message.passWrong}</p>
      <button type='submit' className='btn btn-success'>Login</button>
    </form>
  );
}

export default App;
