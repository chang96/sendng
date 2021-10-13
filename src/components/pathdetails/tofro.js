

function XToFro({icon, type, placeholder, label}) {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'30px',
          marginTop:"22px",
          marginLeft: "5%",
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
  

  
  export default function ToFro(){
    const inputDetails = [
        {placeholder:"City or Port", label:"From", icon:"o"},
        {placeholder:"City or Port", label:"To", icon:"o"},
]

    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            width:"80%"
        }} >
            {inputDetails.map(function(det, i){
                return <XToFro key={i} label= {det.label} placeholder={det.placeholder} icon={det.icon}/>
            })}
        </div>
    )
  }