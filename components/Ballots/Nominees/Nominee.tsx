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
          "p-4 border-8 bg-gray-800 rounded-lg cursor-pointer h-full",
          "flex items-center flex-col justify-between",
          "shadow shadow-black",
          isNomineeSelected
            ? "border-yellow-500 shadow-lg shadow-black"
            : "border-transparent"
        )}
        onClick={selectNominee}
      >
        <NomineeTitle title={nominee.title} />
        <NomineeImage nominee={nominee} />
        <div
          className={clsx(
            "absolute h-full w-full top-0 rounded-lg",
            "flex items-center justify-center flex-col",
            "opacity-0 hover:opacity-100",
            "font-medium font-xl leading-6 tracking-widest text-white text-center"
          )}
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
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
