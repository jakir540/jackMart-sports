import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <header className="w-full border-b bg-[#001529] text-white">
      <div className="flex h-14 items-center px-4">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
