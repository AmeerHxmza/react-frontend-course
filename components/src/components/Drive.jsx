import React from "react";

const Drive = () => {
  const age = 5;
  const idCard = false;
  const gmail=true;
  const myStyle={
    color:"blue",
    backgroundColor:"lightgray",
    padding:"10px",
    borderRadius:"5px",
    textAlign:"center"
  }
  return (
    // <div>
    //   {/* {age >= 18 ? (
    //     <h1>You are eligible to drive</h1>
    //   ) : (
    //     <h1>You are not eligible to drive</h1>
    //   )} */}
    // </div>

    <div style={myStyle}>
    {idCard && <h1 style={{color:"black",backgroundColor:"white"}}>You can open Bank account.</h1>}
    {gmail && <h1>You can create Youtube Channel</h1>}
    </div>
  );
};

export default Drive;
