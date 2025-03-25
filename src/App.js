import logo from './logo.svg';
import './App.css';

function App() {

  require('dotenv').config();

  const mongoose = require('mongoose');

  mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => {
      console.log('Connected to MongoDB');
  })
  .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
  });
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello
        </h1>
      </header>
    </div>
  );
}

export default App;
