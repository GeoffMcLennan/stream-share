import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { ActiveSong } from './features/activeSong/activeSong';
import { AlbumPage } from './features/album/albumPage';
import { Homepage } from './features/homepage/homepage';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/play' element={<ActiveSong />} />
            <Route path='/album' element={<AlbumPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
