import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

const Enquiry = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Enquiry'>
      {/*Start Faq One Section*/}
      <section className='faq-one-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4'>
              <div className='faq-one-left'>
                <p>
                  Thank you for your interest in Kutch Potash Pvt. Ltd. We value
                  your inquiries and are here to assist you with any questions,
                  concerns, or requests for information regarding our products
                  and projects.
                </p>
                <br />
                <h5>How to Reach Us</h5>
                <br />
                <p>
                  For general inquiries, please fill out the contact form below,
                  and a member of our team will get back to you as soon as
                  possible. You can also reach us through the following contact
                  details:
                </p>
              </div>
            </div>
            <div className='col-xl-8 col-lg-8'>
              <form action='inc/sendemail.php' className='contact-one-form'>
                <div className='row'>
                  <div className='col-xl-12'>
                    <div className='input-box'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Phone number'
                      />
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='input-box'>
                      <input type='email' name='email' placeholder='E-mail' />
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='input-box'>
                      <textarea
                        name='address'
                        placeholder='Company Address'
                      ></textarea>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='contact__btn'>
                      <button type='submit' className='theme-btn'>
                        Get in touch
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*End Faq One Section*/}
    </Layout>
  );
};

export default Enquiry;
