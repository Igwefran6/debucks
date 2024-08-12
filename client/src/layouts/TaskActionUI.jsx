import Icon from "@mdi/react";
import { mdiMenuRight } from "@mdi/js";

const TaskActionUI = () => {
  return (
    <div className="bg-light m-2 py-2 px-4 flex justify-between items-center rounded-lg text-dark">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold ">
          ✨MemeFi <span className="text-lucky">Task</span>
        </h2>
        <ul className="flex gap-1 py-1 px-2 border border-neutral rounded-lg text-[11px]">
          <li>
            Earn <span className="font-bold">3000 DBx</span>
          </li>
          |
          <li>
            Time <span className="font-bold">5 min</span>
          </li>
          |
          <li>
            Expires <span className="font-bold">12:43</span>
          </li>
        </ul>
      </div>
      <button className="bg-success rounded-full h-8 w-8 active:scale-110">
        {" "}
        <Icon
          path={mdiMenuRight}
          size="34px"
          className="hover:scale-110 transition-all text-light"
        />
      </button>
    </div>
  );
};

export default TaskActionUI;
