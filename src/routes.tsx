import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Categories from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
