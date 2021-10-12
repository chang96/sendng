

export default function Btn({title, filled, size}) {
    return (
      <div style={{
          backgroundColor:filled,
          width: "120px",
          marginRight:"1%",
          marginTop:"20px"

      }}>
          <button>{title}</button>
      </div>
    );
  }
  