

function XCargoValue({icon, type, placeholder, label}) {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'30px',
          marginTop:"22px",
          border:"1px solid ",
          width:"100%"
      }}>
         <div style={{
              display:"flex",
              flexDirection:"row",
              marginRight:"5px"
         }}>{icon} {label}</div> <input placeholder={placeholder} type={type} style={{
              width:"60%",
              outline:"none",
              border:"none"
          }}  /> 
      </div>
    );
  }
  

  
  export default function CargoValue(){
    const inputDetails = [
        {placeholder:"Total Cargo Value", label:"", icon:""}
]

    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            width:"80%"
        }} >
            {inputDetails.map(function(det, i){
                return <XCargoValue key={i} label= {det.label} placeholder={det.placeholder} icon={det.icon}/>
            })}
        </div>
    )
  }