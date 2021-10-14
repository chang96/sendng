import Dim from "./dimensions";
import RadioAndDetails from "./radio";
import Selections from "./selections";

export default function CargoDetails() {
    let rowed = {display: "flex", flexDirection:"row"}  
    return (
      <div style={{
          padding:"5%",
          paddingTop:"1%",
          paddingBottom:"3%"

      }}>
         <div style={{
             ...rowed,
             width:"100%",
             justifyContent:"space-between"
         }} >
             <div><h4 style={{color:"#7a7b7d"}}>Cargo Details</h4></div>
             
             <div><RadioAndDetails/></div>
         </div>

        <div style={{display:"flex", flexDirection:"row", width:"100%",}}>
         <Selections/>

        </div>

        <div style={{display:"flex", flexDirection:"row"}}> 
          <Dim />
        </div>
      </div>
    );
  }
  