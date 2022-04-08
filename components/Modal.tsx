import * as React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement('.app');

const style = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    minWidth: "300px",
    maxWidth: "600px",
    height: "fit-content",
    padding: "50px 20px",
    border: "1px solid #E5E7F5",
    display: "relative",
    borderRadius: "8px",
    transform: "translate(-50%, -50%)",
  },
};

const Modal = (props: any) => {
  const { children, isModalShowing, hideModal } = props;

  return (
    <ReactModal isOpen={isModalShowing} style={style}>
      <button className="absolute right-4 top-4 text-xl cursor-pointer" onClick={hideModal}>
        X
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;
