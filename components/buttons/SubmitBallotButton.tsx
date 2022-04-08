import * as React from "react";

const SubmitBallotButton = (props: any) => {
  const { onSubmit = () => {} } = props;

  return (
    <button
      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded fixed right-10 bottom-10"
      onClick={onSubmit}
    >
      Submit Ballot Button
    </button>
  );
};

export default SubmitBallotButton;
