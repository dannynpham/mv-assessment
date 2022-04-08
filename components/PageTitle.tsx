import * as React from "react";

const PageTitle = (props: any) => {
  const { children } = props;

  return (
    <h1 className="text-3xl font-bold flex justify-center my-8">
      {children}
    </h1>
  );
};

export default PageTitle;
