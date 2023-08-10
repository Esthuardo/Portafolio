import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  )
}

export default App
