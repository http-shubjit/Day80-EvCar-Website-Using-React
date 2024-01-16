import React, { useState,useEffect } from 'react'
import Background from './Component/Background/Background'
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero' 

const App = () => {
let herodata=
[
  {text1:"Dive into",text2:"What You Love"},
  {text1:"Indulge",text2:"Your Passion"},
  {text1:"Give in to",text2:"Your PAssion"}
]

const [herocount,setherocount]=useState(2);

const [playstatus,setplaystatus]=useState(false);

useEffect(()=>{
  setInterval(() => {
    setherocount((count)=>{ return count===2?0:count+1})
  }, 3000);
},[])


  return (
    <div>

<Background playstatus={playstatus} herocount={herocount}/>
<Navbar/>
<Hero 
setplaystatus={setplaystatus}
herodata={herodata[herocount]}
herocount={herocount}
setherocount={setherocount}
playstatus={playstatus}
/>

    </div>
  )
}

export default App