import Icon from "@mdi/react";
import {
  mdiAccountGroup,
  mdiTrophy,
  mdiListBox,
  mdiTreasureChest,
  mdiCog,
} from "@mdi/js";

const NavigationBar = () => {
  return (
    <ul className="bg-success flex justify-around items-center min-h-[40px] w-svw p-6 text-light fixed bottom-0 h-[80px] z-20">
      <li className="w-1/3 grid place-items-center opacity-85 hover:opacity-100">
        <Icon
          path={mdiAccountGroup}
          size="34px"
          className="hover:scale-110 transition-all"
        />
        <span className="block text-center text-[12px]">Profile</span>
      </li>
      <li className="w-1/3 grid place-items-center opacity-85 hover:opacity-100">
        <Icon
          path={mdiTrophy}
          size="34px"
          className="hover:scale-110 transition-all"
        />
        <span className="block text-center text-[12px]">Achieve</span>
      </li>
      <li className="w-1/3 grid place-items-center opacity-85 hover:opacity-100">
        <Icon
          path={mdiListBox}
          size="34px"
          className="hover:scale-110 transition-all"
        />
        <span className="block text-center text-[12px]">Tasks</span>
      </li>
      <li className="w-1/3 grid place-items-center opacity-85 hover:opacity-100">
        <Icon
          path={mdiTreasureChest}
          size="34px"
          className="hover:scale-110 transition-all"
        />
        <span className="block text-center text-[12px]">Chest</span>
      </li>
      <li className="w-1/3 grid place-items-center opacity-85 hover:opacity-100">
        <Icon
          path={mdiCog}
          size="34px"
          className="hover:scale-110 transition-all"
        />
        <span className="block text-center text-[12px]">Settings</span>
      </li>
    </ul>
  );
};

export default NavigationBar;
