import React from 'react'

const Rank = ({name, entries}) => {
  return (
    <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
        <h1 style={{
          fontSize: '64px',
          letterSpacing: '-4px'
        }}>
            {"Hello " + name + "👋"}
        </h1>
        <p style={{ marginBottom: '8px'}}> your entrie count is...</p>
      </div>
      <h2 style={{fontSize: "80px"}}>
          {"#" + entries}
      </h2>
    </div>
  )
}

export default Rank