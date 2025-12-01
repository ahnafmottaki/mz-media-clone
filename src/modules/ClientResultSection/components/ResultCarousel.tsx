import { ResultCard } from "./ResultCard";

export const ResultsCarousel = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-6 flex flex-col gap-y-6 overflow-hidden md:gap-x-[30px] md:gap-y-[30px]">
      <div className="box-border  caret-transparent gap-x-[15px] flex h-full max-h-full min-h-0 min-w-0 gap-y-[15px] transform-none md:gap-x-[30px] md:h-auto md:max-h-none md:min-h-auto md:min-w-auto md:gap-y-[30px] ">
        <div className="items-start animate-slide  box-border caret-transparent gap-x-6 flex grow-0 justify-center min-h-0 min-w-0 gap-y-6 md:grow md:min-h-auto md:min-w-auto">
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>
      </div>
    </div>
  );
};
