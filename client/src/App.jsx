import Header from "./layouts/HeaderBar";
import TaskBoard from "./pages/TaskBoard";
import NavigationBar from "./layouts/NavigationBar";
import { useEffect } from "react";

function App() {
  return (
    <div className="h-svh w-svw no-copy flex flex-col overflow-x-hidden">
      <Header />
      <TaskBoard />
      <NavigationBar />
    </div>
  );
}

export default App;
