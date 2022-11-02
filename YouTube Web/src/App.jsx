import { Header } from "./components/header"
import { MainContent } from "./components/maincontent"
import { NavBar } from "./components/navbar"
import { SugestArea } from "./components/sugest_area"

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent>
        <NavBar/>
        <SugestArea/>
      </MainContent>
    </div>
  )
}

export default App
