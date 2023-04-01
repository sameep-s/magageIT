import { Route, Routes } from "react-router-dom";
import { Dashboard, ProjectScreen } from "./screens";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/" Component={ProjectScreen} />
      </Routes>
    </>
  );
}

export default App;
