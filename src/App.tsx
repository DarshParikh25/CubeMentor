import { type JSX } from "react"
import Navbar from "./components/Navbar"
import CubeFormation from "./components/CubeFormation"
import RubiksCube from "./components/RubiksCube"
import MovesHistory from "./components/MovesHistory"

const App = (): JSX.Element => {

  return (
    <div className="bg-black w-full text-[#7c7f7e] px-15 font-medium">
      <Navbar />
      <main className="w-full">
        <CubeFormation />
        <section className="p-10 2xl:grid 2xl:grid-cols-2 max-2xl:flex max-2xl:flex-col max-2xl:items-center max-2xl:gap-10">
          <RubiksCube />
          <MovesHistory />
        </section>
      </main>
    </div>
  )
}

export default App
