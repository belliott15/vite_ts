import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeFolderCard from "../components/HomeFolderCard";
import data from "../../data.ts";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { useState } from "react";
import AddFolder from "../components/AddFolder.tsx";

const Homepage = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="flex w-full justify-between p-4">
        <div>
          <p></p>Name
        </div>
        <div>Size</div>
        <div>Date Modified</div>
      </div>
      <div className="grid grid-cols-1 w-full p-4 gap-2">
        {data.map((folder) => (
          <HomeFolderCard
            key={folder.id}
            name={folder.name}
            size={folder.size}
            dateModified={folder.dateModified}
          />
        ))}
      </div>
      <div className="flex justify-end w-full p-4">
        <button
          onClick={handleModal}
          className="bg-emerald-100 rounded-full h-10 w-10 flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faPlus}
            size={"2x"}
            className="text-emerald-600"
          />
        </button>
      </div>
      <AddFolder closeModal={handleModal} visible={modal}>
        Add new folder?
      </AddFolder>
    </div>
  );
};

export default Homepage;
