import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import SingleFolderFileCard from "../components/SingleFolderFileCard";

const SingleFolder = () => {
  

  const navigate = useNavigate();
  return (
    <div>
      <div className="p-2">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="text-sm text-gray-400">Back</span>
        </button>
      </div>
      <div className="flex flex-col ">
        {
          [{}].map((asset) => (
            <SingleFolderFileCard {...asset}/>
          ))
        }
      </div>
    </div>
  );
};

export default SingleFolder;
