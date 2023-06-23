import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import TopicsPage from './components/Topicspage';
import TopicPage from './components/Topicpage';
import InteractiveEditor from './components/InteractiveEditor';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/topics" exact component={TopicsPage} />
        <Route path="/topic/:id" component={TopicPage} />
        <Route path="/editor" component={InteractiveEditor} />
        <Route path="/quiz" component={Quiz} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
