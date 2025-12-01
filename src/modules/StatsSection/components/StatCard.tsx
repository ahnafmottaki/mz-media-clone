export type StatCardProps = {
  variant: string;
  hasSecondaryClass?: boolean;
  statDigits: string[];
  hasDecimal?: boolean;
  decimalDigits?: string[];
  unit: string;
  statLabel: string;
  title: string;
  titleBreak?: boolean;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className={`box-border caret-transparent flex ${props.variant}`}>
      <div
        className={`items-start box-border caret-transparent gap-x-3 flex flex-col justify-end gap-y-3 md:gap-x-25px-border md:gap-y-[25px]${
          props.hasSecondaryClass
            ? " col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1]"
            : ""
        }`}
      >
        <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
          <div className="box-border caret-transparent flex flex-col md:block md:flex-row">
            <div
              className={`box-border caret-transparent flex min-h-auto min-w-auto md:min-h-0 md:min-w-0 ${
                props.hasDecimal
                  ? "gap-x-2.5 gap-y-2.5"
                  : "items-start gap-x-2 justify-start md:items-center md:gap-x-[15px] md:justify-between"
              }`}
            >
              <div className="items-start box-border caret-transparent flex h-10 overflow-hidden pr-2 md:h-[60px] md:pr-0">
                <div className="items-center box-border caret-transparent flex flex-col justify-start translate-y-[-90.0%]">
                  {props.statDigits.map((digit, index) => (
                    <div
                      key={index}
                      className="text-white text-3xl font-semibold box-border caret-transparent tracking-[-2.72px] leading-[39px] md:text-[50px] md:leading-[65px]"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                {props.hasDecimal && props.decimalDigits && (
                  <div className="items-center box-border caret-transparent flex flex-col justify-start">
                    {props.decimalDigits.map((digit, index) => (
                      <div
                        key={index}
                        className="text-white text-3xl font-semibold box-border caret-transparent tracking-[-2.72px] leading-[39px] md:text-[50px] md:leading-[65px]"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-start gap-y-0 md:gap-x-[normal] md:gap-y-[normal]">
                <div className="text-white text-[28px] box-border caret-transparent leading-[44.8px] md:text-[38px] md:leading-[60.8px]">
                  {props.unit}
                </div>
                <div className="text-white text-sm font-normal box-border caret-transparent hidden leading-[19.6px] min-h-0 min-w-0 text-left font-poppins md:text-base md:font-medium md:block md:leading-[22.4px] md:min-h-auto md:min-w-auto md:text-start md:font-secondary">
                  {props.statLabel}
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent block min-h-auto min-w-auto md:hidden md:min-h-0 md:min-w-0">
              {props.statLabel}
            </div>
          </div>
        </div>
        <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
          <div className="text-lg font-medium box-border caret-transparent hidden leading-[28.8px] font-secondary md:block">
            {props.titleBreak ? (
              <>
                {props.title.split("<br />")[0]}
                <br className="box-border caret-transparent" />
              </>
            ) : (
              props.title
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
