import Search from "./search"
import Btn from "./quotebtn"
export default function Head() {
    return (
      <div style={{
          display:"flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor:"#0746a7"
      }}>
          <div style={{
              display:"flex",
              flexDirection: "row",
              width: "70%",
              paddingLeft:"1em",
              color:"white"
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
             [{title: "Request Quote", filled:"#0746a7", bordered:"1px solid white"}, {title: "Book Shipment", filled:"#5bc782"}].map(function(t, i){
                return  <Btn key={i} title={t.title} filled={t.filled} bordered={t.bordered} />
            })
          }
          </div>
      </div>
    );
  }
  