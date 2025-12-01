export const CaseStudyCard = () => {
  return (
    <div className="relative items-start backdrop-blur-[20px] bg-transparent bg-none box-border caret-transparent gap-x-[30px] flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] justify-center gap-y-[30px] text-center w-full z-5 border overflow-hidden px-5 py-10 rounded-[25px] border-solid border-white/10 md:bg-transparent md:bg-[radial-gradient(circle_at_50%_0%,rgba(24,25,41,0.79),rgb(9,9,9)_58%)] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:p-[60px]">
      <div className="relative items-start box-border caret-transparent flex flex-col justify-between text-left w-full z-3">
        <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
          <div className="text-white text-xs font-normal box-border caret-transparent inline-block tracking-[1px] leading-[21.6px] uppercase pb-2.5 font-poppins md:text-sm md:font-semibold md:leading-[25.2px] md:pb-0 md:font-secondary">
            01 {"   "}Case study
          </div>
          <h3 className="text-white text-2xl box-border caret-transparent leading-[33.6px] mt-5 mb-2.5 md:text-[34px] md:leading-[47.6px]">
            <span className="text-white/50 text-2xl box-border caret-transparent leading-[33.6px] md:text-[34px] md:leading-[47.6px]">
              “With just 5,000 subscribers,
            </span>
            <span className="text-2xl box-border caret-transparent leading-[33.6px] md:text-[34px] md:leading-[47.6px]">
              {" "}
              Spencer now generates $350K per month&quot;
            </span>
          </h3>
        </div>
        <div className="items-stretch box-border caret-transparent block flex-col justify-start w-full pt-5 md:[align-items:normal] md:flex md:flex-row md:justify-between md:pt-10">
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 md:items-center md:flex-row md:min-h-auto md:min-w-auto">
            <div className="items-start box-border caret-transparent gap-x-4 flex justify-start gap-y-4 mb-0 md:items-end md:gap-x-5 md:gap-y-5 md:mb-5">
              <div className="box-border caret-transparent h-10 w-10 md:h-[60px] md:w-[60px]">
                <img
                  src="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab973ff36c5590df80613_image_4cmp.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full w-full rounded-[100%]"
                />
              </div>
              <div className="items-start box-border caret-transparent gap-x-3 flex flex-col justify-center leading-[14px] gap-y-3 md:justify-end">
                <div className="text-white text-sm box-border caret-transparent leading-[14px] md:text-lg md:leading-[18px]">
                  Neel Nafis
                </div>
                <p className="text-xs box-border caret-transparent leading-[14.4px] mb-2.5 md:text-sm md:leading-[14px]">
                  Founder{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 md:items-center md:flex-row md:min-h-auto md:min-w-auto">
            <a
              href="#book-a-call"
              className="text-white font-medium items-center bg-blue-800 bg-[linear-gradient(rgba(152,163,255,0.2)_2%,rgb(39,63,183)_60%)] box-border caret-transparent gap-x-[15px] hidden justify-center max-w-full gap-y-[15px] text-center capitalize w-full border px-25px-border py-3.5 rounded-xl border-solid border-white/0 md:flex md:justify-start md:w-auto hover:shadow-[rgba(0,0,0,0.2)_0px_0px_0px_5px_inset]"
            >
              <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                Book a call
              </div>
              <div className="items-center bg-slate-400/20 box-border caret-transparent flex h-[26px] justify-center min-h-0 min-w-0 w-[26px] rounded-[20px] md:min-h-auto md:min-w-auto">
                <img
                  src="https://c.animaapp.com/mih7w1om2KrHan/assets/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
                  alt=""
                  className="box-border caret-transparent h-full max-w-full min-h-0 min-w-0 w-full p-2 md:min-h-auto md:min-w-auto"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="relative items-start box-border caret-transparent gap-x-[30px] grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] justify-start max-w-full gap-y-[30px] w-full z-[3 md:items-end md:gap-x-[normal] md:flex md:flex-row md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:justify-end md:gap-y-[normal]">
        <div className="box-border caret-transparent gap-x-0 flex min-w-full gap-y-0 md:gap-x-[normal] md:block md:min-w-[400px] md:gap-y-[normal]">
          <div className="items-stretch box-border caret-transparent gap-x-[11px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-start max-w-full min-h-auto min-w-auto gap-y-[11px] w-full mt-5 md:items-end md:gap-x-10 md:flex-row md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:max-w-sm md:min-h-0 md:min-w-0 md:gap-y-10 md:mt-0">
            <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-row auto-cols-[1fr] grid-cols-[0.6fr_1fr] grid-rows-[auto] justify-start gap-y-[15px] text-left md:items-start md:gap-x-6 md:flex-col md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:justify-between md:gap-y-6">
              <div className="items-start box-border caret-transparent flex flex-col col-end-3 col-start-2 row-end-2 row-start-1 max-w-[100px] min-w-[100px] md:items-center md:block md:flex-row md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:max-w-none md:min-w-auto">
                <h3 className="text-white text-lg font-medium box-border caret-transparent leading-[25.2px] min-h-auto min-w-auto font-poppins md:text-[34px] md:font-semibold md:leading-[47.6px] md:min-h-0 md:min-w-0 md:font-secondary">
                  250%
                </h3>
                <p className="text-zinc-400 text-xs box-border caret-transparent leading-[19.2px] min-h-auto min-w-auto mb-2.5 md:text-sm md:leading-[22.4px] md:min-h-0 md:min-w-0">
                  Revenue Growth
                </p>
              </div>
              <div className="bg-violet-600 shadow-[rgba(83,81,252,0.23)_0px_0px_20px_4px] box-border caret-transparent h-[30px] max-h-[30px] max-w-none min-w-[135px] w-auto border rounded-md border-solid border-white/10 md:shadow-[rgba(39,63,183,0.57)_0px_2px_20px_3px] md:h-60 md:max-h-60 md:max-w-[203px] md:min-w-auto md:w-full md:rounded-[20px]"></div>
            </div>
            <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-row auto-cols-[1fr] grid-cols-[0.4fr_1fr] grid-rows-[auto] justify-start -order-1 gap-y-[15px] text-left md:items-start md:gap-x-6 md:flex-col md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:justify-center md:order-0 md:gap-y-6">
              <div className="items-start box-border caret-transparent flex flex-col max-w-[100px] min-w-[100px] md:items-center md:block md:flex-row md:max-w-none md:min-w-auto">
                <h3 className="text-white text-lg font-medium box-border caret-transparent leading-[25.2px] min-h-auto min-w-auto font-poppins md:text-[34px] md:font-semibold md:leading-[47.6px] md:min-h-0 md:min-w-0 md:font-secondary">
                  200%
                </h3>
                <p className="text-zinc-400 text-xs box-border caret-transparent leading-[19.2px] min-h-auto min-w-auto mb-2.5 md:text-sm md:leading-[22.4px] md:min-h-0 md:min-w-0">
                  Saved on Ads
                </p>
              </div>
              <div className="bg-indigo-400 shadow-[rgba(83,81,252,0.23)_0px_0px_20px_4px] box-border caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[30px] max-h-[30px] max-w-none min-w-[90px] w-auto border rounded-md border-solid border-white/10 md:shadow-[rgba(39,63,183,0.57)_0px_2px_20px_3px] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:h-40 md:max-h-40 md:max-w-[203px] md:min-w-auto md:w-full md:rounded-[20px]"></div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 max-w-full w-full rounded-[20px] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
          <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-white/60 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-0 before:normal-case before:visible before:border-separate before:font-poppins after:accent-auto after:caret-transparent after:clear-both after:text-white/60 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-0 after:normal-case after:visible after:border-separate after:font-poppins">
            <div className="relative box-border caret-transparent pt-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/1135499761?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                title="spencer case Study Final"
                className="absolute box-border caret-transparent h-full w-full left-0 top-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
