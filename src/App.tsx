import { Suspense } from "react"
import Banner from "./Componets/Banner"
import Navbar from "./Componets/Navbar"
import Cards from "./Componets/Cards/Cards"
import type { CardType } from "./CardType"

const cardpromise = async():Promise <CardType[]>=>{
  const res = await fetch('../public/data.json')
  const data = await res.json()
  return data

} 


function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<h3>Loading.....</h3>}>
    
    <Cards cardpromise={cardpromise()}></Cards>
    </Suspense>
    
    </>
  )
}

export default App
