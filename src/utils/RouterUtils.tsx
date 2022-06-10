import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom'

import App from '../App'

import {
  Language, 
  OS 
} from '../routes'

const RouterUtils: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='lumaos' element={<OS />} />
        <Route path='lumalang' element={<Language />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterUtils