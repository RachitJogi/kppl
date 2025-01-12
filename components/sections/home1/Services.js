export default function Feature() {
  return (
    <>
      {/*Start Main Service Two Section */}
      <section className='main-service-one-section two'>
        <div className='container'>
          <div className='thm-section-title text-center'>
            <h4 className='sub-title-shape-left section_title-subheading'>
              projects
            </h4>
            <h2>Our Current and Upcoming projects</h2>
          </div>
          <div className='row'>
            <div className='col-xl-6 col-lg-6'>
              {/*Main Service One Sec Single*/}
              <div
                className='main-service-one-sec-single wow fadeInUp'
                data-wow-delay='300ms'
              >
                <div className='main-service-one-sec-img'>
                  <img src='assets/images/service/service-1-img-1.jpg' alt='' />
                </div>
                <div className='main-service-one-sec-content'>
                  <div className='main-service-one-count'>01</div>
                  <div className='main-service-one-icon'>
                    <i className='flaticon-lab-tool'></i>{" "}
                  </div>
                  <h3>Boric Acid</h3>
                  <p>
                    Our first major initiative is the development of a
                    state-of-the-art boric acid production facility
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6'>
              {/*Main Service One Sec Single*/}
              <div
                className='main-service-one-sec-single wow fadeInUp'
                data-wow-delay='600ms'
              >
                <div className='main-service-one-sec-img'>
                  <img src='assets/images/service/service-1-img-2.jpg' alt='' />
                </div>
                <div className='main-service-one-sec-content'>
                  <div className='main-service-one-count'>02</div>
                  <div className='main-service-one-icon'>
                    <i className='flaticon-lab-tool'></i>
                  </div>
                  <h3>Upcoming</h3>
                  <p>
                    In our pursuit of continuous growth and innovation, Kutch
                    Potash Pvt. Ltd. is already planning several upcoming
                    projects that will further expand our footprint in the
                    chemical industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Main Service Two Section */}
    </>
  );
}
