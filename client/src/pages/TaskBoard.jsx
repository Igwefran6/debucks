import RadialBarUI from "../layouts/RadialBarUI";
import TaskActionUI from "../layouts/TaskActionUI";

const TaskBoard = () => {
  return (
    <div className="h-auto px-2 py-4 bg-background">
      <RadialBarUI />
      <div className="sticky top-[100px] bg-background p-2">
        <div className="text-[11px] text-dark my-1 px-8 relative">
          <hr className="border-t-[1px] border-black w-[75%] inline-block rounded-lg" />
          <span className="inline-block absolute right-6 top-1 bg-background px-2">
            Earn DBx by completing tasks
          </span>
        </div>
        <div className="py-2 px-2 mx-2 my-1 bg-neutral flex justify-evenly rounded-lg text-sm font-bold text-dark">
          <button className="bg-success px-2 rounded-lg text-light">All</button>
          <button className="px-2 rounded-lg">Hot</button>
          <button className="px-2 rounded-lg">Trivial</button>
          <button className="px-2 rounded-lg">Community</button>
          <button className="px-2 rounded-lg">Special</button>
        </div>
      </div>

      <div className="overflow-x-hidden overflow-y-scroll mb-[100px]">
        <div>
          <TaskActionUI />
          <TaskActionUI />
          <TaskActionUI />
          <TaskActionUI />
          <TaskActionUI />
          <TaskActionUI />
          <TaskActionUI />
          <TaskActionUI />
        </div>

        <hr className="border-4 border-neutral bg-neutral h-2 w-10 block m-auto rounded-lg" />
      </div>
    </div>
  );
};

export default TaskBoard;
