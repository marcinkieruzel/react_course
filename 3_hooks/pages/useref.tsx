import React, { useRef } from "react";

const style = {
  width: "100%",
  height: "100vh",
  backgroundColor: "red",
};

const Useref: React.FC = (): JSX.Element => {
  const ref = useRef(null);

  return <div ref={ref} style={style}></div>;
};

export default Useref;
