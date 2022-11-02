import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Main } from './components/main'
import { Header } from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Main>
        <Header/>
      </Main>
    </div>
  )
}

export default App
