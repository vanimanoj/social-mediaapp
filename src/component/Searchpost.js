import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchpost = () => {
    var [title,setTitle]=useState("")
    const changeName=()=>{
    const data={"title":title}
          console.log(data)
        
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Title</label>
                    <input onChange={(e)=>{(setTitle(e.target.value))}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={changeName} className="btn btn-success">change</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchpost