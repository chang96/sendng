

export default function Btn({title, filled, size, bordered}) {
    return (
      <div style={{
          backgroundColor:"",
          marginRight:"1%",
          marginTop:"20px",
          height:"auto",
      }}>
          <button style={{
          backgroundColor:filled,
          height:"30px",
          color:"white",
          border: bordered || "none",
          outline:"none",
          borderRadius:"5px"
          }} >{title}</button>
      </div>
    );
  }
  