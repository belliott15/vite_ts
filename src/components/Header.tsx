import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b shadow-md sticky top-0 p-3 bg-gray-400 z-[9999]">
      <div className="">
        {/* left */}
        <div className="flex mx-auto max-w-7xl">
          <Link to={"/"}>
            File <span>Drive</span>
          </Link>
        </div>
        {/* search*/}
        {/* right */}
      </div>
    </div>
  );
};

export default Header;
