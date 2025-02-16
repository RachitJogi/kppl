import { homePageProjectSection } from "@/lib/contentful/client";

const homePageProjectItems = await homePageProjectSection();
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
            {homePageProjectItems.map((item, index) => (
              <div key={item.sys.id} className='col-xl-6 col-lg-6'>
                {/*Main Service One Sec Single*/}
                <div
                  className='main-service-one-sec-single wow fadeInUp'
                  data-wow-delay='300ms'
                >
                  <div className='main-service-one-sec-img'>
                    <img
                      src={`${item.fields.projectImage.fields.file.url}`}
                      alt=''
                    />
                  </div>
                  <div className='main-service-one-sec-content'>
                    <div className='main-service-one-count'>{`0${
                      index + 1
                    }`}</div>
                    <div className='main-service-one-icon'>
                      <i className='flaticon-lab-tool'></i>{" "}
                    </div>
                    <h3>{item.fields.projectName}</h3>
                    <p>{item.fields.projectShotDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*End Main Service Two Section */}
    </>
  );
}
