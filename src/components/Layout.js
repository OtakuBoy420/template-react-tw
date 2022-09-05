import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <main className="w-[90%] mx-auto">
      <Outlet />
    </main>
  );
};
export default Layout;
