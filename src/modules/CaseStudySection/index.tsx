import { CaseStudyCard } from "./components/CaseStudyCard";

export const CaseStudySection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden">
      <div className="items-start box-border caret-transparent gap-x-[30px] flex-col justify-between gap-y-[30px] py-[30px] md:py-[60px]">
        <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-999 mx-auto px-[21px] py-7 md:px-7">
          <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-0">
            <div className="relative items-center box-border caret-transparent flex justify-center text-center z-1 mb-[30px]">
              <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center max-w-[750px] gap-y-[15px]">
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="text-white font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[25.2px] uppercase mb-2.5 font-secondary">
                    case studies
                  </div>
                  <h2 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.12px] leading-[43.2px] capitalize font-secondary md:text-[38px] md:font-semibold md:leading-[49.4px]">
                    <span className="text-gray-400 text-4xl font-medium bg-clip-text bg-[linear-gradient(74deg,rgb(137,142,153),rgba(255,255,255,0.6))] box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]">
                      Some solid{" "}
                      <br className="text-4xl font-medium box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]" />
                    </span>
                    Case studies
                  </h2>
                </div>
                <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                  <div className="box-border caret-transparent max-w-[600px] w-full"></div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-[30px] flex flex-col gap-y-[30px] md:gap-x-20 md:gap-y-20">
              <CaseStudyCard />
            </div>
            <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
              {/* added flex  */}
              <div className="content-between items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center gap-y-[15px] w-full pt-10 pb-[15px] md:hidden md:flex-row md:w-auto md:pb-[30px]">
                <a
                  href="#book-a-call"
                  className="text-white font-medium items-center bg-blue-800 bg-[linear-gradient(rgba(152,163,255,0.2)_2%,rgb(39,63,183)_60%)] box-border caret-transparent gap-x-[15px] flex justify-center max-w-full gap-y-[15px] text-center capitalize w-full border px-25px-border py-3.5 rounded-xl border-solid border-white/0 md:justify-start md:w-auto hover:shadow-[rgba(0,0,0,0.2)_0px_0px_0px_5px_inset]"
                >
                  <div className="box-border caret-transparent min-h-auto min-w-auto md:min-h-0 md:min-w-0">
                    Book a 30 min call
                  </div>
                  <div className="items-center bg-slate-400/20 box-border caret-transparent flex h-[26px] justify-center min-h-auto min-w-auto w-[26px] rounded-[20px] md:min-h-0 md:min-w-0">
                    <img
                      src="https://c.animaapp.com/mih7w1om2KrHan/assets/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
                      alt=""
                      className="box-border caret-transparent h-full max-w-full min-h-auto min-w-auto w-full p-2 md:min-h-0 md:min-w-0"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="relative items-stretch box-border caret-transparent flex-col justify-center max-w-[1000px] w-full z-999 mx-auto px-[21px] py-7 md:px-7">
          <div className="items-start box-border caret-transparent gap-x-[30px] flex-col justify-between gap-y-[30px] pb-[30px] md:pb-[60px]">
            <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-0">
              <div className="relative items-center box-border caret-transparent flex justify-center text-center z-1 mb-[30px]">
                <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center max-w-[750px] gap-y-[15px]">
                  <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                    <div className="text-white font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[25.2px] uppercase mb-2.5 font-secondary">
                      why choose us
                    </div>
                    <h2 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.12px] leading-[43.2px] capitalize font-secondary md:text-[38px] md:font-semibold md:leading-[49.4px]">
                      <span className="text-gray-400 text-4xl font-medium bg-clip-text bg-[linear-gradient(74deg,rgb(137,142,153),rgba(255,255,255,0.6))] box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]">
                        Know what
                      </span>
                      <br className="text-4xl font-medium box-border caret-transparent leading-[43.2px] md:text-[38px] md:font-semibold md:leading-[49.4px]" />
                      we do differently
                    </h2>
                  </div>
                  <div className="items-start box-border caret-transparent flex-col justify-center md:items-center md:flex-row">
                    <div className="box-border caret-transparent max-w-[600px] w-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative items-stretch box-border caret-transparent gap-x-[30px] grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-between justify-items-stretch gap-y-[30px] text-center w-full md:items-start md:flex-row md:grid-cols-[1.25fr_1fr] md:justify-normal md:text-start">
                <div className="relative box-border caret-transparent text-center z-3 md:text-start">
                  <div className="relative backdrop-blur-[35px] bg-gray-500/20 box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] max-w-full text-center w-full z-3 border overflow-hidden pl-px pr-[0.5px] py-[0.5px] rounded-[20px] border-solid border-transparent md:text-start md:rounded-[25px]">
                    <div className="relative items-start bg-transparent bg-[radial-gradient(circle_at_50%_0%,rgb(20,32,73),rgb(14,14,15)_31%,rgb(9,9,9)_103%)] box-border caret-transparent flex flex-col justify-between max-w-full text-left w-full z-2 p-5 rounded-[18px] md:[align-items:normal] md:bg-[radial-gradient(circle_at_50%_0%,rgb(30,34,48)_8%,rgb(14,14,15)_54%,rgb(9,9,9)_103%)] md:block md:flex-row md:justify-normal md:text-start md:p-[35px] md:rounded-3xl">
                      <div className="items-start box-border caret-transparent flex-col justify-center min-h-auto min-w-auto text-left md:items-center md:flex-row md:min-h-0 md:min-w-0 md:text-start">
                        <div className="relative items-center bg-transparent box-border caret-transparent flex justify-between max-w-full text-left w-full border pr-2.5 pb-10 rounded-[15px] border-solid border-transparent md:text-start">
                          <img
                            src="https://c.animaapp.com/mih7w1om2KrHan/assets/679730756024f0575fc9327f_Mz_media_logo.avif"
                            alt=""
                            className="box-border caret-transparent max-w-full text-left w-[150px] md:text-start md:w-[250px]"
                          />
                          <img
                            src="https://c.animaapp.com/mih7w1om2KrHan/assets/679f48af45ca11634cdee639_Arrow.svg"
                            alt=""
                            className="absolute box-border caret-transparent max-w-25px-border text-left w-full left-[17%] top-[42%] md:text-start"
                          />
                        </div>
                      </div>
                      <ul
                        role="list"
                        className="text-white text-sm box-border caret-transparent leading-[21px] list-none min-h-auto min-w-auto text-left mb-2.5 pl-0 md:text-base md:leading-6 md:min-h-0 md:min-w-0 md:text-start"
                      >
                        <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                          <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                            <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                              <img
                                src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f03877896253e_Tick_Mark.svg"
                                alt="Tick Mark Icon"
                                className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full text-left w-full md:text-base md:leading-6 md:text-start"
                              />
                            </div>
                            <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                              In house team of 40+ Experts
                            </div>
                          </div>
                        </li>
                        <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                          <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                            <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                              <img
                                src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f03877896253e_Tick_Mark.svg"
                                alt="Tick Mark Icon"
                                className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full text-left w-full md:text-base md:leading-6 md:text-start"
                              />
                            </div>
                            <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                              Results oriented
                            </div>
                          </div>
                        </li>
                        <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                          <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                            <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                              <img
                                src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f03877896253e_Tick_Mark.svg"
                                alt="Tick Mark Icon"
                                className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full text-left w-full md:text-base md:leading-6 md:text-start"
                              />
                            </div>
                            <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                              Experience with 500+ Clients
                            </div>
                          </div>
                        </li>
                        <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                          <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                            <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                              <img
                                src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f03877896253e_Tick_Mark.svg"
                                alt="Tick Mark Icon"
                                className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full text-left w-full md:text-base md:leading-6 md:text-start"
                              />
                            </div>
                            <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                              Proven DFY Content Funnel
                            </div>
                          </div>
                        </li>
                        <li className="text-base box-border caret-transparent hidden leading-6 text-left mt-[3px] py-[5px] md:list-item md:text-start">
                          <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                            <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                              <img
                                src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f03877896253e_Tick_Mark.svg"
                                alt="Tick Mark Icon"
                                className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full min-h-0 min-w-0 text-left w-full md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start"
                              />
                            </div>
                            <div className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-left md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start">
                              Personalised CRM
                            </div>
                          </div>
                        </li>
                        <li className="text-base box-border caret-transparent hidden leading-6 text-left mt-[3px] py-[5px] md:list-item md:text-start">
                          <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                            <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                              <img
                                src="https://c.animaapp.com/mih7w1om2KrHan/assets/6796419e2d5f03877896253e_Tick_Mark.svg"
                                alt="Tick Mark Icon"
                                className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full min-h-0 min-w-0 text-left w-full md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start"
                              />
                            </div>
                            <div className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-left md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start">
                              24/7 Support, Anytime You Need Us
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="text-white bg-neutral-900 bg-[radial-gradient(circle_at_50%_100%,rgb(24,24,24),rgb(9,9,9))] box-border caret-transparent gap-x-2 flex flex-col min-h-auto min-w-auto gap-y-2 text-left w-full border mt-5 p-5 rounded-xl border-solid border-white/10 md:min-h-0 md:min-w-0 md:text-start md:mt-10">
                        <div className="box-border caret-transparent text-left md:text-start">
                          Bonuses you get with us:
                        </div>
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-6 gap-y-[13px] text-left py-[3px] md:text-base md:leading-[25.6px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-6 min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-[25.6px] md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/679f916c5fe0a2a75fbc4d47_Check_Icon.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-6 max-w-full text-left w-full md:text-base md:leading-[25.6px] md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-6 text-left md:text-base md:leading-[25.6px] md:text-start">
                            Free Go High Level Subscription
                          </div>
                        </div>
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-6 gap-y-[13px] text-left py-[3px] md:text-base md:leading-[25.6px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-6 min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-[25.6px] md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/679f916c5fe0a2a75fbc4d47_Check_Icon.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-6 max-w-full text-left w-full md:text-base md:leading-[25.6px] md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-6 text-left md:text-base md:leading-[25.6px] md:text-start">
                            Free 1-on- 1 Consultancy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute box-border caret-transparent h-3/6 text-center w-[150%] -left-full right-auto top-[30%] bottom-[4%] md:h-[150%] md:left-[-22%] md:text-start md:top-[-54%] md:w-full md:right-[0%] md:bottom-auto">
                  <div className="absolute bg-white/20 bg-[linear-gradient(284deg,rgb(255,255,255),rgba(255,255,255,0))] box-border caret-transparent hidden blur-[20px] h-[300px] mix-blend-overlay opacity-[0.96] text-center w-[300px] z-2 rounded-[100%] left-[35%] top-[31%] md:block md:text-start"></div>
                  <img
                    src="https://c.animaapp.com/mih7w1om2KrHan/assets/67b5dd36b3452df31baf9345_Glow.avif"
                    sizes="(max-width: 726px) 100vw, 726px"
                    alt=""
                    className="absolute box-border caret-transparent h-[90%] max-w-full text-center w-full md:text-start md:w-[90%]"
                  />
                </div>
                <div className="relative bg-neutral-950 box-border caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 text-center w-full z-3 border rounded-[20px] border-solid border-white/10 md:bg-transparent md:col-end-[span_1] md:col-start-[span_1] md:row-end-[span_1] md:row-start-[span_1] md:text-start">
                  <div className="relative items-start box-border caret-transparent flex flex-col justify-between text-left w-full z-2 p-5 md:[align-items:normal] md:block md:flex-row md:justify-normal md:text-start md:p-[35px]">
                    <div className="items-start box-border caret-transparent flex-col justify-center min-h-auto min-w-auto text-left md:items-center md:flex-row md:min-h-0 md:min-w-0 md:text-start">
                      <h3 className="text-white text-[21px] font-medium box-border caret-transparent leading-[29.4px] text-left mt-5 mb-2.5 font-secondary md:text-[34px] md:font-semibold md:leading-[47.6px] md:text-start">
                        Other Agencies
                      </h3>
                    </div>
                    <ul
                      role="list"
                      className="text-white/60 text-sm box-border caret-transparent leading-[21px] list-none min-h-auto min-w-auto text-left mb-2.5 pl-0 md:text-base md:leading-6 md:min-h-0 md:min-w-0 md:text-start"
                    >
                      <li className="text-base box-border caret-transparent hidden leading-6 text-left mt-[3px] py-[5px] md:list-item md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full min-h-0 min-w-0 opacity-[0.52] text-left w-full md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-left md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start">
                            Unreliable Freelancers with slow turnarounds
                          </div>
                        </div>
                      </li>
                      <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full opacity-[0.52] text-left w-full md:text-base md:leading-6 md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                            Edits that fail to convert or perform.
                          </div>
                        </div>
                      </li>
                      <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full opacity-[0.52] text-left w-full md:text-base md:leading-6 md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                            Weak thumbnails and titles with no CTR strategy.
                          </div>
                        </div>
                      </li>
                      <li className="text-base box-border caret-transparent hidden leading-6 text-left mt-[3px] py-[5px] md:list-item md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full min-h-0 min-w-0 opacity-[0.52] text-left w-full md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-left md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start">
                            Lack of proper distribution systems
                          </div>
                        </div>
                      </li>
                      <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full opacity-[0.52] text-left w-full md:text-base md:leading-6 md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                            No expertise in funnels or lead capture systems.
                          </div>
                        </div>
                      </li>
                      <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full opacity-[0.52] text-left w-full md:text-base md:leading-6 md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                            Limited revisions with no client-focused approach.
                          </div>
                        </div>
                      </li>
                      <li className="text-base box-border caret-transparent leading-6 text-left mt-[3px] py-[5px] md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full opacity-[0.52] text-left w-full md:text-base md:leading-6 md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] text-left md:text-base md:leading-6 md:text-start">
                            Guesswork instead of data-driven decisions.
                          </div>
                        </div>
                      </li>
                      <li className="text-base box-border caret-transparent hidden leading-6 text-left mt-[3px] py-[5px] md:list-item md:text-start">
                        <div className="text-[15px] items-center box-border caret-transparent gap-x-[13px] flex justify-start leading-[22.5px] gap-y-[13px] text-left py-[3px] md:text-base md:gap-x-[21px] md:leading-6 md:gap-y-[21px] md:text-start md:pt-[7px] md:pb-1.5">
                          <div className="text-[15px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[22.5px] min-h-3.5 min-w-3.5 text-left w-3.5 md:text-base md:h-[18px] md:leading-6 md:min-h-[18px] md:min-w-[18px] md:text-start md:w-[18px]">
                            <img
                              src="https://c.animaapp.com/mih7w1om2KrHan/assets/6798b2f66c254b4661355946_Close_MD.svg"
                              alt=""
                              className="text-[15px] box-border caret-transparent leading-[22.5px] max-w-full min-h-0 min-w-0 opacity-[0.52] text-left w-full md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start"
                            />
                          </div>
                          <div className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-left md:text-base md:leading-6 md:min-h-auto md:min-w-auto md:text-start">
                            Delayed responses and poor communication.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-between items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center gap-y-[15px] w-full pt-10 pb-[15px] md:flex-row md:w-auto md:py-[30px]">
              <a
                href="#book-a-call"
                className="text-white font-medium items-center bg-blue-800 bg-[linear-gradient(rgba(152,163,255,0.2)_2%,rgb(39,63,183)_60%)] box-border caret-transparent gap-x-[15px] flex justify-center max-w-full gap-y-[15px] text-center capitalize w-full border px-25px-border py-3.5 rounded-xl border-solid border-white/0 md:justify-start md:w-auto hover:shadow-[rgba(0,0,0,0.2)_0px_0px_0px_5px_inset]"
              >
                <div className="box-border caret-transparent">
                  Book a 30-min call
                </div>
                <div className="items-center bg-slate-400/20 box-border caret-transparent flex h-[26px] justify-center w-[26px] rounded-[20px]">
                  <img
                    src="https://c.animaapp.com/mih7w1om2KrHan/assets/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
                    alt=""
                    className="box-border caret-transparent h-full max-w-full w-full p-2"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
