export const FooterLinks = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-[42px] flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between gap-y-[42px] w-full md:items-center md:gap-x-[normal] md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[auto] md:justify-end md:gap-y-[normal]">
      <div className="items-start box-border caret-transparent gap-x-[10.5px] flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] gap-y-[10.5px] md:gap-x-10 md:flex-row md:gap-y-10">
        <a
          href="#Experience"
          className="items-center box-border caret-transparent flex max-w-full hover:text-white hover:border-white"
        >
          <div className="box-border caret-transparent">
            Terms &amp; Conditions
          </div>
        </a>
        <a
          href="#Feature-Section"
          className="items-center box-border caret-transparent flex max-w-full hover:text-white hover:border-white"
        >
          <div className="box-border caret-transparent">Refund Policy</div>
        </a>
        <a
          href="#Extra"
          className="items-center box-border caret-transparent flex max-w-full hover:text-white hover:border-white"
        >
          <div className="box-border caret-transparent">Privacy Policy </div>
        </a>
      </div>
    </div>
  );
};
