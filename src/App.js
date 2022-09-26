/* eslint-disable no-unused-vars */
import AdminDashboard from "./Contents/AdminDashboard";
import Login from "./Contents/Login";
import ScreenWarn from "./Contents/ScreenWarning";


function App() {
  return (
    <div id="App" className="h-auto w-auto overflow-x-hidden xl:overflow-x-auto">
      {/* <Login /> */}
      <AdminDashboard visibility="hidden slg:grid" />
      <ScreenWarn visibility="block slg:hidden" />
    </div>
  );
}

export default App;
