import * as React from "react";

const PageTitle = (props: any) => {
  const { children } = props;

  return (
    <h1 className="text-3xl font-bold flex justify-center py-8 tracking-wider">
      {children}
    </h1>
  );
};

export default PageTitle;
