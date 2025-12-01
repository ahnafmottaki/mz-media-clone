export type ProcessStepProps = {
  variant: string;
  stepNumber?: string;
  label?: string;
  title?: string;
  description?: string;
  glowImageUrl?: string;
  glowImageClassName?: string;
  image1Url?: string;
  image1ClassName?: string;
  image2Url?: string;
  image2ClassName?: string;
  image3Url?: string;
  image3ClassName?: string;
  image4Url?: string;
  image4ClassName?: string;
  iconUrl?: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  if (props.variant === "image-left") {
    return (
      <div className="relative box-border caret-transparent gap-x-2.5 flex max-w-full min-h-0 min-w-0 gap-y-2.5 md:gap-x-0 md:min-h-auto md:min-w-auto md:gap-y-0 md:left-auto items-center h-auto justify-center object-cover w-[400px] z-3 left-[0%] md:h-[284px] md:z-1">
        <div className="box-border caret-transparent relative items-center flex h-[300px] justify-center min-h-0 min-w-0 w-auto md:items-end md:h-auto md:min-h-auto md:min-w-auto md:w-[500px]">
          <img
            src={props.glowImageUrl}
            sizes="(max-width: 726px) 100vw, 726px"
            alt=""
            className={props.glowImageClassName}
          />
          <img src={props.image1Url} alt="" className={props.image1ClassName} />
          <img src={props.image2Url} alt="" className={props.image2ClassName} />
          <img src={props.image3Url} alt="" className={props.image3ClassName} />
          <img src={props.image4Url} alt="" className={props.image4ClassName} />
        </div>
      </div>
    );
  }

  if (props.variant === "image-right") {
    return (
      <div className="relative box-border caret-transparent gap-x-2.5 flex max-w-full min-h-0 min-w-0 gap-y-2.5 md:gap-x-0 md:min-h-auto md:min-w-auto md:gap-y-0 md:left-auto items-start h-auto justify-center w-auto z-1 left-[10%] top-[0%] md:h-[500px] md:justify-start md:top-[-4%] md:w-[400px]">
        <div className="box-border caret-transparent relative items-center flex justify-center min-h-0 min-w-0 top-[-34px] w-auto mt-[30px] left-[8%] md:min-h-auto md:min-w-auto md:w-[500px] md:mt-0 md:left-auto md:top-auto">
          <img
            src={props.glowImageUrl}
            sizes="(max-width: 726px) 100vw, 726px"
            alt=""
            className={props.glowImageClassName}
          />
          <img src={props.image1Url} alt="" className={props.image1ClassName} />
          <img src={props.image2Url} alt="" className={props.image2ClassName} />
          <img src={props.image3Url} alt="" className={props.image3ClassName} />
          <img src={props.image4Url} alt="" className={props.image4ClassName} />
          <div className="box-border caret-transparent absolute max-w-full w-full right-[26%]">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "number-left") {
    return (
      <div className="relative box-border caret-transparent gap-x-2.5 flex max-w-full min-h-0 min-w-0 gap-y-2.5 md:gap-x-0 md:min-h-auto md:min-w-auto md:gap-y-0 md:left-auto items-start h-[284px] justify-start w-[400px] z-1 left-[0%]">
        <div className="box-border caret-transparent absolute hidden -mt-2.5 left-[106%] -top-2.5 md:block md:mt-[-50px] md:left-[553px] md:top-auto">
          <div className="box-border caret-transparent justify-center text-white text-sm items-center bg-[linear-gradient(rgb(24,25,41),rgb(2,2,5))] shadow-[rgba(86,86,229,0.2)_0px_0px_45.1px_0px] flex h-10 leading-[22.4px] w-10 border border-gray-800 ml-0 mt-0 p-2 rounded-[100px] border-solid md:text-lg md:h-[70px] md:leading-[28.8px] md:ml-[-5px] md:w-[70px] md:mt-10 md:p-0">
            {props.stepNumber}
          </div>
        </div>
        <div className="box-border caret-transparent items-center gap-x-1.5 flex flex-col justify-between mt-[-63px] max-w-full min-h-0 min-w-0 gap-y-1.5 text-center w-full py-0 rounded-[20px] md:items-start md:gap-x-[27px] md:max-w-[350px] md:min-h-auto md:min-w-auto md:gap-y-[27px] md:text-start md:mt-0 md:py-[30px]">
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 text-center md:items-center md:flex-row md:min-h-auto md:min-w-auto md:text-start">
            <div className="items-center box-border caret-transparent gap-x-[17px] flex flex-row justify-start gap-y-[17px] text-center md:items-start md:gap-x-[21px] md:flex-col md:justify-between md:gap-y-[21px] md:text-start">
              <div className="text-xs bg-indigo-600 shadow-[rgba(0,0,0,0.12)_0px_4.433px_8.865px_0px] box-border caret-transparent hidden tracking-[-0.569px] leading-[18.6px] min-h-0 min-w-0 text-center uppercase px-[13px] py-2 rounded-[8.8px] md:text-[14.235px] md:flex md:leading-[22.0643px] md:min-h-auto md:min-w-auto md:text-start">
                <div className="text-xs box-border caret-transparent leading-[18.6px] min-h-0 min-w-0 text-center md:text-[14.235px] md:leading-[22.0643px] md:min-h-auto md:min-w-auto md:text-start">
                  {props.label}
                </div>
              </div>
              <h3 className="text-white text-[21px] font-medium box-border caret-transparent tracking-[-1.12px] leading-[25.2px] min-h-0 min-w-0 text-center capitalize font-secondary md:text-[34px] md:font-semibold md:leading-[44.2px] md:min-h-auto md:min-w-auto md:text-start">
                {props.title}
              </h3>
            </div>
          </div>
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 text-center md:items-center md:flex-row md:min-h-auto md:min-w-auto md:text-start">
            <p className="text-white/50 box-border caret-transparent leading-[20.58px] max-w-[238px] text-center w-full mb-2.5 md:text-start">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "number-right-h3") {
    return (
      <div className="relative box-border caret-transparent gap-x-2.5 flex max-w-full min-h-0 min-w-0 gap-y-2.5 md:gap-x-0 md:min-h-auto md:min-w-auto md:gap-y-0 md:left-auto items-start justify-start top-[-5%] w-[400px] z-1 left-[0%]">
        <div className="box-border caret-transparent items-center gap-x-1.5 flex flex-col justify-between mt-[-63px] max-w-full min-h-0 min-w-0 gap-y-1.5 text-center w-full py-0 rounded-[20px] md:items-start md:gap-x-[27px] md:max-w-[350px] md:min-h-auto md:min-w-auto md:gap-y-[27px] md:text-start md:mt-0 md:py-[30px]">
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 text-center md:items-center md:flex-row md:min-h-auto md:min-w-auto md:text-start">
            <div className="items-center box-border caret-transparent gap-x-[17px] flex flex-row justify-start gap-y-[17px] text-center md:items-start md:gap-x-[21px] md:flex-col md:justify-between md:gap-y-[21px] md:text-start">
              <div className="text-xs bg-indigo-600 shadow-[rgba(0,0,0,0.12)_0px_4.433px_8.865px_0px] box-border caret-transparent hidden tracking-[-0.569px] leading-[18.6px] min-h-0 min-w-0 text-center uppercase px-[13px] py-2 rounded-[8.8px] md:text-[14.235px] md:flex md:leading-[22.0643px] md:min-h-auto md:min-w-auto md:text-start">
                <div className="text-xs box-border caret-transparent leading-[18.6px] min-h-0 min-w-0 text-center md:text-[14.235px] md:leading-[22.0643px] md:min-h-auto md:min-w-auto md:text-start">
                  {props.label}
                </div>
              </div>
              <h4 className="text-white text-[21px] font-normal box-border caret-transparent tracking-[-1.12px] leading-[25.2px] min-h-0 min-w-0 text-center capitalize font-poppins md:text-3xl md:font-medium md:leading-[39px] md:min-h-auto md:min-w-auto md:text-start md:font-secondary">
                {props.title}
              </h4>
            </div>
          </div>
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 text-center md:items-center md:flex-row md:min-h-auto md:min-w-auto md:text-start">
            <p className="text-white/50 box-border caret-transparent leading-[20.58px] max-w-[238px] text-center w-full mb-2.5 md:text-start">
              {props.description}
            </p>
          </div>
        </div>
        <div className="box-border caret-transparent absolute hidden -mt-2.5 left-[106%] -top-2.5 md:block md:top-5 md:left-[553px] ">
          <div className="box-border caret-transparent justify-center text-white text-sm items-center bg-[linear-gradient(rgb(24,25,41),rgb(2,2,5))] shadow-[rgba(86,86,229,0.2)_0px_0px_45.1px_0px] flex h-10 leading-[22.4px] w-10 border border-gray-800 ml-0 mt-0 p-2 rounded-[100px] border-solid md:text-lg md:h-[70px] md:leading-[28.8px] md:ml-[-5px] md:w-[70px] md:mt-10 md:p-0">
            {props.stepNumber}
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "number-left-h4") {
    return (
      <div className="relative box-border caret-transparent gap-x-2.5 flex max-w-full min-h-0 min-w-0 gap-y-2.5 md:gap-x-0 md:min-h-auto md:min-w-auto md:gap-y-0 md:left-auto items-start justify-end w-[400px] z-1 left-[0%]">
        <div className="box-border caret-transparent absolute hidden left-[-13%] -mt-2.5 -top-2.5 md:block md:left-[-189px] md:mt-[-50px] md:top-auto">
          <div className="box-border caret-transparent justify-center text-white text-sm items-center bg-[linear-gradient(rgb(24,25,41),rgb(2,2,5))] shadow-[rgba(86,86,229,0.2)_0px_0px_45.1px_0px] flex h-10 leading-[22.4px] w-10 border border-gray-800 ml-0 mt-0 p-2 rounded-[100px] border-solid md:text-lg md:h-[70px] md:leading-[28.8px] md:ml-[-5px] md:w-[70px] md:mt-10 md:p-0">
            {props.stepNumber}
          </div>
        </div>
        <div className="box-border caret-transparent items-center gap-x-1.5 flex flex-col justify-between mt-[-63px] max-w-full min-h-0 min-w-0 gap-y-1.5 text-center w-full py-0 rounded-[20px] md:items-start md:gap-x-[27px] md:max-w-[350px] md:min-h-auto md:min-w-auto md:gap-y-[27px] md:text-start md:mt-0 md:py-[30px]">
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 text-center md:items-center md:flex-row md:min-h-auto md:min-w-auto md:text-start">
            <div className="items-center box-border caret-transparent gap-x-[17px] flex flex-row justify-start gap-y-[17px] text-center md:items-start md:gap-x-[21px] md:flex-col md:justify-between md:gap-y-[21px] md:text-start">
              <div className="text-xs bg-indigo-600 shadow-[rgba(0,0,0,0.12)_0px_4.433px_8.865px_0px] box-border caret-transparent hidden tracking-[-0.569px] leading-[18.6px] min-h-0 min-w-0 text-center uppercase px-[13px] py-2 rounded-[8.8px] md:text-[14.235px] md:flex md:leading-[22.0643px] md:min-h-auto md:min-w-auto md:text-start">
                <div className="text-xs box-border caret-transparent leading-[18.6px] min-h-0 min-w-0 text-center md:text-[14.235px] md:leading-[22.0643px] md:min-h-auto md:min-w-auto md:text-start">
                  {props.label}
                </div>
              </div>
              <h4 className="text-white text-[21px] font-normal box-border caret-transparent tracking-[-1.12px] leading-[25.2px] min-h-0 min-w-0 text-center capitalize font-poppins md:text-3xl md:font-medium md:leading-[39px] md:min-h-auto md:min-w-auto md:text-start md:font-secondary">
                {props.title}
              </h4>
            </div>
          </div>
          <div className="items-start box-border caret-transparent flex-col justify-center min-h-0 min-w-0 text-center md:items-center md:flex-row md:min-h-auto md:min-w-auto md:text-start">
            <p className="text-white/50 box-border caret-transparent leading-[20.58px] max-w-[238px] text-center w-full mb-2.5 md:text-start">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
