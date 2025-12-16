import { Routes, Route } from "react-router-dom"
import Landing1 from "./landing/Landing1"
import Landing2 from "./landing/Landing2"


function App() {
  return (
    <>
   <Routes>
      <Route path="/" element={<Landing1 />} />
      <Route path="/about" element={<Landing2 />} />
    </Routes>
    </>
  )
}

export default App