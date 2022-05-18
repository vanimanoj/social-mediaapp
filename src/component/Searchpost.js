import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchpost = () => {
    var [name,setNamefuntion]=useState("rahul")
    const changeName=()=>{
        setNamefuntion(
            name="Ravathy"
        )
    }
  return (
    <div>
        <Navbar/>
        {name}
       <button onClick={changeName} className="btn btn-success">change</button>
    </div>
  )
}

export default Searchpost