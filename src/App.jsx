import { useState } from "react"
import LoveCard from "./components/lovecard/LoveCard"
import LoveProposalCard from "./components/LoveProposalCard"
import FinalComponent from "./components/FinalComponent"
export default function App() {
  const [page, setPage] = useState(0)
  return (
    <>{
      page === 0 ?
      <LoveCard setPage={setPage}/>  : page === 1 ?
      <LoveProposalCard setPage={setPage}/>  :
      <FinalComponent/>
    }
    </>
  )
}
