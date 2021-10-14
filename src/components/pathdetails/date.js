

export default function DateInput({icon, type}) {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'35px',
          marginTop:"22px",
          backgroundColor:"#f3f3f3",
          width:"30%"
      }}>
         📅 <input type="date" style={{
              width:"100%",
              outline:"none",
              border:"none",
              backgroundColor:"#f3f3f3"
          }}  /> 
      </div>
    );
  }
  