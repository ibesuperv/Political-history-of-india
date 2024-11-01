
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Project from './Project'
import News from './components/NewsApp/News'
import History from './components/History/History'
import Navbar from './components/Navbar/Navbar'
import Ai from './components/Ai/Ai'

function App() {

  return (
    <>
{/* <Navbar/> */}
    <Routes>
    <Route path='/' element={<Project/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/history' element={<History/>} />
    
    <Route path='/ask-ai' element={<Ai/>} />
    </Routes>
    </>
  )
}

export default App
