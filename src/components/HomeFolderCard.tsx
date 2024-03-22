import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type HomeFolderProps = {
  id: number;
  name: string;
  size: number;
  dateCreated: string;
  dateModified: string;
};

const HomeFolderCard = ({ name, size, dateModified }: HomeFolderProps) => {
  return (
    <Link
      className="flex justify-between hover:shadow-sm border-b border-neutral-400 rounded-md p-2"
      to={`/folder/${name}`}
    >
      <div className="flex gap-2">
        {/* icon */}
        <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
        {/* title */}
        <span>{name}</span>
      </div>
      <p>{size}</p>
      <p>{dateModified}</p>
    </Link>
  );
};

export default HomeFolderCard;
