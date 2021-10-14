import searchicon from "../assets/si.png"
import "./css/search.css"
export default function Search() {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'30px',
          marginTop:"22px",
          marginLeft: "5%",
          border:"1px solid ",
          width:"55%"
      }}>
          <input placeholder="Search" style={{
              width:"100%",
              outline:"none",
              border:"none",
              backgroundColor:"#3a6bb8",
              
          }} /> <span style={{backgroundColor:"#3a6bb8", padding:"4px"}}><img  width="20px" height="20px" src={searchicon} /></span>
      </div>
    );
  }
  