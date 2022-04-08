import * as React from "react";
import Ballot from "./Ballot";

const Ballots = (props: any) => {
  const { ballots } = props;

  const [selectedNominees, setSelectedNominees] = React.useState<any>({});

  const selectNominee = (ballotId: string) => (nomineeId: string) => () => {
    const copySelectedNominees: any = { ...selectedNominees };
    copySelectedNominees[ballotId] = nomineeId;
    setSelectedNominees(copySelectedNominees);
  };

  const getIsNomineeSelected = (ballotId: string, nomineeId: string) =>
    selectedNominees[ballotId] === nomineeId;

  return ballots.map((ballot: any) => (
    <Ballot
      key={ballot.id}
      ballot={ballot}
      getIsNomineeSelected={getIsNomineeSelected}
      selectNominee={selectNominee}
    />
  ));
};

export default Ballots;
