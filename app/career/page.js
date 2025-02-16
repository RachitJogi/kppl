"use client";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { getCareerPage, getCareerPosition } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";

const page = () => {
  const [careerPage, setCareerPage] = useState(null);
  const [careerPositions, setCareerPositions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pageData = await getCareerPage();
      const positionData = await getCareerPosition();
      setCareerPage(pageData[0]);
      setCareerPositions(positionData);
    }
    fetchData();
  }, []);

  if (!careerPage) {
    return <Preloader />;
  }

  const { intro, howToApply } = careerPage.fields;
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Career'>
      <section className='career-section'>
        <div className='container'>
          <div className='text rich-text'>
            {documentToReactComponents(intro)}
          </div>
          <h4>Current openings</h4>
          <p>
            We are currently seeking talented individuals for the following
            positions:
          </p>
          <div className='position-list'>
            {careerPositions.map((item) => (
              <div className='position-item' key={item.sys.id}>
                <h4>{item.fields.positionTitle}</h4>
                <h5>
                  <strong>Location:</strong> {item.fields.location}
                </h5>
                <div className='text rich-text'>
                  <h5>
                    <strong>Job Responsibilities:</strong>
                  </h5>
                  {documentToReactComponents(item.fields.jobResponsibilities)}
                </div>
                <div className='text rich-text'>
                  <h5>
                    <strong>Qualifications</strong>
                  </h5>
                  {documentToReactComponents(item.fields.qualifications)}
                </div>
              </div>
            ))}
          </div>
          <div className='text rich-text'>
            {documentToReactComponents(howToApply)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default page;
