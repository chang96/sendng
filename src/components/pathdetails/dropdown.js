import {useState} from "react";

export default function Dropdown() {
    const options = [{option: "Incoterms"}]
    let [selected, setSelected] = useState(options[0].option)
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'30px',
          marginTop:"22px",
          paddingTop:"-2px",
          border:"1px solid ",
          width:"100%"
      }}>
         <div style ={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          width:"100%",
          }}><p style={{marginTop:"10px"}}>{selected}</p> <div>▼</div></div>

        
      </div>
    );
  }
  