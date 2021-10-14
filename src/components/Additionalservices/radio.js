import { useState } from "react"

 function Radio({title, filled, size}) {
    let [value, setValue] = useState(false)
    const handleClick = function(){
        setValue(!value)
    }
    let rowed = {display: "flex", flexDirection:"row"}
    let columned = {display: "flex", flexDirection:"column"}
    return (
      <div onClick={() => handleClick()} style= {{
        backgroundColor: value === false ? "#EEEFF4" : "#0546A9",
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
  
function RadioAndDetailsBox({keypoint="Dangerous Cargo", example="(ex Chemicals, Battery)"}){
     let rowed = {display: "flex", flexDirection:"row"}  
     let columned = {display: "flex", flexDirection:"column"}
    return (
          <div style={{...rowed, justifyContent:"space-between", width:"50%", marginTop:"20px"}}>
              <div style={{width:"10%", marginRight:"15px"}}><Radio /></div>
              <div style={{...columned, marginTop:"-23px", width:"90%"}}><h4 style={{color:"#7a7b7d"}}>{keypoint}</h4> <p style={{marginTop:"-20px", color:"#979899"}}>{example}</p></div>
          </div>
      )
  }


export default function RadioAndDetails(){
    const details = [
        {keypoint:"Export Forwarding", example:"We handle custom's clearance and documentation"},
        {keypoint:"Import Customs Clearance", example:"We handle import customs and regulaory requirements"},
        {keypoint:"Cargo Insurance", example:"Protect your cargo from logistics risks up to its full value"},
        {keypoint:"Transport/Delivery", example:"We deliver the cargo to your door step from the port"}
    ]
    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
        }}>
            {details.map(function(x){
                return <RadioAndDetailsBox keypoint={x.keypoint} example={x.example} />
            })}
        </div>
    )
}