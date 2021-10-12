import Search from "./search"
import Btn from "./quotebtn"
export default function Head() {
    return (
      <div style={{
          display:"flex",
          flexDirection: "row",
          justifyContent: "space-between"
      }}>
          <div style={{
              display:"flex",
              flexDirection: "row",
              width: "70%",
              paddingLeft:"1em"
          }}>
                <h4>Send FREIGHT</h4>
                <Search />
          </div>

          <div style = {{
              display:"flex",
              flexDirection:"row",
              width: "30%",
              justifyContent: "space-around",
          }}>
          {
             ["Request Quote", "Book Shipment"].map(function(t){
                return  <Btn title={t} />
            })
          }
          </div>
      </div>
    );
  }
  