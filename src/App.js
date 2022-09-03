/* eslint-disable no-unused-vars */
import AdminDashboard from "./Components/AdminDashboard";
import Login from "./Components/Login";
import ScreenWarn from "./Components/ScreenWarning";

function App() {
  return (
    <div id="App" className="h-auto w-auto overflow-x-hidden xl:overflow-x-auto">
      {/* <Login /> */}
      <AdminDashboard visibility="hidden lg:grid" />
      <ScreenWarn visibility="block lg:hidden" />
    </div>
  );
}

export default App;
