"use client";
import Layout from "@/components/layout/Layout";
import Team from "@/components/sections/home1/Team";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { aboutUsAboutContent, aboutUsVideo } from "@/lib/contentful/client";
import Preloader from "@/components/elements/Preloader";

export default function Home() {
  const [aboutData, setAboutData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const about = await aboutUsAboutContent();
      const video = await aboutUsVideo();
      setAboutData(about[0]);
      setVideoData(video[0]);
    }

    fetchData();
  }, []);

  if (!aboutData || !videoData) {
    return <Preloader />;
  }

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
                    <img
                      src={aboutData.fields.aboutImage.fields.file.url}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-xl-6'>
                <div className='about-two-right-content'>
                  <div className='about-two-title'>
                    <h4 className='sub-title-shape-left section_title-subheading'>
                      About Us
                    </h4>
                    <h2>{aboutData.fields.aboutUsTitle}</h2>
                    <p className='about-two-title-text'>
                      {aboutData.fields.aboutUsShortDescription1}
                    </p>
                  </div>
                  <div className='about-tow-experience-years style-two'>
                    <div className='about-tow-experience-years-icon'>
                      <span className='flaticon-medal'></span>
                    </div>
                    <div className='about-tow-experience-years-text'>
                      <h2>{aboutData.fields.yearsOfExperience}+</h2>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                  <div className='about-two-bottom-content'>
                    <p className='about-two-bottom-text'>
                      {aboutData.fields.aboutUsShortDescription2}
                    </p>
                    <h3>
                      {aboutData.fields.ceoName}-
                      <span>{aboutData.fields.ceoPosition}</span>
                    </h3>
                  </div>
                  <div className='about-two-btn'>
                    <Link
                      href={`/${aboutData.fields.buttonLink}`}
                      className='theme-btn'
                    >
                      {aboutData.fields.buttonText}
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
            backgroundImage: `url(${videoData.fields.videoBackgroundImage.fields.file.url}`,
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
                      {videoData.fields.videoTitleFirst}{" "}
                      <span>{videoData.fields.videoTitleHighlight}</span> <br />{" "}
                      {videoData.fields.videoTitleLast}
                    </h2>
                    <p>{videoData.fields.videoSubTitle}</p>
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
          videoId={videoData.fields.videoID}
          onClose={() => setOpen(false)}
        />
        {/*Start Team One Section */}
        <Team />
        {/*End Team One Section */}
      </Layout>
    </>
  );
}
