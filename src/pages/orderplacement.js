import AdditionalServices from "../components/Additionalservices/additionalservices";
import Bookings from "../components/bookings/bookings";
import CargoDetails from "../components/CargoDetails/cargodetails";
import Head from "../components/head"
import PathDetails from "../components/pathdetails/pathdetails";
import Services from "../components/services";
function OrderPlacement() {
  let card = {
    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    backgroundColor:"white"
  }
  return (
    <div>
        <div style={{margin:"0px"}}><Head /></div>
        <div style={{margin:"2%"}}><Bookings /></div>
        <div style={{...card,margin:"5%",marginTop:"-2%"}}><Services/></div>
        <div style={{...card,margin:"5%",marginTop:"-2%"}}><PathDetails/></div>
        <div style={{...card,margin:"5%",marginTop:"-2%"}}><CargoDetails /></div>
        <div style={{...card,margin:"5%",marginTop:"-2%"}}><AdditionalServices /></div>
    </div>
  );
}

export default OrderPlacement;
