import * as React from "react";
import Ballot from "./Ballot";

const Ballots = (props: any) => {
  const { ballots } = props;

  const [selectedNominees, setSelectedNominees] = React.useState<any>({});

  const selectNominee = (categoryId: string, nomineeId: string) => () => {
    const copySelectedNominees: any = { ...selectedNominees };
    copySelectedNominees[categoryId] = nomineeId;
    setSelectedNominees(copySelectedNominees);
  };

  const getIsNomineeSelected = (categoryId: string, nomineeId: string) =>
    selectedNominees[categoryId] === nomineeId;

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
