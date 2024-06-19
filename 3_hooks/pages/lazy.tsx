import React, { Suspense, lazy, useId, useState } from "react";

// Lazy load the component
const LazyComponent = lazy(() => import("../components/LazyComponent"));

function App() {
  const [show, setShow] = useState(false);
  const id = useId();

  return (
    <div className="App">
      <h1>React.lazy Example</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"} Lazy Component
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}

export default App;
