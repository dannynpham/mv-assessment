import * as React from "react";

const useModal = (defaultShowing = false) => {
  const [isModalShowing, setIsModalShowing] = React.useState(defaultShowing);
  const hideModal = () => setIsModalShowing(false);
  const showModal = () => setIsModalShowing(true);

  return { isModalShowing, hideModal, showModal };
};

export default useModal;