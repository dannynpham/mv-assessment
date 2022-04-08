import * as React from "react";
import clsx from "clsx";

const Nominee = (props: any) => {
  const { nominee, ballot, isNomineeSelected, selectNominee } = props;
  console.log(nominee);

  return (
    <div
      key={nominee.id}
      className={clsx(
        "px-8 py-4 border-4 bg-blue-200 flex items-center flex-col justify-between space-y-4",
        isNomineeSelected ? "border-red-500" : "border-blue-500"
      )}
    >
      <h3>{nominee.title}</h3>
      <div className="rounded-full p-10 border border-blue-500 inline-block relative">
        <div>
          <p>Nominee</p>
          <p>Image</p>
        </div>
      </div>
      <button
        className="text-white bg-gray-500 p-3"
        onClick={selectNominee(ballot.id, nominee.id)}
      >
        Select Button
      </button>
    </div>
  );
};

export default Nominee;
