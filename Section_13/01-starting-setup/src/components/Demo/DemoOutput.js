import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput running");
  return <MyParagraph>{props.show ? 'This is new in DemoOutput':''};</MyParagraph>;
};

export default React.memo(DemoOutput);
