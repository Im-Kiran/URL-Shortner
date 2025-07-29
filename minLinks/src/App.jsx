import RedirectPage from './components/RedirectPage'
import './App.css'
import {Routes,Route} from 'react-router-dom'
// import Navbar from './components/Navbar'
import Main from './components/Main'
import ViewLinks from './components/ViewLinks'
import Edit from './components/Edit'
function App() {

  return (
    <>
      <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path="/:shortUrl" element={<RedirectPage />} />
        <Route path='/viewLinks' element={<ViewLinks/>}></Route>
        {/* <Route path='/Add' element={<Add/>}></Route> */}
        <Route path='viewLinks/Edit/:id' element={<Edit/>}></Route>
      </Routes>
    </>
    </>
  )
}

export default App
