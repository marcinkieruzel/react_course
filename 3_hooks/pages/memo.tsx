import React, { useState, memo, useMemo, useCallback } from "react";

// Child component that only re-renders when its props change
// const ChildComponent = memo(
//   ({ count }: { count: number }) => {
//     console.log("ChildComponent rendered");

//     return <div>Child Count: {count}</div>;
//   },
//   (prev, next) => {
//     console.log("ChildComponent re-render prevented", prev, next);
//     return prev.count === next.count;
//   }
// );

const ChildComponent = ({ start }: { start: number }) => {
  const [count, setCount] = useState(start);

  console.log("ChildComponent rendered");

  return (
    <div>
      <h1>Child Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Child Count</button>
    </div>
  );
};

function App({
  children,
  child,
}: {
  children?: React.ReactNode;
  child?: (arg: number) => React.ReactNode;
}) {
  const [parentCount, setParentCount] = useState(0);

  const firstChild = useMemo(() => child(5), []);
  const secondChild = useMemo(() => child(10), []);

    // const firstChildCallback = useCallback(() => child(5), []);
    // const secondChildCallback = useCallback(() => child(10), []);

  return (
    <div className="App">
      <h1>React.memo Example</h1>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Increment Parent Count
      </button>
      {/* <button onClick={() => setCount(count + 1)}>Increment Child Count</button> */}
      <p>Parent Count: {parentCount}</p>
      {/* <ChildComponent count={count} /> */}
      {/* <ChildComponent /> */}
      {/* {children} */}
      {/* {firstChild}
      {secondChild} */}
      {/* {firstChildCallback()}
      {secondChildCallback()} */}
      {/* {child(5)} */}
      {/* {child(10)} */}
    </div>
  );
}

export default () => (
  <App child={(start) => <ChildComponent start={start} />} />
);
