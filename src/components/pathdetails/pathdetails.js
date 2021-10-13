import ImExBtn from "./btn";
import Dropdown from "./dropdown";
import ToFro from "./tofro";
import DateInput from "./date";
import CargoValue from "./cargovalue";
export default function PathDetails({title, filled, size}) {
    return (
      <div style={{
          border:"1px solid black"

      }}>
         <div>icon</div>
        <div style={{display:"flex", flexDirection:"row"}}>
            <ImExBtn />
            <ToFro />

        </div>

        <div style={{display:"flex", flexDirection:"row"}}> 
            <DateInput />
            <Dropdown />
            <CargoValue />
        </div>
      </div>
    );
  }
  