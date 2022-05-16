import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { ActiveSong } from './features/activeSong/activeSong';
import { Homepage } from './features/homepage/homepage';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/play' element={<ActiveSong />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
