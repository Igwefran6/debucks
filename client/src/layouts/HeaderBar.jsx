import Icon from "@mdi/react";
import { mdiKey, mdiChevronTripleUp, mdiCashEdit } from "@mdi/js";

const Header = () => {
  return (
    <div className="p-2 bg-success text-light sticky top-0 z-10 h-[100px]">
      <div className="text-center">
        <span className="italic ">De</span>
        <span className="font-semibold">Bucks</span>
      </div>
      <ul className="flex justify-around items-center min-h-[40px] my-2">
        <li className="w-1/3 grid place-items-center">
          <Icon path={mdiCashEdit} size={1} />
          <span className="block text-center">67.4k</span>
        </li>
        <li className="border-r border-l w-1/3 grid place-items-center">
          <Icon path={mdiKey} size={1} />
          <span className="block text-center">4</span>
        </li>
        <li className="w-1/3 grid place-items-center">
          <Icon path={mdiChevronTripleUp} size={1} className="rotate-90" />
          <span className="block text-center">Captain</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
