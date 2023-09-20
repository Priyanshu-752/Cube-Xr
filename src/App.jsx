
import './App.css'
import { Routes, Route } from 'react-router-dom'
import XrCubeContainer from './components/xr-cube/XrCubeContainer'
function App() {
  return (
  <Routes>
    <Route path="/" element={<XrCubeContainer />} />
  </Routes>
  )
}

export default App
