import * as React from "react";

const Container = (props: any) => {
  const { children } = props;

  return <main className="mx-auto w-full md:w-4/5 lg:w-3/5">{children}</main>;
};

export default Container;
