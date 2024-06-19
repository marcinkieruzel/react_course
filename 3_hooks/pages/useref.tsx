import React, { CSSProperties, useEffect, useRef } from "react";
import $ from "jquery";

const style : CSSProperties = {
  width: "100%",
  height: "100vh",
  backgroundColor: "red",
  position: "absolute",
};

const Useref: React.FC = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(ref.current);

    if (ref.current) {
      $(ref.current).animate({ top: "300px", left: "300px" }, 3000);
    }
  }, []);

  return <div ref={ref} style={style}>

    <button onClick={() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }}>
      Focus input
    </button>
    <input type="text" ref={inputRef} />
  </div>;
};

export default Useref;
