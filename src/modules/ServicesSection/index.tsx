import { ServicesCarousel } from "./components/ServicesCarousel";

export const ServicesSection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden">
      <div className="items-start box-border caret-transparent gap-x-[30px] flex-col justify-between gap-y-[30px] pb-[30px] md:pb-[60px]">
        <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-999 mx-auto px-[21px] py-7 md:px-7">
          <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-0">
            <div className="relative items-center box-border caret-transparent flex justify-center text-center z-1 mb-[30px]">
              <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center max-w-[750px] gap-y-[15px]">
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="text-white font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[25.2px] uppercase mb-2.5 font-secondary">
                    Core services
                  </div>
                  <h2 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.12px] leading-[43.2px] capitalize font-secondary md:text-[38px] md:font-semibold md:leading-[49.4px]">
                    <span className="text-gray-400 text-4xl font-medium bg-clip-text bg-[linear-gradient(74deg,rgb(137,142,153),rgba(255,255,255,0.6))] box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]">
                      Types of work
                      <br className="text-4xl font-medium box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]" />
                    </span>
                    We do
                  </h2>
                </div>
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="box-border caret-transparent max-w-[600px] w-full"></div>
                </div>
              </div>
            </div>
            <ServicesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};
