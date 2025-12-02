import type { ReactNode } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { NavbarLogo } from "./NavbarLogo";

export const NavbarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col h-full justify-center max-w-[1000px] w-full z-999 mx-auto px-7">
      <div className="items-center bg-transparent bg-[linear-gradient(rgba(24,25,41,0.3),rgb(9,9,9))] box-border caret-transparent flex justify-between w-full px-0 py-2.5 rounded-none border-0 border-solid border-white/10 md:backdrop-blur-[7px] md:bg-neutral-900 md:border md:px-2.5 md:rounded-[10px]">
        <NavbarLogo />
        <DesktopMenu />
        {children}
      </div>
    </div>
  );
};
