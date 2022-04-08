import * as React from "react";
import clsx from "clsx";

const SubmitBallotButton = (props: any) => {
  const { onSubmit = () => {} } = props;

  return (
    <button
      className={clsx(
        "bg-yellow-500 hover:bg-yellow-700",
        "text-white font-bold py-3 px-5 rounded shadow shadow-black text-xl",
        "fixed right-10 bottom-10"
      )}
      onClick={onSubmit}
    >
      Submit Ballot Button
    </button>
  );
};

export default SubmitBallotButton;
