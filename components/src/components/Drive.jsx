import React from "react";

const Drive = () => {
  const age = 5;
  const idCard = true;
  const gmail=false;
  return (
    // <div>
    //   {/* {age >= 18 ? (
    //     <h1>You are eligible to drive</h1>
    //   ) : (
    //     <h1>You are not eligible to drive</h1>
    //   )} */}
    // </div>

    <>
    {idCard && <h1>You can open Bank account.</h1>}
    {gmail && <h1>You can create Youtube Channel</h1>}
    </>
  );
};

export default Drive;
