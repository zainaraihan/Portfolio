import './App.css'
import Index from './components/pageIndex';
import About from './components/pageAbout'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
