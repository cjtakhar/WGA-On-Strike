import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/WGA-On-Strike" element={< Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
