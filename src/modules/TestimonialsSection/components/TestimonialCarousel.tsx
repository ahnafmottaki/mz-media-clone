import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialSlide } from "./TestimonialSlide";

export const TestimonialCarousel = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-center w-full overflow-hidden pb-[100px] md:pb-10">
      <div
        role="region"
        aria-label="carousel"
        className="relative box-border caret-transparent clear-both h-auto text-center w-[800px] md:h-[950px]"
      >
        <TestimonialSlide />
        <div
          role="button"
          aria-label="previous slide"
          className="absolute text-stone-950 text-[40px] items-center bg-zinc-900 box-border caret-transparent flex h-[35px] justify-center leading-[64px] w-[35px] z-3 overflow-hidden m-auto rounded-[50%] left-[34%] top-full bottom-0 md:h-[70px] md:left-[-7%] md:top-[-32%] md:w-[70px] hover:text-white hover:rounded-[100%] hover:border-white"
        >
          <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-base caret-transparent before:accent-auto before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-0 before:normal-case before:visible before:border-separate before:font-webflow_icons before:md:text-2xl before:md:leading-6">
            <ChevronLeft size={40} />
          </div>
        </div>
        <div
          role="button"
          aria-label="next slide"
          className="absolute text-stone-950 text-[40px] items-center bg-zinc-900 box-border caret-transparent flex h-[35px] justify-center leading-[64px] right-[-7%] w-[35px] z-4 overflow-hidden m-auto rounded-[50%] left-[19%] top-full bottom-0 md:h-[70px] md:top-[-32%] md:w-[70px] md:left-auto hover:text-white hover:rounded-[100%] hover:border-white"
        >
          <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-base caret-transparent before:accent-auto before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-0 before:normal-case before:visible before:border-separate before:font-webflow_icons before:md:text-2xl before:md:leading-6">
            <ChevronRight size={40} />
          </div>
        </div>
        {/* <div className="absolute box-border caret-transparent hidden h-10 z-2 m-auto pt-2.5 bottom-0 inset-x-0 bg-red-800">
          <div
            aria-label="Show slide 1 of 5"
            role="button"
            className="relative bg-white box-border caret-transparent inline-block mb-[7px] mx-[3px] px-[7px] py-[2.8px] rounded-[100%]"
          >
            1
          </div>
          <div
            aria-label="Show slide 2 of 5"
            role="button"
            className="relative bg-white/40 box-border caret-transparent inline-block mb-[7px] mx-[3px] px-[7px] py-[2.8px] rounded-[100%]"
          >
            2
          </div>
          <div
            aria-label="Show slide 3 of 5"
            role="button"
            className="relative bg-white/40 box-border caret-transparent inline-block mb-[7px] mx-[3px] px-[7px] py-[2.8px] rounded-[100%]"
          >
            3
          </div>
          <div
            aria-label="Show slide 4 of 5"
            role="button"
            className="relative bg-white/40 box-border caret-transparent inline-block mb-[7px] mx-[3px] px-[7px] py-[2.8px] rounded-[100%]"
          >
            4
          </div>
          <div
            aria-label="Show slide 5 of 5"
            role="button"
            className="relative bg-white/40 box-border caret-transparent inline-block mb-[7px] mx-[3px] px-[7px] py-[2.8px] rounded-[100%]"
          >
            5
          </div>
        </div> */}
      </div>
    </div>
  );
};
