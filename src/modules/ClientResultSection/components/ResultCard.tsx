export const ResultCard = () => {
  return (
    <div className="relative items-end bg-neutral-900 box-border caret-transparent flex h-[500px] justify-start max-w-full min-h-0 min-w-[450px] w-full z-11 border overflow-hidden rounded-[15px] border-solid border-white/10 md:min-h-auto md:rounded-[20px]">
      <img
        src="https://c.animaapp.com/mih7w1om2KrHan/assets/682dea7a5eb426b76c13542a_Anthony.avif"
        sizes="(max-width: 1080px) 100vw, 1080px"
        alt=""
        className="box-border caret-transparent h-full max-w-full min-h-full min-w-0 object-cover w-full rounded-[15px] md:min-w-auto md:rounded-none"
      />
      <div className="absolute items-center box-border caret-transparent gap-x-5 flex justify-between mt-[-14%] gap-y-5 w-full z-999 px-5 rounded-[15px] top-[89%] md:mt-[-18%]">
        <div className="items-start box-border caret-transparent gap-x-[5px] flex flex-col justify-between min-h-0 min-w-0 gap-y-[5px] md:gap-x-2 md:min-h-auto md:min-w-auto md:gap-y-2">
          <h3 className="text-white text-[21px] font-medium box-border caret-transparent tracking-[-1.12px] leading-[25.2px] min-h-0 min-w-0 capitalize font-secondary md:text-[34px] md:font-semibold md:leading-[44.2px] md:min-h-auto md:min-w-auto">
            Anthony&#39;s
            <br className="text-[21px] font-medium box-border caret-transparent leading-[25.2px] md:text-[34px] md:font-semibold md:leading-[44.2px]" />
            World
          </h3>
          <div className="text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
            Trading Niche
            <br className="box-border caret-transparent" />
          </div>
        </div>
        <div className="items-start box-border caret-transparent gap-x-[17px] flex flex-col justify-between min-h-0 min-w-0 gap-y-[17px] md:min-h-auto md:min-w-auto">
          <div className="backdrop-blur-[13px] bg-white/10 box-border caret-transparent min-h-0 min-w-0 border px-2.5 py-[5px] rounded-[20px] border-solid border-white/10 md:min-h-auto md:min-w-auto">
            Generated 5M+ Views
            <br className="box-border caret-transparent" />
          </div>
          <div className="backdrop-blur-[13px] bg-white/10 box-border caret-transparent min-h-0 min-w-0 border px-2.5 py-[5px] rounded-[20px] border-solid border-white/10 md:min-h-auto md:min-w-auto">
            100K+ Subs
            <br className="box-border caret-transparent" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[linear-gradient(0deg,rgb(9,9,9),rgba(0,0,0,0.2)_33%)] box-border caret-transparent z-1 inset-[0%]"></div>
    </div>
  );
};
