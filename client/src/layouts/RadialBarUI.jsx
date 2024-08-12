import RadialProgressBar from "../components/RadialProgressBar";

const RadialBarUI = () => {
  return (
    <div className="flex justify-evenly ">
      <RadialProgressBar
        progress={10}
        size={105}
        strokeWidth={12}
        color="#03B076"
        smallText="Next Claim"
        bigText="43:34"
      />
      <RadialProgressBar
        progress={75}
        size={105}
        strokeWidth={12}
        color="#F2B335"
        smallText="Global Rank"
        bigText="127"
      />
      <RadialProgressBar
        progress={45}
        size={105}
        strokeWidth={12}
        color="#D00114"
        smallText="Task Solved"
        bigText="67"
      />
    </div>
  );
};

export default RadialBarUI;
