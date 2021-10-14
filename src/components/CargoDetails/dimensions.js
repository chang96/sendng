

function Dimensions({icon, type, placeholder, label}) {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'55px',
          marginTop:"22px",
          border:"1px solid ",
          width:"100%"
      }}>
         <div style={{
              display:"flex",
              flexDirection:"row",
              marginRight:"5px"
         }}>{label}</div> <input placeholder={placeholder} type={type} style={{
              width:"60%",
              outline:"none",
              border:"none", 
          }}  /> 
          <div style={{marginTop:"15px"}}>
              {icon} 
           </div>
      </div>
    );
  }
  

  
  export default function Dim(){
    const inputDetails = [
        {placeholder:"Total Volume", label:"", icon:"cbm"},
        {placeholder:"Total Weight", label:"", icon:"Kg"},
]

    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            width:"50%"
        }} >
            {inputDetails.map(function(det, i){
                return <Dimensions key={i} label= {det.label} placeholder={det.placeholder} icon={det.icon}/>
            })}
        </div>
    )
  }