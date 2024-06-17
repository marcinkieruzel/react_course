import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Person = ({ name }: { name: string }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)} type="button">
        +
      </button>
      <button onClick={() => setCount((prev) => prev - 1)} type="button">
        -
      </button>
      <h1>{name}</h1>
      <h2>{count}</h2>
    </div>
  );
};

function App() {
  const [user, setUser] = React.useState({ name: "John Doe" });

  return (
    <div className="App">
      {user.name === "John Doe" ? (
        <Person name="John Doe" />
      ) : (
        <Person name="Jane Doe" />
      )}

      <button
        onClick={() => {
          setUser((prev) =>
            prev.name === "John Doe"
              ? { name: "Jane Doe" }
              : { name: "John Doe" }
          );
        }}
        type="button"
      >
        Swap user
      </button>
    </div>
  );
}

export default App;
