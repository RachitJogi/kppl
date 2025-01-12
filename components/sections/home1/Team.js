export default function Cases() {
  return (
    <>
      {/*Start Team One Section */}
      <section className='team-one-section two'>
        <div className='container'>
          <div className='thm-section-title text-center'>
            <h4 className='sub-title-shape-left section_title-subheading'>
              Meet Our Team
            </h4>
            <h2>Founders</h2>
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
                    backgroundImage: "url('assets/images/team/sid-patel.jpg')",
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
    </>
  );
}
