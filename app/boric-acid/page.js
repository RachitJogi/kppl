"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Boric Acid'>
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
                      At Kutch Potash Pvt. Ltd., our first major initiative is
                      the development of a state-of-the-art boric acid
                      production facility. This project marks a significant step
                      in our journey toward becoming a leader in the chemical
                      industry. Boric acid, known for its versatile applications
                      across various sectors, is an essential component in
                      industries such as agriculture, pharmaceuticals, glass
                      manufacturing, and more.
                    </p>
                    <p className='second-text'>
                      Our boric acid production project is designed with a focus
                      on innovation, efficiency, and sustainability. We are
                      utilizing cutting-edge technology to ensure the highest
                      standards of quality while minimizing environmental
                      impact. From raw material procurement to manufacturing
                      processes, every step is optimized to achieve maximum
                      efficiency and safety.
                    </p>
                    <p>
                      We are committed to adhering to stringent environmental
                      regulations, ensuring that our operations not only meet
                      but exceed industry standards. With this project, Kutch
                      Potash Pvt. Ltd. is poised to become a key player in the
                      production of boric acid, contributing to both the local
                      economy and global supply chains.
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
                      <i className='fa fa-angle-right'></i>State-of-the-art
                      boric acid facility for diverse industrial uses.
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>Emphasis on
                      innovation, efficiency, and sustainability.
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>Advanced technology
                      ensures quality with low environmental impact.
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>Exceeds environmental
                      regulations and industry standards.
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>Boosts local economy
                      and global supply chains.
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
