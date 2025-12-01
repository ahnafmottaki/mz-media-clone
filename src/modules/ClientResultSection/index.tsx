import { ResultsCarousel } from "./components/ResultCarousel";
import Marquee from "react-fast-marquee";
export const ClientResultsSection = () => {
  return (
    <div className="relative box-border caret-transparent hidden overflow-hidden md:block">
      <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1200px] w-full z-999 overflow-hidden mx-auto px-[21px] py-7 md:overflow-visible md:px-7">
        <div className="relative items-center box-border caret-transparent flex justify-center text-center z-1 mb-[30px]">
          <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center max-w-[750px] min-h-0 min-w-0 gap-y-[15px] md:min-h-auto md:min-w-auto">
            <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 md:items-center md:flex-row md:min-h-auto md:min-w-auto">
              <div className="text-white font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[25.2px] uppercase mb-2.5 font-secondary">
                feedback
              </div>
              <h2 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.12px] leading-[43.2px] capitalize font-secondary md:text-[38px] md:font-semibold md:leading-[49.4px]">
                <span className="text-gray-400 text-4xl font-medium bg-clip-text bg-[linear-gradient(74deg,rgb(137,142,153),rgba(255,255,255,0.6))] box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]">
                  How we{" "}
                  <br className="text-4xl font-medium box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]" />
                </span>
                Benefit Our Clients
              </h2>
            </div>
            <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 md:items-center md:flex-row md:min-h-auto md:min-w-auto">
              <div className="box-border caret-transparent max-w-[600px] w-full"></div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[linear-gradient(90deg,rgb(9,9,9),rgba(255,255,255,0)_20%,rgba(255,255,255,0)_51%,rgba(255,255,255,0)_80%,rgb(9,9,9))] box-border caret-transparent gap-x-4 auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-full gap-y-4 w-full z-999 inset-[0%] md:bg-[linear-gradient(90deg,rgb(9,9,9),rgba(177,120,120,0)_26%,rgba(214,144,144,0)_56%,rgba(112,77,77,0)_80%,rgb(9,9,9))]"></div>
        <ResultsCarousel />
      </div>
    </div>
  );
};
