import { HeroSection } from "./HeroSection";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent min-h-[900px] overflow-hidden pt-28 pb-7 md:pt-[140px]">
      <HeroSection />
      <div className="absolute items-start box-border caret-transparent justify-center overflow-hidden inset-[0%]">
        <div className="absolute bg-[linear-gradient(90deg,rgb(9,9,9)_17%,rgba(9,9,9,0.9)_35%,rgba(255,255,255,0))] box-border caret-transparent z-[3] inset-[0%]"></div>
        <div className="absolute bg-white/20 bg-[linear-gradient(284deg,rgb(255,255,255),rgba(255,255,255,0))] box-border caret-transparent hidden blur-[20px] h-[300px] mix-blend-overlay opacity-[0.96] w-[300px] z-[2] rounded-[100%] right-[0%] top-[61%] bottom-[0%] md:block"></div>
        <img
          src="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab8980ce299694082a89c_Hero_glow_cmp.avif"
          sizes="(max-width: 1919px) 100vw, 1920px"
          alt=""
          className="relative box-border caret-transparent inline-block blur-[20px] h-full max-w-[110%] object-contain w-full z-[1] top-[7%] md:object-cover"
        />
      </div>
    </div>
  );
};
