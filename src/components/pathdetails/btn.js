

 function Btn({title, filled, size}) {
    return (
      <div style={{
          backgroundColor:filled,
          width: "110px",
          marginRight:"0%",
          marginTop:"20px",

      }}>
          <button style={{width:"100%", height:"35px", border:"1px solid black", outline:"none", backgroundColor:"white"}}>{title}</button>
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