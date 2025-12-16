import { Routes, Route } from "react-router-dom"
import Landing1 from "./landing/Landing1"
import Landing2 from "./landing/Landing2"
import FaqItem from "./components/FaqItem";


function App() {
  return (
    <>
    <FaqItem question="ما هي أهدافنا؟" answer="أهدافنا هي..." />
   {/* <Routes>
      <Route path="/" element={<Landing1 />} />
      <Route path="/about" element={<Landing2 />} />
    </Routes> */}
    </>
  )
}

export default App