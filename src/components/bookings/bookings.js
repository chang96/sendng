import back from "../../assets/back.png"
function Back() {
    return (
      <div style={{
       paddingTop:"15px",
       marginRight:"5%"
      }}>
         <img width="30px" height="14px" src={back} />
      </div>
    );
  }
  

  
function BookingDetails() {
    return (
      <div style={{
       
      }}>
          <h3 style={{color:"#7a7b7d"}}>New Booking</h3>
          <p style={{color:"#979899"}}>Fill in the information below to get a quote or create a new booking </p>
      </div>
    );
  }
  

  
export default function Bookings() {
    return (
      <div style={{
       display:"flex",
       flexDirection:"row",
       width:"60%"
      }}>
          <Back />
          <BookingDetails />
      </div>
    );
  }
  