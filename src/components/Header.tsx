import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faSearch, faSurprise } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b shadow-md sticky top-0 p-3 bg-gray-400 z-[9999]">
      <div className="flex mx-auto max-w-7xl justify-between">
        {/* left */}
        <div>
          <Link to={"/"}>
            File <span className="text-emerald-700 font-semibold">DRIVE</span>
          </Link>
        </div>
        {/* search*/}
        <div className="flex">
          <div className="rounded-md px-2 bg-white">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="search"
              placeholder="search"
              className="pl-2 focus:border-none focus:ring-0"
            />
          </div>
          {/* right */}
          <FontAwesomeIcon
            icon={faUser}
            className="bg-white rounded-full h-4 w-4 p-1 ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
