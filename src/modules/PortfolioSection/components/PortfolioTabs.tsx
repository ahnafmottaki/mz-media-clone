export const PortfolioTabs = () => {
  return (
    <div
      role="tablist"
      className="relative items-center box-border caret-transparent gap-x-2.5 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center justify-items-stretch gap-y-2.5 mb-5 md:gap-x-[15px] md:flex md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-[15px] md:mb-10"
    >
      <a
        href="#w-tabs-0-data-w-pane-0"
        role="tab"
        className="relative text-white bg-blue-800 bg-[radial-gradient(circle_at_50%_0%,rgba(24,25,41,0.58),rgba(67,85,228,0.61)_5%,rgb(39,63,183)_64%)] box-border caret-transparent block max-w-full text-center align-top border p-[5px] rounded-[10px] border-solid border-white/10 md:text-left md:px-2.5"
      >
        <div className="box-border caret-transparent text-center md:text-left">
          Youtube Videos
        </div>
      </a>
      <a
        href="#w-tabs-0-data-w-pane-1"
        role="tab"
        className="relative text-slate-400 bg-transparent box-border caret-transparent block max-w-full text-center align-top p-[5px] md:text-left md:px-2.5"
      >
        <div className="box-border caret-transparent text-center md:text-left">
          Shorts
        </div>
      </a>
      <a
        href="#w-tabs-0-data-w-pane-2"
        role="tab"
        className="relative text-slate-400 bg-transparent box-border caret-transparent block max-w-full text-center align-top p-[5px] md:text-left md:px-2.5"
      >
        <div className="box-border caret-transparent text-center md:text-left">
          SAAS&apos;Videos
        </div>
      </a>
      <a
        href="#w-tabs-0-data-w-pane-3"
        role="tab"
        className="relative text-slate-400 bg-transparent box-border caret-transparent block max-w-full text-center align-top p-[5px] md:text-left md:px-2.5"
      >
        <div className="box-border caret-transparent text-center md:text-left">
          Ad Creatives &amp; VSL
        </div>
      </a>
    </div>
  );
};
