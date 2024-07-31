import AppFooter from "@/pages/shared/footer/AppFooter";
import SideHeader from "@/components/ui/navbar/SideHeader";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="max-w-[1360px] mx-auto">
      <SideHeader />
      <Outlet />
      <AppFooter></AppFooter>
    </div>
  );
}
