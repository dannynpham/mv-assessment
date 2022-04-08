import * as React from "react";
import clsx from "clsx";
import Nominees from "./Nominees";

const Ballot = (props: any) => {
  const { ballot, getIsNomineeSelected, selectNominee } = props;

  const nominees = ballot?.items ?? [];
  return (
    <div key={ballot.id}>
      <h2 className="bg-gray-600 text-white p-3 rounded-lg text-lg">
        {ballot.title}
      </h2>
      <div
        className="py-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridAutoRows: "1fr",
          gap: "1rem",
        }}
      >
        <Nominees
          ballot={ballot}
          nominees={nominees}
          getIsNomineeSelected={getIsNomineeSelected}
          selectNominee={selectNominee(ballot.id)}
        />
      </div>
    </div>
  );
};

export default Ballot;
