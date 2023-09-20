
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CubeContainer from './components/cube/CubeContainer'
import XrCubeContainer from './components/xr-cube/XrCubeContainer'
function App() {
  return (
  <Routes>
    <Route path="/" element={<CubeContainer />} />
    <Route path="/cube" element={<CubeContainer />} />
    <Route path="/xr-cube" element={<XrCubeContainer />} />
  </Routes>
  )
}

export default App