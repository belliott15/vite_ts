import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faHardDrive } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons/faCloud";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SideBar = () => {
  const links = [
    {
      label: "Drive",
      link: "#",
      icon: faHardDrive,
    },
    {
      label: "Cloud",
      link: "#",
      icon: faCloud,
    },
    {
      label: "Things",
      link: "#",
      icon: faFolderClosed,
    },
  ];
  return (
    <div className="flex-[3] h-screen border-r">
      <ul className="flex flex-col gap-2">
        {links.map(({ label, icon, link }, index) => (
          <li key={index} className="flex items-center gap-2 text-lg p-3 ">
            <Link
              to={link}
              className="hover:underline hover:bg-neutral-300 rounded-md w-full"
            >
              <FontAwesomeIcon icon={icon} size="1x" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
