import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Funktioner from './pages/Funktioner'
import Integrationer from './pages/Integrationer'
import LandingPage from './pages/LandingPage'
import Layout from './pages/Layout'
import Pris from './pages/Pris'
import Support from './pages/Support'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='Integrationer' element={<Integrationer />} />
          <Route path='Funktioner' element={<Funktioner />} />
          <Route path='Pris' element={<Pris />} />
          <Route path='Support' element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

// Route index element={<Home />} />
//           <Route path='Birthdays' element={<Birthdays />} />
//           <Route path='Tours' element={<Tours />} />

//           <Route path='Testing' element={<LayoutTesting />}>
//             <Route index element={<Testing />} />
//             <Route path='Products' element={<Products />} />
//             <Route path='Products/:productId' element={<SingleProduct />} />
//           </Route>

//           <Route path='*' element={<Error />} />
