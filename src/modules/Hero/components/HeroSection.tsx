import { HeroText } from "./HeroText";
import { HeroVideo } from "./HeroVideo";

export const HeroSection = () => {
  return (
    <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-[999] mx-auto px-[21px] py-7 md:px-7">
      <div className="items-center box-border caret-transparent flex flex-col justify-center">
        <div className="relative items-center box-border caret-transparent flex justify-center text-center z-[1]">
          <HeroText />
        </div>
        <HeroVideo />
      </div>
    </div>
  );
};
