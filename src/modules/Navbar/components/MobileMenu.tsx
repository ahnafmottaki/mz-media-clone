import type { FC } from "react";

interface MobileMenuProps {
  onMenu: () => void;
}
export const MobileMenuButton: FC<MobileMenuProps> = ({ onMenu }) => {
  return (
    <div
      aria-label="menu"
      role="button"
      onClick={onMenu}
      className="relative text-2xl items-center box-border caret-transparent block float-right justify-center leading-[38.4px] min-h-[auto] min-w-[auto] p-0 rounded-[50px] md:hidden md:min-h-0 md:min-w-0 md:p-[18px] md:rounded-none"
    >
      <div className="items-center box-border caret-transparent flex h-full justify-center w-full md:[align-items:normal] md:block md:justify-normal">
        <img
          src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f0387789624c2_Hamburger.svg"
          alt="Hamburger menu"
          className="box-border caret-transparent block max-w-full min-h-auto min-w-auto w-10 md:inline-block md:min-h-0 md:min-w-0 md:w-auto"
        />
      </div>
    </div>
  );
};
