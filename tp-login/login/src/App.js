import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) => name === errorMessages.name && ( <div className="error">{errorMessages.message}</div> );

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, upass } = document.forms[0];
    setName(uname.value);

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== upass.value) {
        setErrorMessages({ name: "upass", message: errors.upass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderForm = (
    <div className="login-form">
      <h2 className="title">Connexion</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>L'identifiant </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Mot de passe </label>
            <input type="password" name="upass" required />
            {renderErrorMessage("upass")}
          </div>
          <div div className="button-container">
            <input type="submit" value="Se connecter" />
          </div>
        </form>
      </div>
    </div>
  );
  const database = [
    { username: "user1", password: "pass1" },
    { username: "omar", password: "1234" },
    { username: "user2", password: "pass2" }
  ];
  const errors = { 
    uname: "Votre identifiant est incorrect.", 
    upass: "Votre mot de passe est incorrect."
  };
  return (
    <div className="app">
      {isSubmitted ? 
      <div>
        <h4 className="title">Accueil</h4><p>Bonjour <span>{name.toUpperCase()}</span></p>
      </div> : 
      renderForm}
    </div>
  );
}
export default App;