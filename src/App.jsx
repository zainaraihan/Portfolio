import './App.css'
import Index from './components/pageIndex';
import About from './components/pageAbout'
import Sia from './components/GraphicDesign/Project/Sia';
import Gaming from './components/GraphicDesign/Project/Gamingghype';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/sia' element={<Sia />} />
          <Route path='/gaming' element={<Gaming />} />
        </Routes>
      </div>
    </BrowserRouter >

  )
}

export default App
