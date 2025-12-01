import { NavbarContainer } from "./components/NavbarContainer";

export const Navbar = () => {
  return (
    <div
      role="banner"
      className="fixed backdrop-blur-[7px] bg-neutral-950/60 box-border caret-transparent z-2147483647 pt-0 top-[0%] inset-x-[0%] md:bg-transparent md:pt-[25px] before:accent-auto before:caret-transparent before:text-white/60 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-0px before:normal-case before:visible before:border-separate before:font-poppins after:accent-auto after:caret-transparent after:clear-both after:text-white/60 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins"
    >
      <NavbarContainer />
      <div className="absolute box-border caret-transparent hidden w-full overflow-hidden top-full inset-x-0"></div>
    </div>
  );
};
