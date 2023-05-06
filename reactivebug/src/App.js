import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Navbar from './components/Navbar';
import BugList from './components/BugList';
import BugDetails from './components/BugDetails';
import CreateBug from './components/CreateBug';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<BugList />} />
            <Route path="/bug/:id" element={<BugDetails />} />
            <Route path="/create" element={<CreateBug />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
