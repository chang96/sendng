import RadioAndDetails from "./radio";
import Head from "./head";


export default function AdditionalServices() {
    // let rowed = {display: "flex", flexDirection:"row"}  
    return (
      <div style={{
          padding:"5%",
          paddingTop:"1%",
          paddingBottom:"2%"
      }}>
         <div style={{
             width:"100%",
         }} >
             <Head/>
         </div>

        <div style={{display:"flex", flexDirection:"row", width:"100%",}}>
         <RadioAndDetails />
        </div>
      </div>
    );
  }
  