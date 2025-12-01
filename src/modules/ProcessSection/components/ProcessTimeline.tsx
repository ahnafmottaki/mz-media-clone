import { ProcessStep } from "./ProcessStep";

export const ProcessTimeline = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-[60px] hidden auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] justify-between min-h-0 min-w-0 gap-y-[60px] w-full pt-0 md:gap-x-20 xl:flex bg-red-900 md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:min-h-auto md:min-w-auto md:gap-y-20 md:pt-[60px]">
      {/*left side process and steps*/}
      <div className="items-start box-border caret-transparent gap-x-[60px] flex flex-col justify-start min-h-0 min-w-0 gap-y-[60px] md:gap-x-[140px] md:min-h-auto md:min-w-auto md:gap-y-[140px]">
        <ProcessStep
          variant="number-right-h3"
          stepNumber="01"
          label="Ideation"
          title="Idea Analysis"
          description="We take your ideas and analyze them thoroughly based on our experience and existing market standards."
        />
        <div className="relative items-start box-border caret-transparent gap-x-2.5 flex h-auto justify-center max-w-full min-h-0 min-w-0 gap-y-2.5 w-auto z-1 left-[10%] top-[0%] md:gap-x-0 md:h-[500px] md:justify-start md:min-h-auto md:min-w-auto md:gap-y-0 md:top-[-4%] md:w-[400px] md:left-auto">
          <div className="relative items-center box-border caret-transparent flex h-[300px] justify-center min-h-0 min-w-[300px] w-[400px] md:items-end md:h-auto md:min-h-auto md:min-w-[450px] md:w-[600px]">
            <div className="absolute box-border caret-transparent top-[-8%] z-6 left-[6%] md:left-[-7%] md:z-3 md:top-[23%]">
              <div className="relative items-center box-border caret-transparent gap-x-2.5 flex justify-center gap-y-2.5 top-[-6%] left-[0%]">
                <div className="items-center box-border caret-transparent gap-x-[15px] flex justify-center min-h-0 min-w-0 gap-y-[15px] px-10 py-5 md:min-h-auto md:min-w-auto ">
                  <img
                    src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6a0fc18b1b753b873e667_tag.svg"
                    alt=""
                    className="box-border caret-transparent h-[50px] max-w-full min-h-0 min-w-0 object-cover w-[50px] md:min-h-auto md:min-w-auto"
                  />
                  {/*<div className="box-border caret-transparent gap-x-3 flex flex-col h-[23px] min-h-0 min-w-0 gap-y-3 overflow-hidden md:min-h-auto md:min-w-auto">
                    <div className="relative items-center box-border caret-transparent flex h-25px-border min-h-0 min-w-0 text-left transform-none md:min-h-auto md:min-w-auto md:translate-y-[-147.956px]">
                      <div className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                        Hook
                      </div>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex h-25px-border min-h-0 min-w-0 text-left md:min-h-auto md:min-w-auto">
                      <div className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                        Tittle
                      </div>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex h-25px-border min-h-0 min-w-0 text-left md:min-h-auto md:min-w-auto">
                      <div className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                        Value
                      </div>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex h-25px-border min-h-0 min-w-0 text-left md:min-h-auto md:min-w-auto">
                      <div className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                        CTA
                      </div>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex h-25px-border min-h-0 min-w-0 text-left md:min-h-auto md:min-w-auto">
                      <div className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                        Hook
                      </div>
                    </div>
                  </div>*/}
                  {/*<div className="bg-white box-border caret-transparent h-[50px] min-h-0 min-w-0 w-px md:min-h-auto md:min-w-auto"></div>*/}
                </div>
                <img
                  src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6daa5744c735ff068b073_input_box.png"
                  alt=""
                  className="absolute box-border caret-transparent h-full max-w-full w-full inset-[0%]"
                />
              </div>
            </div>
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd36b3452df31baf9345_Glow.avif"
              sizes="(max-width: 726px) 100vw, 726px"
              alt=""
              className="relative box-border caret-transparent h-[120%] max-w-[120%] min-h-0 min-w-0 object-cover transform-none w-[120%] z-2 md:min-h-auto md:min-w-auto md:translate-y-[-52px]"
            />
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd3525079b2a2e62ac95_card_1.avif"
              alt=""
              className="absolute shadow-[rgba(64,53,216,0.52)_0px_-5px_20px_-20px] box-border caret-transparent max-w-[250px] object-cover transform-none w-full z-3 rounded-[9px] left-[11%] right-[0%] bottom-[16%] md:max-w-[350px] md:translate-y-[37.0%] md:rounded-[20px] md:bottom-[7%]"
            />
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6e7100cf992b2952b2345_link_bar.avif"
              alt=""
              className="absolute box-border caret-transparent hidden max-w-[350px] object-cover right-[-16%] transform-none w-full z-3 top-[10%] md:block md:translate-x-[4.0%] md:top-[19%]"
            />
            <div className="absolute bg-[linear-gradient(rgba(255,255,255,0)_37%,rgb(9,9,9)_100%,rgb(17,17,17))] box-border caret-transparent h-full w-full z-99 inset-[0%] md:h-[110%]"></div>
          </div>
        </div>
        <ProcessStep
          variant="number-right-h3"
          stepNumber="03"
          label="editing"
          title="Editing the Video"
          description="We make the best quality videos using advanced motion graphics that bring your message to life "
        />
        <div className="relative items-center bg-white/50 box-border caret-transparent gap-x-2.5 flex h-[400px] justify-start max-w-full min-h-0 min-w-0 gap-y-2.5 top-[-4%] w-[500px] z-1 overflow-hidden left-[0%] md:bg-transparent md:gap-x-0 md:h-[500px] md:left-[-11%] md:min-h-auto md:min-w-auto md:gap-y-0 md:w-[600px]">
          <div className="relative items-center box-border caret-transparent flex h-[300px] justify-center min-h-0 min-w-0 w-auto top-[8%] md:items-end md:h-auto md:min-h-auto md:min-w-[500px] md:w-[500px]">
            <div className="absolute items-center box-border caret-transparent gap-x-[42px] flex h-full justify-center gap-y-[42px] top-[-7%] transform-none w-full z-99 left-6 right-[16%] md:translate-x-[1.0%] md:w-[150%] md:left-auto md:top-auto">
              <img
                src="https://c.animaapp.com/mih7w1om2KrHan/assets/67debd0be7a053c01e6bb522_Iman_gadzhi.avif"
                sizes="(max-width: 1220px) 100vw, 1220px"
                alt=""
                className="relative box-border caret-transparent h-[250px] max-h-[250px] max-w-full min-h-0 min-w-0 w-full z-1 rounded-[20px] md:min-h-auto md:min-w-auto"
              />
              <img
                src="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab8c5bd9a46b617d22132_image_2_cmp.avif"
                alt=""
                className="relative box-border caret-transparent h-auto max-h-none max-w-[273.75px] min-h-0 min-w-0 object-contain transform-none w-full z-1 rounded-[15px] md:h-[250px] md:max-h-[250px] md:max-w-full md:min-h-auto md:min-w-auto md:object-cover md:rotate-[-12.000012571476546deg] md:rounded-[20px]"
              />
            </div>
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b707fc23c7175ae432a4ca_Thumbnail_icon.avif"
              alt=""
              className="absolute box-border caret-transparent max-w-full transform-none w-[130px] left-[44%] right-[0%] top-[14%] md:translate-y-[-42px] md:rotate-[12.000012571476546deg]"
            />
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd36b3452df31baf9345_Glow.avif"
              sizes="(max-width: 726px) 100vw, 726px"
              alt=""
              className="relative box-border caret-transparent h-[120%] max-w-[120%] min-h-0 min-w-0 object-cover transform-none w-[120%] z-2 md:min-h-auto md:min-w-auto md:translate-y-[-52px]"
            />
          </div>
          <div className="absolute bg-transparent bg-[url('https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd3514f3f9e84a0bc733_Left.%20right%20rectangle.avif')] bg-size-[cover,auto] box-border caret-transparent h-full w-full z-99 bg-position-[0%,0%_0%,0%] inset-[0%] md:bg-[linear-gradient(90deg,rgb(9,9,9),rgba(216,216,216,0)_18%,rgba(255,255,255,0)_50%,rgba(225,225,225,0)_81%,rgb(9,9,9)),radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0)_56%,rgba(255,255,255,0)_60%,rgba(9,9,9,0.21)_80%,rgb(9,9,9)_96%)] md:bg-size-[auto,auto]"></div>
        </div>
        <ProcessStep
          variant="number-right-h3"
          stepNumber="05"
          label="post"
          title="Post the video"
          description="All thats left now is to post the video and start counting the leads that come in."
        />
      </div>
      <div className="absolute bg-white/10 box-border caret-transparent h-[1960px] w-px left-[46px] right-2/4 top-[10%] bottom-[0%] md:h-[2240px]  md:left-[51%] md:top-[1%]">
        <div className="sticky bg-blue-800 shadow-[rgb(44,56,112)_0px_0px_10px_1px] box-border caret-transparent h-[100px] w-px rounded-[20px] top-1/4"></div>
      </div>
      {/* Right side processes and step*/}
      <div className="items-end box-border caret-transparent gap-x-[60px] flex flex-col h-full justify-start min-h-0 min-w-0 gap-y-[60px] w-full md:gap-x-[140px] md:min-h-auto md:min-w-auto md:gap-y-[140px]">
        <ProcessStep
          variant="image-left"
          glowImageUrl="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd36b3452df31baf9345_Glow.avif"
          glowImageClassName="box-border caret-transparent h-full max-w-full min-h-0 min-w-0 object-cover w-full md:min-h-auto md:min-w-auto"
          image1Url="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6c9a7b71a60f057a75d5a_tag_3.avif"
          image1ClassName="absolute shadow-[rgba(54,108,255,0.57)_0px_9px_20px_-2px] box-border caret-transparent h-[55px] max-w-full transform-none z-[5] rounded-[100px] left-[10%] top-[34%] md:h-[60px] md:translate-x-[58.8459px] md:translate-y-[42.6px] md:rotate-[21.000011456091944deg]"
          image2Url="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6c9a706e0b3217385d044_tag_4.avif"
          image2ClassName="absolute shadow-[rgba(54,108,255,0.57)_0px_9px_20px_-2px] box-border caret-transparent h-[55px] max-w-full transform-none z-[4] rounded-[100px] left-[52%] top-[32%] md:h-[60px] md:translate-x-[-38.5462px] md:translate-y-[33.6px] md:rotate-[-21.000011456091944deg]"
          image3Url="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6c9a7492d6fd645d90cf9_tag_2.avif"
          image3ClassName="absolute shadow-[rgba(54,108,255,0.57)_0px_9px_20px_-2px] box-border caret-transparent h-[55px] max-w-full transform-none z-3 rounded-[100px] left-[13%] top-[58%] md:h-[60px] md:translate-x-[10.7023px] md:translate-y-[-20.4px] md:rotate-[-17.99999174234843deg] md:left-[10%]"
          image4Url="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6c9a77447cd58110ed2b8_tag_1.avif"
          image4ClassName="absolute shadow-[rgba(54,108,255,0.57)_0px_9px_20px_-2px] box-border caret-transparent h-[55px] max-w-full transform-none z-1 rounded-[100px] left-[54%] top-[58%] md:h-[60px] md:translate-x-[-8.4225px] md:translate-y-[-21.6px] md:rotate-[21.000011456091944deg]"
        />
        <ProcessStep
          variant="number-left-h4"
          stepNumber="02"
          label="Scripting"
          title="Writing Content"
          description="We will give you proven script frameworks that the biggest creators and companies use."
        />
        <div className="relative items-start box-border caret-transparent gap-x-2.5 flex h-auto justify-center max-w-full min-h-0 min-w-0 gap-y-2.5 w-auto z-1 left-[10%] top-[0%] md:gap-x-0 md:h-[500px] md:justify-start md:min-h-auto md:min-w-auto md:gap-y-0 md:top-[-4%] md:w-[400px] md:left-auto">
          <div className="relative items-center box-border caret-transparent flex h-[300px] justify-center min-h-0 min-w-[300px] w-[400px] md:items-end md:h-auto md:min-h-auto md:min-w-[450px] md:w-[600px]">
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd36b3452df31baf9345_Glow.avif"
              sizes="(max-width: 726px) 100vw, 726px"
              alt=""
              className="relative box-border caret-transparent h-[120%] max-w-[120%] min-h-0 min-w-0 object-cover transform-none w-[120%] z-2 md:min-h-auto md:min-w-auto md:translate-y-[-52px]"
            />
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b73326861ecd43aa1089d3_tag_3.avif"
              alt=""
              className="absolute shadow-[rgba(62,38,196,0.55)_7px_19px_20px_-1px] box-border caret-transparent h-[250px] max-w-full object-cover z-3 rounded-[100px] left-[14%] top-[5%] md:h-[300px]"
            />
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd368a7f0840c7932011_icon_1.avif"
              alt=""
              className="absolute box-border caret-transparent max-w-full transform-none w-[170px] z-3 left-[32%] top-[19%] md:translate-y-[45.0%] md:top-[29%]"
            />
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd354eb81fe4d982b5df_video_editing_canvas.avif"
              alt=""
              className="absolute box-border caret-transparent hidden h-[210px] max-w-full z-4 right-[2%] bottom-[11%] md:block md:bottom-[16%]"
            />
            <img
              src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd36ed14bc9ea8341c97_icon_2.avif"
              alt=""
              className="absolute box-border caret-transparent max-w-full transform-none w-[110px] z-2 left-[58%] right-1/4 top-[24%] md:translate-x-[-15.0%] md:translate-y-[24.0%] md:z-3 md:left-auto md:top-[39%]"
            />
            <div className="absolute bg-[linear-gradient(rgba(255,255,255,0)_37%,rgba(255,255,255,0)_52%,rgba(9,9,9,0.76)_86%,rgb(9,9,9))] box-border caret-transparent hidden h-full w-full z-99 inset-[0%] md:block md:h-[90%]"></div>
          </div>
        </div>
        <ProcessStep
          variant="number-left-h4"
          stepNumber="04"
          label="Thumbnail"
          title="creating thumbnail"
          description="We analyze other thumbnails in your niche and are able to replicate best performing results."
        />
        <ProcessStep
          variant="image-right"
          glowImageUrl="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd36b3452df31baf9345_Glow.avif"
          glowImageClassName="relative box-border caret-transparent h-[120%] left-[-16%] max-w-[120%] min-h-0 min-w-0 object-cover transform-none w-[120%] z-2 bottom-[38px] md:min-h-auto md:min-w-auto md:translate-y-[-52px]"
          image1Url="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6fe2b0c2c7cfd9f95e99a_you_tube_icon.avif"
          image1ClassName="absolute box-border caret-transparent max-w-full object-cover transform-none w-[150px] right-[8%] top-[5%] md:translate-x-[-23.0%] md:translate-y-[33.0%] md:right-[13%] md:top-[10%]"
          image2Url="https://c.animaapp.com/mih7w1om2KrHan/assets/67b6fddc63aa60dafdeff726_you_tube_icon-1.avif"
          image2ClassName="absolute box-border caret-transparent max-w-full object-cover transform-none w-[90px] left-[8%] bottom-1/4 md:translate-x-[27.0%] md:translate-y-[-23.0%] md:bottom-[37%]"
          image3Url="https://c.animaapp.com/mih7w1om2KrHan/assets/67b731d891c16c44b9310086_Group_1618874258.avif"
          image3ClassName="absolute box-border caret-transparent max-w-full object-cover transform-none w-[120px] z-1 left-[16%] top-[8%] md:translate-x-[13.0%] md:translate-y-[47.0%]"
          image4Url="https://c.animaapp.com/mih7w1om2KrHan/assets/68aab7a40dfac4bd3d6c22b8_Glow.avif"
          image4ClassName="absolute box-border caret-transparent max-w-[350px] object-cover w-full z-6 right-[16%] bottom-[22%] md:max-w-[400px] md:bottom-[26%]"
          iconUrl="https://c.animaapp.com/mih7w1om2KrHan/assets/icon-1.svg"
        />
      </div>
    </div>
  );
};
