import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './page/Home'
import './App.css'
function App() {
  
    return (
    <>
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <div className="pages">
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     </div>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
