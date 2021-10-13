

 function Btn({title, filled, size}) {
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
  
export default function ImExBtn(){
    const names = [{name: "Import"}, {name:"Export"}]
    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent: "space-around",
            width:"20%"
        }} >
            {names.map(function(name){
                return <Btn title={name.name} />
            })}
        </div>
    )
}