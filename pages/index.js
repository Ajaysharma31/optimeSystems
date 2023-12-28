import Counter from "@/src/components/Counter";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout footer={1}>
      {/*==================================================*/}
      {/* Start Optime slider Area */}
      {/*==================================================*/}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="slider-content">
                <h3> Work With Optime </h3>
                <h1> Innovate Solution For </h1>
                <h1>
                  {" "}
                  Business <span>Success</span>{" "}
                </h1>
                <p>
                  {" "}
                  Monotonectally implement integrated commerce and distributed
                  is conveniently unleash B2B customer service via long
                </p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 ">
              <div className="slider-thumb">
                {/* <img src="assets/images/slider/hero-img.png" alt /> */}
              </div>
              {/* <div className="video-icon">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg"
                >
                  <i className="fa fa-play" />
                </a>
              </div> */}
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb">
                <img src="assets/images/slider/hero-shape.png" alt />
              </div>
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/hero-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*End Optime slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Optime feature Area */}
      {/*==================================================*/}
      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="Optime-section-title mobile-center">
                <h2> We Run All Kinds Of Services</h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="Optime-button text-right">
                <Link legacyBehavior href="/service">
                  <a>
                    {" "}
                    All Service <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="jaytech-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Interacture Capacity Planning </h2>
                  </div>
                  <div className="service-number">
                    <h1> 01 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="jaytech-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon2.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> New Technology Services </h2>
                  </div>
                  <div className="service-number">
                    <h1> 02 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="jaytech-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon3.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Cloud Computing Solutions </h2>
                  </div>
                  <div className="service-number">
                    <h1> 03 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="jaytech-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Top Information Technology </h2>
                  </div>
                  <div className="service-number">
                    <h1> 04 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Optime feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End Optime about Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End Optime about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End Optime about Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End Optime about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Optime case study Area */}
      {/*==================================================*/}
      <div className="case-study-area">
        <div className="container">
          <div className="row case-study-bg align-items-center mb-40">
            <div className="col-lg-10">
              <div className="Optime-section-title mobile-center white ">
                <h2> About </h2>
                <p className="text-white">
                  Technology shifts and improves every industry. Projects ebb
                  and flow. Companies want shiny new apps. IT talent must be
                  smart, agile, and ready to work when the moment strikes.
                  That’s why Optime Systems lives and breathes information
                  technology and moves at the pace of our clients. For more than
                  30 years, we’ve been matching the best and brightest IT talent
                  with Fortune 100 and 500 companies, SMBs, and startups.
                </p>
              </div>
            </div>
            <div className="case-study-shape">
              <div className="case-shape-thumb bounce-animate4">
                <img src="assets/images/resource/red-dot.png" alt />
              </div>
              <div className="case-shape-thumb1 bounce-animate2">
                <img src="assets/images/resource/all-shape.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Optime case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Optime process Area */}
      {/*==================================================*/}
      <div className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Idea <span> Generate </span>
                      </h3>
                      <p>Innovative Strategies for Continuous Growth</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        System <span> Design </span>
                      </h3>
                      <p>Robust Architecture for Seamless Operations</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Continuous <span> Assistance </span>
                      </h3>
                      <p>Reliable assistance available around the clock</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Sales <span> Generate </span>
                      </h3>
                      <p>Efficiently boosts sales through continuous support</p>
                    </div>
                  </div>
                </div>
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/jaytech-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="Optime-section-title mt-4 mt-lg-0">
                <h2> CLIENTS </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="jaytech-smart-title">
                <h4>
                  {" "}
                  For Choose <span>Optime</span> Before know who we are?{" "}
                </h4>
                <p>
                  From Fortune 500, SMBs, and startups, Optime Systems delivers
                  the talent to meet your hiring needs for contract staffing,
                  team augmentation, direct hire, or managed services. We listen
                  and carefully choose our consultants for placement across
                  diverse industries,from retail, technology, healthcare and
                  biotech, to financial and insurance, transportation, and
                  telecom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Optime process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Optime Skills Area Css */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End Optime Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Optime Blog Area */}
      {/*==================================================*/}

    </Layout>
  );
};
export default Index;
