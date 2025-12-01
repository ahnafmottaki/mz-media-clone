export const CTASection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden">
      <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-999 mx-auto px-[21px] py-7 md:px-7">
        <div className="items-start box-border caret-transparent gap-x-[30px] flex-col justify-between gap-y-[30px] py-[30px] md:py-[60px]">
          <div className="relative items-center bg-neutral-950 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_40%,rgba(255,255,255,0))] box-border caret-transparent flex flex-col justify-start w-full border overflow-hidden rounded-[20px] border-solid border-white/10 min-h-[400px]">
            <div className="absolute items-start box-border caret-transparent justify-center overflow-hidden inset-[0%]">
              <div className="absolute bg-[linear-gradient(90deg,rgb(9,9,9)_17%,rgba(9,9,9,0.9)_35%,rgba(255,255,255,0))] box-border caret-transparent z-3 inset-[0%]"></div>
              <div className="absolute bg-white/20 bg-[linear-gradient(284deg,rgb(255,255,255),rgba(255,255,255,0))] box-border caret-transparent hidden blur-[20px] h-[150px] mix-blend-overlay opacity-100 w-[150px] z-2 rounded-[100%] right-[0%] top-[61%] bottom-[0%] md:block md:opacity-[0.96]"></div>
              <img
                src="https://c.animaapp.com/mih7w1om2KrHan/assets/679651def5e214bba9495e68_Hero_Glow_BG.webp"
                sizes="(max-width: 3840px) 100vw, 3840px"
                alt=""
                className="relative box-border caret-transparent inline-block blur-[20px] h-full left-[-40%] max-w-[150%] object-contain opacity-[0.72] top-[-1%] w-[150%] z-1 md:object-cover"
              />
            </div>
            <div className="relative items-stretch box-border caret-transparent gap-x-[30px] flex flex-col justify-center gap-y-[30px] text-center w-full z-99 px-5 py-[60px] md:px-[60px] md:py-20">
              <div className="items-stretch box-border caret-transparent gap-x-[15px] flex flex-col justify-between max-w-[550px] gap-y-[15px] mx-auto md:items-center md:gap-x-2.5 md:justify-center md:max-w-[650px] md:gap-y-2.5">
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="text-white font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[25.2px] uppercase mb-2.5 font-secondary">
                    work with us
                  </div>
                  <h2 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.12px] leading-[43.2px] capitalize font-secondary md:text-[38px] md:font-semibold md:leading-[49.4px]">
                    <span className="text-gray-400 text-4xl font-medium bg-clip-text bg-[linear-gradient(74deg,rgb(137,142,153),rgba(255,255,255,0.6))] box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]">
                      Let's level up
                      <br className="text-4xl font-medium box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]" />
                    </span>
                    Your Business!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
