import { useState } from "react"

 function Radio({title, filled, size}) {
    let [value, setValue] = useState(true)
    const handleClick = function(){
        setValue(!value)
    }
    // let rowed = {display: "flex", flexDirection:"row"}
    return (
      <div onClick={() => handleClick()} style= {{
        backgroundColor: value === false ? "lightgray" : "blue",
        border:"1px solid black",
        height: "18px",
        width: "30px",
        borderRadius:"17px"
      }}>
        <div style={{
            border:"1px solid black",
            height: "17px",
            width: "17px",
            borderRadius:"100%",
            backgroundColor:"white",
            float: value === false? "left" : "right",
            
        }}></div>
      </div>
    );
  }
  
  export default function RadioAndDetails({keypoint="Dangerous Cargo", example="(ex Chemicals, Battery)"}){
     let rowed = {display: "flex", flexDirection:"row"}  
    return (
          <div style={{...rowed, justifyContent:"space-between", width:"100%"}}>
              <div><Radio /></div>
              <div style={{...rowed, marginTop:"-23px", color:"#8C8C8C"}}><h4>{keypoint}</h4> <p style={{marginTop:"23px"}}>{example}</p></div>
          </div>
      )
  }
