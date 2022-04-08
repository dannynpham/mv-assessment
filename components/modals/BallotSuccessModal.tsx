import Modal from "Components/Modal";
import { getBallotById, getNomineeById } from "Utils/ballotHelpers";

const BallotSuccessModal = (props: any) => {
  const { isModalShowing, hideModal, ballots, selectedNominees } = props;

  const ballotAndNomineeIds: any = Object.entries(selectedNominees);

  return (
    <Modal isModalShowing={isModalShowing} hideModal={hideModal}>
      {ballotAndNomineeIds.map(([categoryId, nomineeId]: any) => (
        <div key={categoryId} className="text-center mb-8 last:mb-0 shadow shadow-black rounded-br rounded-bl bg-[#009B86]">
          <h2 className="bg-gray-500 text-white p-3 text-lg font-medium rounded-tr rounded-tl">
            {getBallotById(ballots, categoryId)?.title}
          </h2>
          <div className="p-6 text-white font-medium tracking-wider">
            {
              getNomineeById(
                getBallotById(ballots, categoryId)?.items ?? [],
                nomineeId
              )?.title
            }
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default BallotSuccessModal;
