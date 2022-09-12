import React, { ReactNode, useRef } from "react";

type Props = {
  name: string;
};

const Component: React.FC<Props> = ({ name }): ReactNode => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  return <h1>{name}</h1>;
};

export default Component
