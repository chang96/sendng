import ImExBtn from "./btn";
import Dropdown from "./dropdown";
import ToFro from "./tofro";
import DateInput from "./date";
import CargoValue from "./cargovalue";
import info from "../../assets/info.png"
export default function PathDetails({title, filled, size}) {
    return (
      <div style={{
          padding:"5%",
          paddingTop:"3%",
          paddingBottom:"3%"
      }}>
         <div style={{margin:"0%"}}><img alt="" width="20px" height="20px" src={info} /></div>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
            <ImExBtn />
            <ToFro />

        </div>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
            <DateInput />
            <Dropdown />
            <CargoValue />
        </div>
      </div>
    );
  }
  