import React, { useEffect, useState } from 'react'
import Card from './Card'

function Main() {
    const base_url = 'https://dummyjson.com/recipes'
    const [recData,setData] = useState([])

    const fetchData = async()=>{
        await fetch(base_url)
        .then(res=>res.json())
        .then(data=>setData(data.recipes))
    }
    useEffect(()=>{
        fetchData();
    },[])
    
  return (
    <div>
        <h1 className='heading text-center'>Recipes</h1>
        <Card reci={recData}/>
    </div>
  )
}

export default Main