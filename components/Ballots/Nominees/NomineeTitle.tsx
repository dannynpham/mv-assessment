import * as React from "react";

const NomineeTitle = (props: any) => {
  const { title } = props;

  return <h3 className="text-lg font-medium mb-4">{title}</h3>;
};

export default NomineeTitle;
