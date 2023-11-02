import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import ImageGallery from './Component/ImageGallery';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ImageGallery />} />
      </Routes>
    </div>
  );
}

export default App;
