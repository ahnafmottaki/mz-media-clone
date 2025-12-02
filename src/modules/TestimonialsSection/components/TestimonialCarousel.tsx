import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialSlide } from "./TestimonialSlide";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export const TestimonialCarousel = () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return (
    <div className="items-center box-border caret-transparentflex flex-col justify-center w-full  overflow-hidden pb-[100px] md:pb-10 relative">
      <div
        role="button"
        aria-label="previous slide"
        // md:left-[-7%] md:top-[-32%] left-[34%] top-full
        className="absolute text-stone-950 swiper-button-prev  text-[40px] items-center bg-zinc-900 box-border caret-transparent flex h-[35px] justify-center leading-16 w-[35px] z-3 overflow-hidden  rounded-[50%]  md:h-[70px] top-[33%] left-[27%] md:w-[70px] hover:text-white hover:rounded-[100%] hover:border-white"
      >
        <div className="absolute inset-0 flex justify-center items-center text-white cursor-pointer">
          <ChevronLeft size={40} />
        </div>
      </div>
      <div
        role="button"
        aria-label="previous slide"
        // md:left-[-7%] md:top-[-32%] left-[34%] top-full
        className="absolute text-stone-950 swiper-button-next  text-[40px] items-center bg-zinc-900 box-border caret-transparent flex h-[35px] justify-center leading-16 w-[35px] z-3 overflow-hidden  rounded-[50%]  md:h-[70px] top-[33%] right-[30%] md:w-[70px] hover:text-white hover:rounded-[100%] hover:border-white"
      >
        <div className="absolute inset-0 flex justify-center items-center text-white cursor-pointer">
          <ChevronRight size={40} />
        </div>
      </div>
      <div
        role="region"
        aria-label="carousel"
        className="swiper relative  box-border caret-transparent clear-both h-auto text-center w-[800px] md:h-[950px]"
      >
        <div className="swiper-wrapper">
          <div className="relative swiper-slide box-border caret-transparent h-full max-w-full text-wrap  w-full z-1 overflow-hidden inset-x-0 md:static md:max-w-none md:w-auto">
            <TestimonialSlide />
            <TestimonialSlide />
            <TestimonialSlide />
            <TestimonialSlide />
            <TestimonialSlide />
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
