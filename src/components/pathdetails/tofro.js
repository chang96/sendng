import pin from "../../assets/pin.png"
import "../css/paths.css"
function XToFro({icon, type, placeholder, label}) {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'30px',
          marginTop:"22px",
          marginLeft: "5%",
          border:"1px solid ",
          width:"100%",
          backgroundColor:"#f3f3f3"
      }}>
         <div style={{
              display:"flex",
              flexDirection:"row",
              marginRight:"5px",
              paddingTop:"3px",
              
         }}>
         
         <img width="20px" height="20px" src={icon}/> {label}
         </div> <input placeholder={placeholder} type={type} style={{
              width:"100%",
              outline:"none",
              border:"none",
              backgroundColor:"#f3f3f3"
          }}  /> 
      </div>
    );
  }
  

  
  export default function ToFro(){
    const inputDetails = [
        {placeholder:"City or Port", label:"From", icon:pin},
        {placeholder:"City or Port", label:"To", icon:pin},
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