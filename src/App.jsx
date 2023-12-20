import { useState } from "react"
import  Background  from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import { useEffect } from "react"

 const App = () => {
  let heroData = [
    {text1: "Dive into" , text2:"what you love"},
    {text1: "Indluge" , text2:"your passions"},
    {text1: "Give in to" , text2:"your passions"}
  ]
  const [heroCount , setHeroCount] = useState(0);
  const [PlayStatus , setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=> {
      setHeroCount((count) =>{return count===2?0:count+1})
    },3000);
  },[])

  return (
    <div>
      <Background PlayStatus={PlayStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      PlayStatus={PlayStatus}
      />
    </div>
  )
}
export default App