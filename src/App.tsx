import { type JSX } from "react"
import Navbar from "./components/Navbar"
import CubeFormation from "./components/CubeFormation"
import RubiksCube from "./components/RubiksCube"

const App = (): JSX.Element => {

  return (
    <div className="bg-black w-full text-[#7c7f7e] px-15 font-medium">
      <Navbar />
      <main className="w-full">
        <CubeFormation />
        <section className="p-10 flex justify-center">
          <RubiksCube />
        </section>
      </main>
    </div>
  )
}

export default App
