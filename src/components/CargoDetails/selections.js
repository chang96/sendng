import { useState } from "react"

export default function Selections() {
    let [selected, setSelected] = useState(0)
    let sel = [ "Total Dimensions", "Package Details"]
    let rowed = {display: "flex", flexDirection:"row"}
    const handleClick = function(i){
       setSelected(i)
    }
    return (
      <div style= {{...rowed,
        backgroundColor: "lightgray",
        height: "40px",
        width: "50%",
        borderRadius:"5px",
        border:"none",
        padding:"3px",
        paddingTop:"3px",
        paddingBottom:"0px"
      }}>
       {sel.map(function(s, j){
           return (<div
           key={j}
           onClick={() => handleClick(j)}
            style={{
                width:"50%",
                height:"23px",
                backgroundColor: selected===j? "white" : "lightgrey",
                color:selected === j ? "blue" : "black",
                padding:"2%"
            }}
           >{s}</div>)
       })}
      </div>
    );
  }
  