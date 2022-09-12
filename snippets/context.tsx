import React, {useState, useContext} from "react";

export const TestContext = React.createContext<{
    someState: string,
    setSomeState: React.Dispatch<string>
}>({
  someState: "",
  setSomeState: () => null,
});

const SomeComponent = () => {
  const [someState, setSomeState] = useState<string>("");

  return (
    <TestContext.Provider value={{ someState, setSomeState }}>
      <Child />
    </TestContext.Provider>
  );
};

const Child = () => {
  const { someState, setSomeState } = useContext(TestContext);
  return (
    <>
      <h1
        onClick={() => {
          setSomeState("Hello world!!!");
        }}
      >
        {someState}
      </h1>
    </>
  );
};

export default SomeComponent
