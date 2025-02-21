import { homePageAboutSection } from "@/lib/contentful/client";

const homePageAboutSectionItems = await homePageAboutSection();
export default function About() {
  return (
    <>
      {/* Start About Two Section */}
      <section className='about-tow-section about-page'>
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
                        "url(assets/images/about/about-2--pattern-1.png)",
                    }}
                  ></div>
                  <div
                    className='about-two-sec-image-bg-2'
                    style={{
                      backgroundImage:
                        "url(assets/images/about/about-2--pattern-2.png)",
                    }}
                  ></div>
                  <img
                    src={`${homePageAboutSectionItems[0].fields.aboutSectionImage.fields.file.url}`}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='about-two-right-content'>
                <div className='about-two-title'>
                  <h4 className='sub-title-shape-left section_title-subheading'>
                    {homePageAboutSectionItems[0].fields.aboutSectionSubtitle}
                  </h4>
                  <h2>Welcome to KPPL</h2>
                  <p className='about-two-title-text'>
                    {homePageAboutSectionItems[0].fields.aboutSectionExcerpt}
                  </p>
                </div>
                <div className='row align-items-center'>
                  {homePageAboutSectionItems[0].fields.aboutSectionQualitiesList.map(
                    (item, index) => (
                      <div key={index} className='col-md-6'>
                        <div className='about-tow-experience-years'>
                          <div className='about-tow-experience-years-icon'>
                            <span className='flaticon-check'></span>
                          </div>
                          <div className='about-tow-experience-years-text'>
                            <h2>{item}</h2>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className='about-two-bottom-content'>
                  <h3>
                    Mr C N Patel - <span>CEO & Founder</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Two Section */}
    </>
  );
}
