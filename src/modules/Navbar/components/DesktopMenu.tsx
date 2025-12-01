export const DesktopMenu = () => {
  return (
    <nav
      role="navigation"
      className="relative items-center bg-neutral-950 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),rgba(254,255,255,0.01)_61%,rgba(255,255,255,0))] box-border caret-transparent hidden float-right justify-center min-h-0 min-w-0 w-full border px-2.5 py-[15px] rounded-[15px] border-solid border-white/10 md:bg-transparent md:bg-none md:flex md:justify-normal md:min-h-[auto] md:min-w-[auto] md:p-0 md:rounded-none md:border-0 md:border-none md:border-white/60"
    >
      <div className="items-center box-border caret-transparent gap-x-2.5 flex basis-[0%] flex-col grow justify-between min-h-0 min-w-0 gap-y-2.5 md:flex-row md:justify-center md:min-h-[auto] md:min-w-[auto]">
        <div className="items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#testimonial"
            className="text-white box-border caret-transparent block leading-[16.8px] max-w-full min-h-0 min-w-0 p-2.5 md:min-h-[auto] md:min-w-[auto]"
          >
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent capitalize">
                Review
              </div>
            </div>
          </a>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#work"
            className="text-white box-border caret-transparent block leading-[16.8px] max-w-full min-h-0 min-w-0 p-2.5 md:min-h-[auto] md:min-w-[auto]"
          >
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent capitalize">
                Work
              </div>
            </div>
          </a>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#case-study"
            className="text-white box-border caret-transparent block leading-[16.8px] max-w-full min-h-0 min-w-0 p-2.5 md:min-h-[auto] md:min-w-[auto]"
          >
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent capitalize">
                Case study
              </div>
            </div>
          </a>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#Process"
            className="text-white box-border caret-transparent block leading-[16.8px] max-w-full min-h-0 min-w-0 p-2.5 md:min-h-[auto] md:min-w-[auto]"
          >
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent capitalize">
                process
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-center min-h-0 min-w-0 gap-y-2.5 mt-2.5 md:justify-end md:min-h-[auto] md:min-w-[auto] md:mt-0">
        <a
          href="#book-a-call"
          className="text-white font-medium items-center bg-blue-800 bg-[linear-gradient(rgba(152,163,255,0.2)_2%,rgb(39,63,183)_60%)] box-border caret-transparent gap-x-[15px] flex justify-center min-h-0 min-w-0 gap-y-[15px] text-center capitalize w-full border px-3.5 py-2.5 rounded-xl border-solid border-white/0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:w-auto hover:shadow-[rgba(0,0,0,0.2)_0px_0px_0px_5px_inset]"
        >
          book a call
        </a>
      </div>
    </nav>
  );
};
