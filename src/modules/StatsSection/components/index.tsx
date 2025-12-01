import { StatsGrid } from "./StatsGrid";

export const StatsSection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden">
      <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-999  mx-auto px-[21px] md:px-7">
        <div className="items-start box-border caret-transparent gap-x-[30px] flex-col justify-between gap-y-[30px] py-[30px] md:py-[60px]">
          <div className="relative box-border caret-transparent hidden md:block">
            <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
              <h2 className="text-white text-4xl font-medium box-border caret-transparent leading-[43.2px] text-center font-secondary md:text-white/30 md:text-[38px] md:font-semibold md:leading-[45.6px]">
                Tired of boring video content that
              </h2>
              <h2 className="text-white text-4xl font-medium box-border caret-transparent leading-[43.2px] text-center font-secondary md:text-white/30 md:text-[38px] md:font-semibold md:leading-[45.6px]">
                don&apos;t stand out? It&apos;s time to upgrade
              </h2>
              <h2 className="text-white text-4xl font-medium box-border caret-transparent leading-[43.2px] text-center font-secondary md:text-white/30 md:text-[38px] md:font-semibold md:leading-[45.6px]">
                the game with us!
              </h2>
            </div>
            <div className="absolute box-border caret-transparent hidden inset-[0%] md:block">
              <div className="absolute bg-transparent box-border caret-transparent max-w-[150px] transform-none w-[190px] z-1 rounded-[20px] left-[0%] top-[0%] md:max-w-[190px] md:rotate-[9.999987517730313deg]">
                <img
                  src="https://c.animaapp.com/mih7w1om2KrHan/assets/679f511ce23fb32e2b64a2a8_Group_1618874152.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full object-cover w-full"
                />
              </div>
              <div className="absolute bg-transparent box-border caret-transparent max-w-[150px] transform-none w-[190px] z-1 rounded-[20px] right-[0%] top-[0%] md:max-w-[190px] md:rotate-[-9.999987517730313deg]">
                <img
                  src="https://c.animaapp.com/mih7w1om2KrHan/assets/679f511cc86e2a1d5d76f4cc_Group_1618874151.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full object-cover w-full"
                />
              </div>
              <div className="absolute bg-transparent box-border caret-transparent max-w-[150px] transform-none w-[190px] z-1 rounded-[20px] left-[0%] bottom-[0%] md:max-w-[190px] md:rotate-[-9.999987517730313deg]">
                <img
                  src="https://c.animaapp.com/mih7w1om2KrHan/assets/679f511c0910ed0099e93ae5_Group_1618874147.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full object-cover w-full"
                />
              </div>
              <div className="absolute bg-transparent box-border caret-transparent max-w-[150px] transform-none w-[190px] z-1 rounded-[20px] right-[0%] bottom-[0%] md:max-w-[190px] md:rotate-[12.999997801129437deg]">
                <img
                  src="https://c.animaapp.com/mih7w1om2KrHan/assets/679f690527d250b730d285eb_yt.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full object-cover w-full"
                />
              </div>
            </div>
          </div>
          <StatsGrid />
          <div className="items-center bg-white/10 box-border caret-transparent hidden h-px justify-center w-full md:flex"></div>
        </div>
      </div>
    </div>
  );
};
