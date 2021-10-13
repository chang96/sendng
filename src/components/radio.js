import { useState } from "react"

export default function Radio({title, filled, size}) {
    let [value, setValue] = useState(false)
    const handleClick = function(){
        setValue(!value)
    }
    return (
      <div onClick={() => handleClick()} style= {{
        backgroundColor: value === false ? "lightgray" : "blue",
        border:"1px solid black",
        height: "15px",
        width: "30px",
        borderRadius:"30%"
      }}>
        <div style={{
            border:"1px solid black",
            height: "14px",
            width: "14px",
            borderRadius:"100%",
            backgroundColor:"white",
            float: value === false? "left" : "right",
            
        }}></div>
      </div>
    );
  }
  