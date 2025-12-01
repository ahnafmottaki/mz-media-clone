import { FooterCopyright } from "./FooterCopyright";
import { FooterLinks } from "./FooterLinks";

export const FooterContent = () => {
  return (
    <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-[999] mx-auto px-[21px] py-7 md:px-7">
      <div className="items-start box-border caret-transparent gap-x-7 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-between gap-y-7 mb-[60px] md:[align-items:normal] md:gap-x-0 md:grid md:flex-row md:grid-cols-[1fr_1fr] md:justify-normal md:gap-y-0">
        <div className="items-start box-border caret-transparent gap-x-7 flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] max-w-[450px] gap-y-7">
          <a
            href="/"
            className="text-white box-border caret-transparent block max-w-full w-[150px] md:w-[200px]"
          >
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/679730756024f0575fc9327f_Mz_media_logo.avif"
              alt=""
              className="box-border caret-transparent inline-block max-w-full w-full"
            />
          </a>
        </div>
        <FooterLinks />
      </div>
      <FooterCopyright />
    </div>
  );
};
