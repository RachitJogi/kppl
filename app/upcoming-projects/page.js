"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
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
                  <img
                    src='assets/images/project/project-details-img-1.jpg'
                    alt=''
                  />
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
                  <div className='text'>
                    <p className='first-text'>
                      In our pursuit of continuous growth and innovation, Kutch
                      Potash Pvt. Ltd. is already planning several upcoming
                      projects that will further expand our footprint in the
                      chemical industry. These projects are aligned with our
                      long-term strategy of diversifying our product offerings
                      and making a positive impact on various industries.
                    </p>
                    <h5>Our upcoming ventures will focus on:</h5>
                    <br />
                    <ul>
                      <li>
                        <strong>Advanced Chemical Solutions:</strong> We are
                        exploring new areas within the chemical sector,
                        leveraging research and development to create products
                        that offer enhanced performance and environmental
                        benefits.
                      </li>
                      <li>
                        <strong>Sustainability Initiatives:</strong> As part of
                        our commitment to sustainable growth, we are investing
                        in green technologies and processes that minimize waste,
                        reduce carbon emissions, and promote circular economy
                        practices.
                      </li>
                      <li>
                        <strong>Collaborative Innovations:</strong> We plan to
                        engage with industry experts, research institutions, and
                        global partners to bring forward cutting-edge solutions
                        that address critical challenges in manufacturing,
                        agriculture, and beyond.
                      </li>
                    </ul>
                    <p>
                      At Kutch Potash, our journey has just begun. With every
                      new project, we aim to push the boundaries of innovation,
                      set new standards in sustainability, and create a lasting
                      positive impact on the industries we serve. Stay tuned for
                      more exciting updates as we continue to grow and transform
                      the chemical landscape.
                    </p>
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
                    <img
                      src='/assets/images/project/project-details-benifits-img-1.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='project-details-benifits-single'>
                  <div className='project-details-benifits-image'>
                    <img
                      src='/assets/images/project/project-details-benifits-img-2.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='project-details-benifits'>
                  <h3>Project Benifits</h3>

                  <ul>
                    <li>
                      <i className='fa fa-angle-right'></i>Advanced Chemical
                      Solutions
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>Sustainability
                      Initiatives
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>Collaborative
                      Innovations
                    </li>
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
