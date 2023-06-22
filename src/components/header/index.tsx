import { useNavigate } from "react-router-dom";
import {
  ABOUT,
  CONTACT_ME,
  DASHBOARD,
  PROJECTS_DONE,
  TECH_STACKS,
} from "../../helpers/constants";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-white-5">
      <div className="flex px-44 py-8 justify-between">
        <div className="flex px-32 gap-2">
          <p className="text-3xl text-gray-600 font-semibold">{'< CODER FROM'}</p>
          <p className="text-3xl text-red font-semibold">{'MECH />'}</p>
        </div>
        <div className="flex  gap-10">
          <p
            className="text-xl text-gray-600 font-medium cursor-pointer"
            onClick={() => navigate(DASHBOARD)}
          >
            HOME
          </p>
          <p
            className="text-xl text-gray-600 font-medium cursor-pointer"
            onClick={() => navigate(PROJECTS_DONE)}
          >
            PROJECTS
          </p>
          <p
            className="text-xl text-gray-600 font-medium cursor-pointer"
            onClick={() => navigate(TECH_STACKS)}
          >
            STACKS
          </p>
          <p
            className="text-xl text-gray-600 font-medium cursor-pointer"
            onClick={() => navigate(ABOUT)}
          >
            ABOUT
          </p>
          <p
            className="text-xl text-gray-600 font-medium cursor-pointer"
            onClick={() => navigate(CONTACT_ME)}
          >
            CONTACT
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
