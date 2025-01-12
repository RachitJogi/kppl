"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='About Us'>
        {/* Start About Two Section */}
        <section className='about-tow-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6'>
                <div
                  className='about-two-left-content wow slideInLeft'
                  data-wow-delay='100ms'
                >
                  <div className='about-two-sec-image'>
                    <div
                      className='about-two-sec-image-bg-1'
                      style={{
                        backgroundImage:
                          "url(assets/images/about/about-2--pattern-1.png",
                      }}
                    ></div>
                    <div
                      className='about-two-sec-image-bg-2'
                      style={{
                        backgroundImage:
                          "url(assets/images/about/about-2--pattern-2.png",
                      }}
                    ></div>
                    <img src='assets/images/about/about-2-img-1.jpg' alt='' />
                  </div>
                </div>
              </div>
              <div className='col-xl-6'>
                <div className='about-two-right-content'>
                  <div className='about-two-title'>
                    <h4 className='sub-title-shape-left section_title-subheading'>
                      About Us
                    </h4>
                    <h2>Introduction to Kutch Potash</h2>
                    <p className='about-two-title-text'>
                      Founded with a vision to be a catalyst for positive
                      change, we are committed to providing sustainable and
                      innovative solutions that cater to the growing demands of
                      modern industries.
                    </p>
                  </div>
                  <div className='about-tow-experience-years style-two'>
                    <div className='about-tow-experience-years-icon'>
                      <span className='flaticon-medal'></span>
                    </div>
                    <div className='about-tow-experience-years-text'>
                      <h2>8+</h2>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                  <div className='about-two-bottom-content'>
                    <p className='about-two-bottom-text'>
                      As we step into the chemical sector, our focus is not just
                      on entering a new field but on redefining it through
                      cutting-edge research, technological advancements, and
                      sustainable practices.
                    </p>
                    <h3>
                      Mr C N Patel - <span>CEO & Founder</span>
                    </h3>
                  </div>
                  <div className='about-two-btn'>
                    <Link href='/contact' className='theme-btn'>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Two Section */}
        {/*Start video Two Section */}
        <section
          className='video-two-section'
          style={{
            backgroundImage:
              "url(assets/images/background/video-sec-two-bg.jpg",
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='video-two-sec-inner'>
                  <div className='video-two-sec-icon'>
                    <a
                      onClick={() => setOpen(true)}
                      className='video-two-sec-btn video-popup'
                    >
                      <i className='fa fa-play'></i>
                    </a>
                  </div>
                  <div className='video-two-sec-content'>
                    <h2>
                      We believe in <span>collaboration and transparency</span>{" "}
                      <br /> 8+ years of experience
                    </h2>
                    <p>Based in the dynamic region of Kutch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End video Two Section */}
        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='vfhzo499OeA'
          onClose={() => setOpen(false)}
        />
        {/*Start Team One Section */}
        <section className='team-one-section'>
          <div className='container'>
            <div className='thm-section-title text-center'>
              <h4 className='sub-title-shape-left section_title-subheading'>
                Meet Our Team
              </h4>
              <h2>Founders and Directors</h2>
            </div>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-6'>
                {/*Team One Single*/}
                <div
                  className='team-one-single wow fadeInLeft'
                  data-wow-delay='200ms'
                >
                  <div
                    className='team-one-img'
                    style={{
                      backgroundImage: "url('assets/images/team/cn-patel.jpg')",
                    }}
                  >
                    <img src='assets/images/team/cn-patel.jpg' alt='' />
                  </div>
                  <div className='team-one-content'>
                    <h3>Mr C N Patel</h3>
                    <p>CEO - Founder</p>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6'>
                {/*Team One Single*/}
                <div
                  className='team-one-single wow fadeInLeft'
                  data-wow-delay='100ms'
                >
                  <div
                    className='team-one-img'
                    style={{
                      backgroundImage:
                        "url('assets/images/team/sid-patel.jpg')",
                    }}
                  >
                    <img src='assets/images/team/sid-patel.jpg' alt='' />
                  </div>
                  <div className='team-one-content'>
                    <h3>Mr Siddharth Patel</h3>
                    <p>Director</p>
                  </div>
                </div>
              </div>

              <div className='col-xl-4 col-lg-4 col-md-6'>
                {/*Team One Single*/}
                <div
                  className='team-one-single wow fadeInLeft'
                  data-wow-delay='300ms'
                >
                  <div
                    className='team-one-img'
                    style={{
                      backgroundImage:
                        "url('assets/images/team/rasik-patel.jpg')",
                    }}
                  >
                    <img src='assets/images/team/rasik-patel.jpg' alt='' />
                  </div>
                  <div className='team-one-content'>
                    <h3>Mr Rasik Patel</h3>
                    <p>Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Team One Section */}
      </Layout>
    </>
  );
}
