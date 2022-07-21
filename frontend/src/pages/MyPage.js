import { useState } from "react";

import Card from "../components/ui/Card";
// import Modal from "../components/ui/Modal";
import Backdrop from "../components/ui/Backdrop";

function MyPage(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <Card>
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          +
        </button>
      </div>
      {/* {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />} */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </Card>
  );
}

export default MyPage;
