import { useContext } from "react";
import { useState } from "react";

// import Card from "../components/ui/Card";
// import Modal from "../components/ui/Modal";
import Backdrop from "../components/ui/Backdrop";
import AuthContext from "../store/auth-context";

function MyPage(props) {
  const authCtx = useContext(AuthContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      {/* <h2>{props.text}</h2> */}
      <h2>{authCtx.username}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          +
        </button>
      </div>
      {/* {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />} */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default MyPage;
