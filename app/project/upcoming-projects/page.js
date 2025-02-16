"use client";
import Layout from "@/components/layout/Layout";
import { projectItems } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const projectItemsList = await projectItems();

function Home() {
  const {
    projectInnerBanner,
    projectDetails,
    projectBenefitsImage1,
    projectBenefitsImage2,
    projectBenefits,
  } = projectItemsList[1].fields;
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle='Upcoming Projects'
      >
        {/*Start Project Details Section */}
        <section className='project-details-image-box'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='project-details-img'>
                  <img src={projectInnerBanner.fields.file.url} alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Project Details Section */}

        {/*Start Project Details content Section */}
        <section className='project-details-content-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='project-details-left-content'>
                  <div className='title'>
                    <h2>Project Details</h2>
                  </div>
                  <div className='text rich-text'>
                    {documentToReactComponents(projectDetails)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Project Details content Section */}

        <section className='project-details-benifits-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4'>
                <div className='project-details-benifits-single'>
                  <div className='project-details-benifits-image'>
                    <img src={projectBenefitsImage1.fields.file.url} alt='' />
                  </div>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='project-details-benifits-single'>
                  <div className='project-details-benifits-image'>
                    <img src={projectBenefitsImage2.fields.file.url} alt='' />
                  </div>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='project-details-benifits'>
                  <h3>Project Benifits</h3>

                  <ul>
                    {projectBenefits.map((item, index) => (
                      <li key={index}>
                        <i className='fa fa-angle-right'></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
export default Home;
