import { ServiceCard } from "./ServiceCard";
import Marquee from "react-fast-marquee";

export const ServicesCarousel = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-6 flex flex-col gap-y-6 overflow-hidden md:gap-x-[30px] md:gap-y-[30px]">
      <div className="absolute bg-[linear-gradient(90deg,rgb(9,9,9),rgba(255,255,255,0)_20%,rgba(255,255,255,0)_51%,rgba(255,255,255,0)_80%,rgb(9,9,9))] box-border caret-transparent gap-x-4 auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-full gap-y-4 w-full z-999 inset-[0%] md:bg-[linear-gradient(90deg,rgb(9,9,9),rgba(177,120,120,0)_26%,rgba(214,144,144,0)_56%,rgba(112,77,77,0)_80%,rgb(9,9,9))]"></div>
      <div className="box-border caret-transparent gap-x-[15px] flex h-full max-h-full gap-y-[15px]  md:gap-x-[30px] md:h-auto md:max-h-none md:gap-y-[30px] ">
        <Marquee direction="left" speed={100}>
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946e86829c0a07eb3d6f_14b.avif"
            title="Youtube Videos"
            description="Grow a personal brand in any niche with our trendy edits."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d852423e898d8cad9_1b.avif"
            title="Short Form videos"
            description="Byte sized top of the funnel videos for Instagram Reels and Tiktok"
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d7d95b7ff012094ce_2b.avif"
            title="SAAS Videos"
            description="Organic podcasts to build trust and create credibility among your audience."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab9731525c444e9899b6c_3b.png"
            title="Ad Creatives &amp; VSLs"
            description="Create dynamic content and convert more leads with paid ads."
          />
          {/* <div className="items-start box-border caret-transparent gap-x-6 flex grow-0 justify-center gap-y-6 md:grow"> */}
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946e86829c0a07eb3d6f_14b.avif"
            title="Youtube Videos"
            description="Grow a personal brand in any niche with our trendy edits."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d852423e898d8cad9_1b.avif"
            title="Short Form videos"
            description="Byte sized top of the funnel videos for Instagram Reels and Tiktok"
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d7d95b7ff012094ce_2b.avif"
            title="SAAS Videos"
            description="Organic podcasts to build trust and create credibility among your audience."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab9731525c444e9899b6c_3b.png"
            title="Ad Creatives &amp; VSLs"
            description="Create dynamic content and convert more leads with paid ads."
          />
        </Marquee>
      </div>
      <div className="box-border caret-transparent gap-x-[15px] flex h-full max-h-full gap-y-[15px]  md:gap-x-[30px] md:h-auto md:max-h-none md:gap-y-[30px] ">
        <Marquee direction="right" speed={100}>
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946e86829c0a07eb3d6f_14b.avif"
            title="Youtube Videos"
            description="Grow a personal brand in any niche with our trendy edits."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d852423e898d8cad9_1b.avif"
            title="Short Form videos"
            description="Byte sized top of the funnel videos for Instagram Reels and Tiktok"
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d7d95b7ff012094ce_2b.avif"
            title="SAAS Videos"
            description="Organic podcasts to build trust and create credibility among your audience."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab9731525c444e9899b6c_3b.png"
            title="Ad Creatives &amp; VSLs"
            description="Create dynamic content and convert more leads with paid ads."
          />
          {/* <div className="items-start box-border caret-transparent gap-x-6 flex grow-0 justify-center gap-y-6 md:grow"> */}
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946e86829c0a07eb3d6f_14b.avif"
            title="Youtube Videos"
            description="Grow a personal brand in any niche with our trendy edits."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d852423e898d8cad9_1b.avif"
            title="Short Form videos"
            description="Byte sized top of the funnel videos for Instagram Reels and Tiktok"
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/6797946d7d95b7ff012094ce_2b.avif"
            title="SAAS Videos"
            description="Organic podcasts to build trust and create credibility among your audience."
          />
          <ServiceCard
            src="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab9731525c444e9899b6c_3b.png"
            title="Ad Creatives &amp; VSLs"
            description="Create dynamic content and convert more leads with paid ads."
          />
        </Marquee>
      </div>
    </div>
  );
};
