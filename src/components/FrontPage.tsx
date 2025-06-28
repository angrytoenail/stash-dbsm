import type { PropsWithChildren } from "react";

export default (props: PropsWithChildren, _: any, original: React.FC<any>) => {
  return (
    <>
      <p>Hello from Test React!</p>
      {original({ ...props })}
    </>
  );
};
