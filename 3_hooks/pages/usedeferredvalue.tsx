import React, { useDeferredValue, useState } from "react";
import times from "lodash/times";

type Props = {};

const usedeferredvalue: React.FC<Props> = ({}): JSX.Element => {
  const [input, setInput] = useState<number | "">(0);

  const generateElements = (number) => {
    return times(number, (num) => {
      return <li key={num}>{num}</li>;
    });
  };

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
      <ul>{generateElements(input)}</ul>
    </section>
  );
};

export default usedeferredvalue;
