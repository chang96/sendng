import services from "../assets/services";
import {useState} from "react";
export default function Services() {
    let [selected, setSelected] = useState(0)
    const handleSelected = function (i){
        setSelected(()=> i)
    }
    return (
      <div style={{
        height:"120px",
        border:"1px solid black"
      }}>
          <div>Select a service</div>
          <div style ={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-around"
          }}>
          {services.map(function(service, i){
              return <div key={i} onClick={()=> handleSelected(i)}
               style={{
                  border:"1px solid black",
                  width:"150px",
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"space-between",
                  backgroundColor: selected === i? "blue" : ""
              }}>
                  <div style={{width:"80px"}}>
                     {service.service}
                  </div>
                  <div>
                  {service.icon}
                  </div>
              </div>
          })}
          </div>
      </div>
    );
  }
  