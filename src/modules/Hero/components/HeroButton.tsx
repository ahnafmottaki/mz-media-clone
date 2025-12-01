export const HeroButton = () => {
  return (
    <div className="content-between items-center box-border caret-transparent gap-x-[15px] flex-col justify-center gap-y-[15px] w-full pt-5 pb-[15px] md:flex-row md:w-auto md:pt-10 md:pb-[30px]">
      <a
        href="#book-a-call"
        className="text-white font-medium items-center bg-blue-800 bg-[linear-gradient(rgba(152,163,255,0.2)_2%,rgb(39,63,183)_60%)] box-border caret-transparent gap-x-[15px] flex justify-center max-w-full gap-y-[15px] capitalize w-full border px-[25px] py-3.5 rounded-xl border-solid border-white/0 md:justify-start md:w-auto hover:shadow-[rgba(0,0,0,0.2)_0px_0px_0px_5px_inset]"
      >
        <div className="box-border caret-transparent">Book a call</div>
        <div className="items-center bg-slate-400/20 box-border caret-transparent flex h-[26px] justify-center w-[26px] rounded-[20px]">
          <img
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
            alt=""
            className="box-border caret-transparent h-full max-w-full w-full p-2"
          />
        </div>
      </a>
    </div>
  );
};
