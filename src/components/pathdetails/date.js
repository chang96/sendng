

export default function DateInput({icon, type}) {
    return (
      <div style ={{
          display:"flex",
          flexDirection:"row",
          height:'30px',
          marginTop:"22px",
          border:"1px solid ",
      }}>
         📅 <input type="date" style={{
              width:"100%",
              outline:"none",
              border:"none"
          }}  /> 
      </div>
    );
  }
  