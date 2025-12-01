import { NavbarContent } from "./NavbarContent";

export const NavbarContainer = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col h-full justify-center max-w-[1000px] w-full z-[999] mx-auto px-7">
      <NavbarContent />
    </div>
  );
};
