import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BugList from './components/BugList';
import BugDetails from './components/BugDetails';
import CreateBug from './components/CreateBug';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#ffffff', padding: '1rem' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<BugList />} />
          <Route path="/bug/:id" element={<BugDetails />} />
          <Route path="/create" element={<CreateBug />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
