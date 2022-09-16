/* eslint-disable no-unused-vars */
import { EasybaseProvider } from "easybase-react";
import AdminDashboard from "./Components/AdminDashboard";
import Login from "./Components/Login";
import ScreenWarn from "./Components/ScreenWarning";


function App() {
  return (
    <div id="App" className="h-auto w-auto overflow-x-hidden xl:overflow-x-auto">
      {/* <Login /> */}
      <EasybaseProvider>
        <AdminDashboard visibility="hidden slg:grid" />
      </EasybaseProvider>
      <ScreenWarn visibility="block slg:hidden" />
    </div>
  );
}

export default App;
