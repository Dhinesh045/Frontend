import React, { useState } from 'react'
import Child from './Child'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Home({wors,word1}) {
  console.log("In the Home")
  const [userName,setuser]=useState("")
  const navigate=useNavigate()
  const {id}=useParams()
  function checkLogin() {
    if( userName == "dhinesh")
    navigate("/")
  else{
    alert("not correct")
  }
  }
  return (
    <div>
      <p>{id}</p>
        <input onChange={(e)=>setuser(e.target.value)}/>
        <button onClick={()=>checkLogin()}>Login</button>
          <Link to={"/"}>App page</Link>
        <p>via Soul</p>
        <p>{word1}</p>
        <p>{wors}</p>
        <Child wors={wors} word1={word1} />
    </div>
  )
}

export default React.memo(Home)