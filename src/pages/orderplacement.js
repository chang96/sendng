import AdditionalServices from "../components/Additionalservices/additionalservices";
import CargoDetails from "../components/CargoDetails/cargodetails";
import Head from "../components/head"
import PathDetails from "../components/pathdetails/pathdetails";
import Services from "../components/services";
function OrderPlacement() {
  let card = {
    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
  }
  return (
    <div>
        <div style={{margin:"0px"}}><Head /></div>
        <div style={{...card,margin:"7%"}}><Services/></div>
        <div style={{...card,margin:"7%"}}><PathDetails/></div>
        <div style={{...card,margin:"7%"}}><CargoDetails /></div>
        <div style={{...card,margin:"7%"}}><AdditionalServices /></div>
    </div>
  );
}

export default OrderPlacement;
