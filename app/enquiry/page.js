"use client";
import Layout from "@/components/layout/Layout";
import { getEnquiryPage } from "@/lib/contentful/client";
import React, { useState, useEffect } from "react";

const Enquiry = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [enquiryPage, setEnquiryPage] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    let newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!companyName) {
      newErrors.companyName = "Company name is required.";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a 10-digit phone number.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!companyAddress) {
      newErrors.companyAddress = "Company address is required.";
    } else if (companyAddress.length < 10) {
      newErrors.companyAddress =
        "Company address must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatusMessage("Please fix the errors before submitting.");
      return;
    }

    let form = { companyName, phoneNumber, email, companyAddress };

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

      setCompanyName("");
      setPhoneNumber("");
      setEmail("");
      setCompanyAddress("");
      setErrors({});
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
                        <div
                          className={`input-box ${
                            errors.companyName ? "input-error" : ""
                          }`}
                        >
                          <input
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            type='text'
                            placeholder='Company Name'
                          />
                          {errors.companyName && (
                            <p className='error'>{errors.companyName}</p>
                          )}
                          <input
                            type='hidden'
                            name='formType'
                            value='inquiry'
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div
                          className={`input-box ${
                            errors.phoneNumber ? "input-error" : ""
                          }`}
                        >
                          <input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type='text'
                            placeholder='Phone number'
                          />
                          {errors.phoneNumber && (
                            <p className='error'>{errors.phoneNumber}</p>
                          )}
                          <input
                            type='hidden'
                            name='formType'
                            value='inquiry'
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div
                          className={`input-box ${
                            errors.email ? "input-error" : ""
                          }`}
                        >
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='E-mail'
                          />
                          {errors.email && (
                            <p className='error'>{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div
                          className={`input-box ${
                            errors.companyAddress ? "input-error" : ""
                          }`}
                        >
                          <textarea
                            value={companyAddress}
                            onChange={(e) => setCompanyAddress(e.target.value)}
                            placeholder='Company Address'
                          ></textarea>
                          {errors.companyAddress && (
                            <p className='error'>{errors.companyAddress}</p>
                          )}
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
