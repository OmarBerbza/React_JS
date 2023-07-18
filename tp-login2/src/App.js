import './App.css';
import LoginPage from './Component/LoginPage';

function App() {
  const data = [
    {id: 1, user: "Omar", user_email: "omar@berbza.com", pass: "1234"},
    {id: 2, user: "Berbza", user_email: "berbza@omar.com", pass: "5678"},
    {id: 3, user: "Omar Berbza", user_email: "omar@omar.com", pass: "4321"},
  ]

  return (
    <div className="App">
      <LoginPage data={data}/>
    </div>
  );
}

export default App;
