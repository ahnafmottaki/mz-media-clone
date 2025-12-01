export const HeroVideo = () => {
  return (
    <div className="relative items-center box-border caret-transparent justify-center w-full">
      <div className="relative box-border caret-transparent max-w-full transform-none w-full overflow-hidden rounded-[10px] md:rounded-none">
        <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-white/60 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins after:accent-auto after:caret-transparent after:clear-both after:text-white/60 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins">
          <div className="relative box-border caret-transparent pt-[56.25%]">
            <iframe
              className="absolute box-border caret-transparent h-full w-full left-0
          top-0"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/954L0eVIdaE?si=ZzAl7aWSGenH7kLA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
