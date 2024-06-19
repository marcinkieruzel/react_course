'use client';
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";

const pasue = (time: number) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    // do nothing
  }
};

function App() {
  const [show, setShow] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pasue(1000)
    if (ref?.current && refContainer?.current && show) {
      const width = refContainer.current?.getBoundingClientRect().width;
      ref.current.style.maxWidth = `${width - 100}px`;
    }
  }, [show]);

  return (
    <div ref={refContainer} className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>

        <div
          style={{
            width: "12000px",
            backgroundColor: "red",
            height: "300px",
            display: show ? "block" : "none",
          }}
          ref={ref}
        >
          Hi
        </div>
      
    </div>
  );
}

export default App;
