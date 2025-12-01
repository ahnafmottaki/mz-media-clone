import { MobileProcessSteps } from "./components/MobileProcessStep";
import { ProcessTimeline } from "./components/ProcessTimeline";

export const ProcessSection = () => {
  return (
    <div className="relative box-border caret-transparent">
      <div className="items-start box-border caret-transparent gap-x-[30px] flex-col justify-between gap-y-[30px] pb-[30px] md:pb-[30px]">
        <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1200px] w-full z-999 overflow-hidden mx-auto px-[21px] py-7 md:overflow-visible md:px-7">
          <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-0">
            <div className="relative items-center box-border caret-transparent flex justify-center text-center z-1 mb-[60px]">
              <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center max-w-[750px] gap-y-[15px]">
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="text-white font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[25.2px] uppercase mb-2.5 font-secondary">
                    our process
                  </div>
                  <h2 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.12px] leading-[43.2px] capitalize font-secondary md:text-[38px] md:font-semibold md:leading-[49.4px]">
                    <span className="text-gray-400 text-4xl font-medium bg-clip-text bg-[linear-gradient(74deg,rgb(137,142,153),rgba(255,255,255,0.6))] box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]">
                      Our strategy to get
                      <br className="text-4xl font-medium box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]" />
                    </span>
                    you leads with content
                  </h2>
                </div>
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="box-border caret-transparent max-w-[600px] w-full"></div>
                </div>
              </div>
            </div>
            <ProcessTimeline />
            <MobileProcessSteps />
            <div className="content-between items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center gap-y-[15px] w-full pb-[15px] md:flex-row md:w-auto md:pb-[30px]">
              <a
                href="#book-a-call"
                className="text-white font-medium items-center bg-blue-800 bg-[linear-gradient(rgba(152,163,255,0.2)_2%,rgb(39,63,183)_60%)] box-border caret-transparent gap-x-[15px] flex justify-center max-w-full gap-y-[15px] text-center capitalize w-full border px-25px-border py-3.5 rounded-xl border-solid border-white/0 md:justify-start md:w-auto hover:shadow-[rgba(0,0,0,0.2)_0px_0px_0px_5px_inset]"
              >
                <div className="box-border caret-transparent">
                  Book a 30-min call
                </div>
                <div className="items-center bg-slate-400/20 box-border caret-transparent flex h-[26px] justify-center w-[26px] rounded-[20px]">
                  <img
                    src="https://c.animaapp.com/mih7w1om2KrHan/assets/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
                    alt=""
                    className="box-border caret-transparent h-full max-w-full w-full p-2"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bg-white/10 box-border caret-transparent block h-[2016px] w-px left-[41px] right-2/4 top-[10%] bottom-[0%] md:hidden md:h-[2240px] md:left-[51%] md:top-[1%]">
          <div className="sticky bg-blue-800 shadow-[rgb(44,56,112)_0px_0px_10px_1px] box-border caret-transparent h-[100px] w-px rounded-[20px] top-1/4"></div>
        </div>
      </div>
    </div>
  );
};
