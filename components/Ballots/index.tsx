import * as React from "react";
import Ballot from "./Ballot";
import useModal from "Hooks/useModal";
import { BallotSuccessModal } from "Components/modals";
import { SubmitBallotButton } from "Components/buttons";

const Ballots = (props: any) => {
  const { ballots } = props;
  const { isModalShowing, showModal, hideModal } = useModal();
  const [selectedNominees, setSelectedNominees] = React.useState<any>({});
  const hasSelectedNominees = Object.values(selectedNominees).length === 0;

  const submitBallot = (e: any) => {
    e.preventDefault();
    showModal();
  };

  const closeModal = () => {
    setSelectedNominees({});
    hideModal();
  };
  const selectNominee = (ballotId: string) => (nomineeId: string) => () => {
    const copySelectedNominees: any = { ...selectedNominees };
    if (copySelectedNominees[ballotId] === nomineeId) {
      delete copySelectedNominees[ballotId];
    } else {
      copySelectedNominees[ballotId] = nomineeId;
    }
    setSelectedNominees(copySelectedNominees);
  };

  const getIsNomineeSelected = (ballotId: string, nomineeId: string) =>
    selectedNominees[ballotId] === nomineeId;

  return (
    <>
      <BallotSuccessModal
        isModalShowing={isModalShowing}
        hideModal={closeModal}
        ballots={ballots}
        selectedNominees={selectedNominees}
      />
      <form id="ballot-form" onSubmit={submitBallot}>
        {ballots.map((ballot: any) => (
          <Ballot
            key={ballot.id}
            ballot={ballot}
            getIsNomineeSelected={getIsNomineeSelected}
            selectNominee={selectNominee}
          />
        ))}
      </form>
      <SubmitBallotButton isDisabled={hasSelectedNominees} />
    </>
  );
};

export default Ballots;
