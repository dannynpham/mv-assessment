import Modal from "Components/Modal";

const BallotSuccessModal = (props: any) => {
  const { isModalShowing, hideModal, ballots, selectedNominees } = props;

  console.log(ballots, selectedNominees);

  return (
    <Modal
      isModalShowing={isModalShowing}
      hideModal={hideModal}
    >
      <div>test</div>
    </Modal>
  );
};

export default BallotSuccessModal;
