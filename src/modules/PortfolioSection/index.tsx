import { PortfolioGrid } from "./components/PortfolioGrid";
import { PortfolioTabs } from "./components/PortfolioTabs";

export const PortfolioSection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden px-0 md:px-3.5">
      <div className="items-start box-border caret-transparent gap-x-[30px] flex-col justify-between gap-y-[30px] pt-[30px] md:pt-[60px]">
        <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-999 mx-auto px-[21px] md:px-7">
          <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-0">
            <div className="relative items-center box-border caret-transparent flex justify-center text-center z-1 mb-[30px]">
              <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center max-w-[750px] gap-y-[15px]">
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="text-white font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[25.2px] uppercase mb-2.5 font-secondary">
                    our work
                  </div>
                  <h2 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.12px] leading-[43.2px] capitalize font-secondary md:text-[38px] md:font-semibold md:leading-[49.4px]">
                    <span className="text-gray-400 text-4xl font-medium bg-clip-text bg-[linear-gradient(74deg,rgb(137,142,153),rgba(255,255,255,0.6))] box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]">
                      Some of our
                      <br className="text-4xl font-medium box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]" />
                    </span>
                    featured projects
                  </h2>
                </div>
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="box-border caret-transparent max-w-[600px] w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center box-border caret-transparent flex flex-col justify-start max-w-full text-center w-full overflow-hidden md:max-w-none md:w-auto">
          <div className="items-stretch box-border caret-transparent gap-x-10 flex flex-col justify-between max-w-[375px] gap-y-10 w-full px-7 md:[align-items:normal] md:justify-normal md:max-w-[1200px] md:px-0">
            <div className="relative box-border caret-transparent before:accent-auto before:caret-transparent before:text-white/60 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins after:accent-auto after:caret-transparent after:clear-both after:text-white/60 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins">
              <PortfolioTabs />
              <div className="relative box-border  caret-transparent overflow-hidden">
                <PortfolioGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
