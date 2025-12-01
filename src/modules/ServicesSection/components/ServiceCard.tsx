interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
}
export const ServiceCard = ({ src, title, description }: ServiceCardProps) => {
  return (
    <div className="items-start box-border caret-transparent gap-x-6 flex grow-0 justify-center gap-y-6 md:grow">
      <div className="mr-10  relative items-center bg-neutral-900 bg-[radial-gradient(circle_at_50%_0%,rgb(19,19,29),rgb(9,9,9)_46%)] box-border caret-transparent gap-x-[15px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-full justify-center max-h-[700px] max-w-[300px] gap-y-[15px] w-[300px] border border-zinc-900 overflow-hidden px-[15px] py-5 rounded-[20px] border-solid left-[0%] bottom-[0%] md:h-[300px] md:max-h-[300px] md:max-w-[370px] md:w-[370px] md:p-6">
        <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-between gap-y-[15px] w-full md:gap-x-6 md:gap-y-6 h-60">
          <div className="box-border caret-transparent max-w-[50px] w-[50px] md:max-w-[60px] md:w-[60px]">
            <img
              src={src}
              alt=""
              className="box-border caret-transparent inline-block max-w-full object-cover w-full"
            />
          </div>
          <h3 className="text-white text-[21px] font-medium box-border caret-transparent tracking-[-1.12px] leading-[25.2px] max-w-[300px] text-center capitalize w-full font-secondary md:text-[34px] md:font-semibold md:leading-[44.2px] md:max-w-none md:w-auto">
            {title}
          </h3>
          <p className="box-border caret-transparent leading-[24.5px] max-w-[300px] text-center w-full md:max-w-none md:w-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
