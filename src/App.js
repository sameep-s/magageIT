import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, ProjectScreen, Signup } from "./screens";
import { RequireAuth } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/project/:projectID" element={<RequireAuth><ProjectScreen /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
