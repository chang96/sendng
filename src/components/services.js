import services from "../assets/services";
import {useState} from "react";
export default function Services() {
    let [selected, setSelected] = useState(0)
    const handleSelected = function (i){
        setSelected(()=> i)
    }
    return (
      <div style={{
        height:"150px",
        padding:"5%",
      }}>
          <div style={{
              margin:"0%",
          }}>
              <h4 style={{color:"#3b3b3b"}}>Select a service</h4>
          </div>
          <div style ={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-around"
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
                  <div style={{width:"80%", marginTop:"7%"}}>
                     {service.service}
                  </div>
                  <div style={{fontSize:"50px"}}>
                  {service.icon}
                  </div>
              </div>
          })}
          </div>
      </div>
    );
  }
  