import React from 'react'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div style={{position: "relative" , display: "flex", justifyContent: "center", alignItems: "center",paddingBottom: '64px'}}>
        <img style={{width: "600px", height: "auto", borderRadius: '32px'}} id='inputImage' alt='' src={imageUrl} />
        {box.leftCol ? (
            <div style={{position: "absolute", display: "flex", flexWrap: "wrap", justifyContent: "center", top: box.topRow, left: box.leftCol, right: box.rightCol, bottom: box.topRow, border: "2px solid #AD00FF", borderRadius: "8px"}}></div>
        ) : (
            <></>
        )}
    </div>
  )
}

export default FaceRecognition