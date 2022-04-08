import * as React from "react";
import clsx from "clsx";
import NomineeTitle from "./NomineeTitle";
import NomineeImage from "./NomineeImage";

const Nominee = (props: any) => {
  const { nominee, ballot, isNomineeSelected, selectNominee } = props;

  return (
    <div className="relative">
      <div
        className={clsx(
          "p-4 border-4 bg-blue-200 rounded-lg cursor-pointer h-full",
          "flex items-center flex-col justify-between",
          "hover:shadow-white hover:shadow-lg",
          isNomineeSelected ? "border-red-500" : "border-blue-500"
        )}
        onClick={selectNominee}
      >
        <NomineeTitle title={nominee.title} />
        <NomineeImage nominee={nominee} />
        <div
          className={clsx(
            "text-white text-center absolute h-full w-full top-0 rounded-lg",
            "flex items-center justify-center flex-col",
            "opacity-0 hover:opacity-100",
            "font-medium font-lg leading-6 tracking-widest"
          )}
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
        >
          <p>Select {nominee.title}</p>
          <p>for</p>
          <p>{ballot.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Nominee;
