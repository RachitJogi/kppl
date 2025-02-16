"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { projectItems } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Preloader from "@/components/elements/Preloader";

function Home() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await projectItems();
        if (data.length > 1) {
          setProjectData(data[1].fields);
        } else {
          setError("No upcoming project data available.");
        }
      } catch (err) {
        console.error("Error fetching project items:", err);
        setError("Failed to load project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Preloader />;
  if (error) return <p>{error}</p>;
  if (!projectData) return null;

  const {
    projectInnerBanner,
    projectDetails,
    projectBenefitsImage1,
    projectBenefitsImage2,
    projectBenefits,
  } = projectData;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Upcoming Projects'>
      {/* Project Details Banner */}
      <section className='project-details-image-box'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='project-details-img'>
                <img
                  src={projectInnerBanner.fields.file.url}
                  alt={
                    projectInnerBanner.fields.file.fileName || "Project Banner"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Content */}
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

      {/* Project Benefits */}
      <section className='project-details-benifits-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4'>
              <div className='project-details-benifits-single'>
                <div className='project-details-benifits-image'>
                  <img
                    src={projectBenefitsImage1.fields.file.url}
                    alt={
                      projectBenefitsImage1.fields.file.fileName ||
                      "Benefit Image 1"
                    }
                  />
                </div>
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='project-details-benifits-single'>
                <div className='project-details-benifits-image'>
                  <img
                    src={projectBenefitsImage2.fields.file.url}
                    alt={
                      projectBenefitsImage2.fields.file.fileName ||
                      "Benefit Image 2"
                    }
                  />
                </div>
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='project-details-benifits'>
                <h3>Project Benefits</h3>
                <ul>
                  {projectBenefits.map((item, index) => (
                    <li key={index}>
                      <i className='fa fa-angle-right'></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
