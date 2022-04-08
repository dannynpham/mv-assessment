import * as React from "react";
import clsx from "clsx";

const SubmitBallotButton = (props: any) => {
  const { isDisabled } = props;
  return (
    <button
      form="ballot-form"
      disabled={isDisabled}
      className={clsx(
        "text-hover font-bold py-3 px-5 rounded hover:shadow hover:shadow-black text-xl",
        "fixed right-10 bottom-10 bg-[#009B86] disabled:opacity-50"
      )}
      type="submit"
    >
      Submit Ballot Button
    </button>
  );
};

export default SubmitBallotButton;
