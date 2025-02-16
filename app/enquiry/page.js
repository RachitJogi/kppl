"use client";
import Layout from "@/components/layout/Layout";
import { getEnquiryPage } from "@/lib/contentful/client";
import React, { useState, useEffect } from "react";

const Enquiry = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [enquiryPage, setEnquiryPage] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const fetchEnquiryPage = async () => {
      try {
        const data = await getEnquiryPage();
        setEnquiryPage(data[0].fields);
      } catch (error) {
        console.error("Error fetching enquiry page data:", error);
      }
    };
    fetchEnquiryPage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !email || !companyAddress) {
      setStatusMessage("All fields are required.");
      return;
    }

    let form = { phoneNumber, email, companyAddress };

    try {
      const rawResponse = await fetch("/api/submit-form-inquiry", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!rawResponse.ok) throw new Error("Failed to submit form");

      setPhoneNumber("");
      setEmail("");
      setCompanyAddress("");
      setStatusMessage("Your enquiry has been submitted successfully!");
    } catch (error) {
      setStatusMessage("Error submitting form. Please try again later.");
      console.error(error);
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Enquiry'>
      {/*Start Faq One Section*/}
      <section className='faq-one-section'>
        <div className='container'>
          <div className='row'>
            {enquiryPage && (
              <>
                <div className='col-xl-4 col-lg-4'>
                  <div className='faq-one-left'>
                    <h5>{enquiryPage.welcomeTitle}</h5>
                    <p>{enquiryPage.welcomeDescription}</p>
                    <br />
                    <h5>{enquiryPage.reachUsTitle}</h5>
                    <p>{enquiryPage.reachUsDescription}</p>
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
                            required
                          />
                          <input
                            type='hidden'
                            name='formType'
                            value='inquiry'
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='input-box'>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='E-mail'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='input-box'>
                          <textarea
                            value={companyAddress}
                            onChange={(e) => setCompanyAddress(e.target.value)}
                            placeholder='Company Address'
                            required
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
                  {statusMessage && (
                    <p className='status-message'>{statusMessage}</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/*End Faq One Section*/}
    </Layout>
  );
};

export default Enquiry;
