import * as React from "react";
import clsx from "clsx";

const SubmitBallotButton = (props: any) => {
  const { onSubmit = () => {} } = props;

  return (
    <button
      className={clsx(
        "text-hover font-bold py-3 px-5 rounded hover:shadow hover:shadow-black text-xl",
        "fixed right-10 bottom-10 bg-[#009B86]"
      )}
      onClick={onSubmit}
    >
      Submit Ballot Button
    </button>
  );
};

export default SubmitBallotButton;
