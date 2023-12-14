import React from 'react'
import Child from './Child'

function Home({wors,word1}) {
  console.log("In the Home")
  return (
    <div>
        <p>via Soul</p>
        <p>{word1}</p>
        <p>{wors}</p>
        <Child wors={wors} word1={word1} />
    </div>
  )
}

export default React.memo(Home)