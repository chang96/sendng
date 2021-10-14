

export default function DateInput({icon, type}) {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'30px',
          marginTop:"22px",
          border:"1px solid ",
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
  