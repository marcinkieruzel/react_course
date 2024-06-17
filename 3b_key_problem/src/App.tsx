import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [elements, setElemenets] = React.useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    // setInterval(() => {
    //   setCount((prev) => prev + 1);
    //   // setCount(count + 1);
    // }, 1000);
  }, []);

  console.log("Render", elements);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)} type="button">
        +
      </button>
      <button onClick={() => setCount((prev) => prev - 1)} type="button">
        -
      </button>
      <button
        onClick={() => {
          setElemenets((prev) => {
      

            return [...prev, 6];
          });
          // elements.push(6);
        }}
      >
        Add element
      </button>
      <h2>{count}</h2>
      {elements.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
}

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

const list = [
  { id: Math.random() * 100, name: "John Doe" },
  { id: Math.random() * 100, name: "Jane Doe" },
  { id: Math.random() * 100, name: "John Doe" },
  { id: Math.random() * 100, name: "Jane Doe" },
  { id: Math.random() * 100, name: "Aldous Huxley" },
  { id: Math.random() * 100, name: "Bill Gates" },
  { id: Math.random() * 100, name: "John Doe" },
  { id: Math.random() * 100, name: "Jane Doe" },
  { id: Math.random() * 100, name: "Adam Małysz" },
  { id: Math.random() * 100, name: "Renata Przemyk" },
  { id: Math.random() * 100, name: "John Doe" },
  { id: Math.random() * 100, name: "Jane Doe" },
];

function App() {
  const [user, setUser] = React.useState({ name: "John Doe" });
  const [people, setPeople] = React.useState(list);

  return (
    <div className="App">
      <Counter />
      {/* {user.name === "John Doe" ? (
        <Person key={1} name="John Doe" /> // The are the same beacuse the are in the same position and have the same type
      ) : (
        <Person key={2} name="Jane Doe" /> // The are the same beacuse the are in the same position and have the same type
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

      <ul>
        {people.map((name, index) => {
          return <li key={index}>{name?.name}</li>;
        })}
      </ul>

      <button
        onClick={() => {
          setPeople((prev) =>
            [...prev].sort((a, b) => a.name.localeCompare(b.name))
          );
        }}
      >
        Sort
      </button>
      <button
        onClick={() => {
          setPeople((prev) => [...prev].sort().reverse());
        }}
      >
        Sort
      </button>
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setPeople((prev) => {
            const el = [...prev];

            el.splice(3, 4);

            return el;
          });
        }}
      >
        Remove one
      </button> */}
    </div>
  );
}

export default App;
