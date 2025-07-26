import { type JSX } from "react"
import Navbar from "./components/Navbar"
import CubeFormation from "./components/CubeFormation"

const App = (): JSX.Element => {

  return (
    <div className="bg-black w-full text-[#7c7f7e] px-15 font-medium">
      <Navbar />
      <main>
        <CubeFormation />
      </main>
    </div>
  )
}

export default App
