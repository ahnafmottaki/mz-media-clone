import { StatCard } from "./StatCard";

export const StatsGrid = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-10 flex auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-between gap-y-10 w-full mt-0 pb-5 md:[align-items:normal] md:gap-x-[65px] md:grid md:grid-cols-[1fr_1fr_1fr] md:justify-normal md:gap-y-[65px] md:mt-[100px] md:pb-20">
      <StatCard
        variant="items-start box-border caret-transparent flex justify-center md:[align-items:normal] md:justify-start"
        hasSecondaryClass={true}
        statDigits={["0", "1", "2", "3", "4", "5", "6", "7", "8", "2"]}
        hasDecimal={true}
        decimalDigits={["0", "1", "2", "3", "4", "5", "6", "7", "8", "1"]}
        unit="%"
        statLabel="More Engagement"
        title="Viral Edits"
      />
      <StatCard
        variant="items-center flex justify-end md:justify-center"
        hasSecondaryClass={true}
        statDigits={["0", "1", "2", "3", "4", "5", "6", "7", "8", "5"]}
        unit="X"
        statLabel="More Reach"
        title="Strategic Distribution"
      />
      <StatCard
        variant="items-center box-border caret-transparent flex col-end-3 col-start-1 row-end-3 row-start-2 justify-end md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto"
        hasSecondaryClass={false}
        statDigits={["0", "1", "2", "3", "4", "5", "6", "7", "8", "5"]}
        hasDecimal={true}
        decimalDigits={["0", "1", "2", "3", "4", "5", "6", "7", "8", "1"]}
        unit="%"
        statLabel="More Leads"
        title="Automated Systems"
        titleBreak={true}
      />
    </div>
  );
};
