import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
  visible?: boolean;
  closeModal: () => void;
}

const AddFolder = ({ children, visible = false, closeModal }: ModalProps) => {
  const [title, setTitle] = useState();

  const handleSubmit = (e: string) => {
    console.log(e.target.value);
    setTitle(e.target.value);
    closeModal();
  };

  return (
    <div className="">
      <dialog
        open={visible}
        className=" bg-emerald-950/60 border-2 border-emerald-950 rounded p-2"
      >
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <h1>{children}</h1>
        <form>
          <input value={title} placeholder="title" />
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddFolder;
