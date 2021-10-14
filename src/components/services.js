import services from "../assets/services";
import {useState} from "react";
export default function Services() {
    let mql = window.matchMedia('(max-width: 900px)')
    let iconSize = mql.matches === true? "20px": "50px"
    let m = mql.matches === true? "0%": "7%"
    let [selected, setSelected] = useState(0)
    const handleSelected = function (i){
        setSelected(()=> i)
    }
    return (
      <div style={{
        height:"140px",
        padding:"5%",
        paddingTop:"1%",
        paddingBottom:"2%"
      }}>
          <div style={{
              margin:"0%",
          }}>
              <h4 style={{color:"#7a7b7d"}}>Select a service</h4>
          </div>
          <div style ={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
          }}>
          {services.map(function(service, i){
              return <div key={i} onClick={()=> handleSelected(i)}
               style={{
                  border:"1px solid black",
                  width:"20%",
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"space-between",
                  backgroundColor: selected === i? "#0746a7" : "",
                  color: selected===i? "white":"#81868c",
                  paddingLeft:"2%"
              }}>
                  <div style={{width:"80%", marginTop:m}}>
                     {service.service}
                  </div>
                  <div style={{fontSize: iconSize}}>
                  {service.icon}
                  </div>
              </div>
          })}
          </div>
      </div>
    );
  }
  