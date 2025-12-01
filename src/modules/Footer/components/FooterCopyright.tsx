export const FooterCopyright = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-3.5 flex flex-col justify-between gap-y-3.5 mt-14 md:items-center md:flex-row md:mt-[70px]">
      <div className="text-white/50 text-xs box-border caret-transparent leading-[18px] md:text-white/60 md:text-[12.5px] md:leading-[18.75px]">
        © 2025 mzmedia | all rights reseved by mzmedia
      </div>
      <div className="box-border caret-transparent gap-x-[30px] flex justify-start gap-y-[30px]">
        <a
          href="https://linkedin.com/"
          className="text-white box-border caret-transparent block max-w-full w-5"
        >
          <img
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f0387789624a7_LinkedIn.svg"
            alt="Linkedin"
            className="box-border caret-transparent inline-block max-w-full w-5"
          />
        </a>
        <a
          href="https://twitter.com/"
          className="text-white box-border caret-transparent block max-w-full w-5"
        >
          <img
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f0387789624f9_X.com.svg"
            alt="X.com logo"
            className="box-border caret-transparent inline-block max-w-full"
          />
        </a>
        <a
          href="https://facebook.com/"
          className="text-white box-border caret-transparent block max-w-full w-5"
        >
          <img
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f0387789624a8_Facebook.svg"
            alt="Facebook"
            className="box-border caret-transparent inline-block max-w-full"
          />
        </a>
      </div>
    </div>
  );
};
