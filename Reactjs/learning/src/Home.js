import React from 'react'

function Home({wors,word1}) {
  console.log("In the Home")
  return (
    <div>
        <p>via Soul</p>
        <p>{word1}</p>
        <p>{wors}</p>
    </div>
  )
}

export default React.memo(Home)