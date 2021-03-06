import * as React from "react";
import Nominee from "./Nominee";

const Nominees = (props: any) => {
  const { ballot, nominees, getIsNomineeSelected, selectNominee } = props;

  return nominees.map((nominee: any) => (
    <Nominee
      key={nominee.id}
      ballot={ballot}
      nominee={nominee}
      isNomineeSelected={getIsNomineeSelected(ballot.id, nominee.id)}
      selectNominee={selectNominee(nominee.id)}
    />
  ));
};

export default Nominees;
