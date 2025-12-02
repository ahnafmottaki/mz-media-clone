import type { FC } from "react";

interface MobileNavProps {
  menuOpen: boolean;
}
const MobileNav: FC<MobileNavProps> = ({ menuOpen }) => {
  return (
    <div
      className={`absolute box-border caret-transparent md:hidden   w-full ${
        menuOpen ? " h-[265px] border px-2.5 py-4" : " h-0 "
      }  sm:w-100  overflow-hidden top-full sm:right-0  radial-gradient  border-all-border bg-primary-black rounded-2xl transition-all duration-300 ease-linear`}
    >
      <div className="nav-links-mobile flex flex-col gap-2.5 items-center">
        <a className="text-white leading-[1.2] p-2.5">Review</a>
        <a className="text-white leading-[1.2] p-2.5">Work</a>
        <a className="text-white leading-[1.2] p-2.5" href="">
          Case Study
        </a>
        <a className="text-white leading-[1.2] p-2.5">Process</a>
        <button className="button w-full">
          <span className="block mx-auto">Book a call</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
