import React, { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  callback: () => number;
};

const Child: React.FC<Props> = React.memo(
  ({ callback }): JSX.Element => {
    console.log("Looks like I've just rendered. Was that on purpose?");

    return <h1>Im'm a very big number of {callback()}</h1>;
  },
  (prev, next) => {
    console.log(prev.callback, next.callback, prev.callback === next.callback);

    return Object.is(prev.callback, next.callback);
  }
);

const Parent: React.FC = (): JSX.Element => {
  const [timer, setTimer] = useState(new Date());

  const callback = useCallback(() => {
    return Math.pow(200, 20);
  }, []);


  const callback2 = useMemo(() => {
    return Math.pow(200, 20);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setTimer(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Looks like callback has changed somehow");
  }, [callback]);

  return (
    <div>
      <h2>{timer.toLocaleTimeString()}</h2>
      <Child callback={callback} />
    </div>
  );
};

export default Parent;
