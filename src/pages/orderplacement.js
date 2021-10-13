import CargoDetails from "../components/CargoDetails/cargodetails";
import Head from "../components/head"
import PathDetails from "../components/pathdetails/pathdetails";
import Radio from "../components/radio"
import Services from "../components/services";
function OrderPlacement() {
  return (
    <div>
        <Head />
        <Radio />
        <Services/>
        <PathDetails/>
        <CargoDetails />
    </div>
  );
}

export default OrderPlacement;
