import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
  visible?: boolean;
  closeModal: () => void;
}

const AddFolder = ({ children, visible = true, closeModal }: ModalProps) => {
  const [title, setTitle] = useState();

  const handleSubmit = (e: string) => {
    console.log(e.target.value);
    setTitle(e.target.value);
    closeModal();
  };

  return (
    <div>
      <dialog open={visible}>
        <h1>{children}</h1>
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <form>
          <input value={title} placeholder="title" />
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddFolder;
