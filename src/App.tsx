import { Header } from './components'
import Contact from './pages/Contact'
import Graphs from './pages/Graphs'
import CreateContact from './pages/CreateContact'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <main className='flex flex-col h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/contact'} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/graphs' element={<Graphs />} />
        <Route path='/contact/new' element={<CreateContact />} />
      </Routes>
    </main>
  )
}

export default App
