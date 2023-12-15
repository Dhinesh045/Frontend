import React, { useContext, useEffect, useState } from 'react'
import { GlobalVariable } from './Theme'
import './Child.css';
import axios from 'axios'

function Child() {
    const getVal=useContext(GlobalVariable)
    const [data1,setData1]=useState({})
    const[dispaly,setDisplay]=useState([])
    const [body,setBody]=useState({body:"",userId:"",title:""})
    async function getUser(){
      try{
        const {data}= await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(data)
        setData1(data)
      } catch (error) {

      }
    }
    function changeText(e){
      setBody({...body,
        [e.target.name]:e.target.value
      })

    }
    async function postUser(){
      try{
        setDisplay([body])
         const{data}=await axios.post("https://jsonplaceholder.typicode.com/posts",{
          body: body.body,
          userId:body.userId,
          title:body.title
         })
         console.log(data)
      } catch(error){

      }
    }
    useEffect(()=>{
      getUser()
    },[])
  return (
    <div>
      <input name='userId' onChange={(e)=>changeText(e)}/>
      <input name='body' onChange={(e)=>changeText(e)}/>
      <input name='title' onChange={(e)=>changeText(e)}/>
     <button onClick={()=>postUser()}>submit</button>
        <p id='child'>this is from HomeJs</p>
        <p id='child1'>{getVal.age}</p>
        <p id='child1'>{getVal.name}</p>
        <p>{data1.title}</p>
        {dispaly.map((e)=>(
          <>
          <p>{e.body}</p></>
        ))}
    </div>
  )
}

export default Child