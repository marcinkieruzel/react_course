import React, { useDeferredValue, useState } from "react";
import times from "lodash/times";

type Props = {};

const usedeferredvalue: React.FC<Props> = ({}): JSX.Element => {
  const [input, setInput] = useState<number | "">(0);
  const deferredInput = useDeferredValue(input);
  const [isPending, startTransition] = React.useTransition();
  const [elements, setElements] = React.useState<number>(0);

  const generateElements = (number) => {
    return times(number, (num) => {
      return <li key={num}>{num}</li>;
    });
  };

  React.useEffect(() => {
    startTransition(() => {
      console.log("startTransition");
      setElements(input as number);
    });
  }, [input]);

  return (
    <section>
      <input
        type="number"
        value={input}
        onChange={(e) =>
          setInput(
            e.currentTarget.value === "" ? "" : Number(e.currentTarget.value)
          )
        }
      ></input>
      {isPending ? "Pending..." : null}
      <ul>{generateElements(elements)}</ul>
    </section>
  );
};

export default usedeferredvalue;
