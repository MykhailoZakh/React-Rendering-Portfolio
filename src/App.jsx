import { Outlet } from 'react-router-dom';
import Nav from './components/Nav-Bar';
import './App.css'

function App() {
  

  return (
    <>
    <Nav />
    <main className="">
      <Outlet />
    </main>
  </>
  )
}

export default App
