import './App.css';
import { Routes, Route } from 'react-router-dom';
import InputCity from './Pages/InputCity';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InputCity />} />
      </Routes>
    </div>
  );
}

export default App;
