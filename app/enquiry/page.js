"use client";
import Layout from "@/components/layout/Layout";
import { getEnquiryPage } from "@/lib/contentful/client";
import React, { useState } from "react";

const enquiryPage = await getEnquiryPage();

const Enquiry = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = { phoneNumber, email, companyAddress };

    const rawResponse = await fetch("/api/submit-form-inquiry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();

    setEmail("");
    setPhoneNumber("");
    setCompanyAddress("");
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Enquiry'>
      {/*Start Faq One Section*/}
      <section className='faq-one-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4'>
              <div className='faq-one-left'>
                <h5>{enquiryPage[0].fields.welcomeTitle}</h5>
                <p>{enquiryPage[0].fields.welcomeDescription}</p>
                <br />
                <h5>{enquiryPage[0].fields.reachUsTitle}</h5>
                <p>{enquiryPage[0].fields.reachUsDescription}</p>
              </div>
            </div>
            <div className='col-xl-8 col-lg-8'>
              <form onSubmit={handleSubmit} className='contact-one-form'>
                <div className='row'>
                  <div className='col-xl-12'>
                    <div className='input-box'>
                      <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type='text'
                        placeholder='Phone number'
                      />
                      <input type='hidden' name='formType' value='inquiry' />
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='input-box'>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='E-mail'
                      />
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='input-box'>
                      <textarea
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
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
