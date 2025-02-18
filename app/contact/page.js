"use client";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { getContactPage } from "@/lib/contentful/client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [contactPage, setContactPage] = useState(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function fetchData() {
      const pageData = await getContactPage();
      setContactPage(pageData[0]);
    }
    fetchData();
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Invalid email format";
    if (!phoneNumber.match(/^[0-9]{10}$/))
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (message.length < 10)
      newErrors.message = "Message should be at least 10 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    let form = { fullName, email, phoneNumber, subject, message };

    const rawResponse = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };

  if (!contactPage) {
    return <Preloader />;
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Contact'>
        <div>
          {/*Start Contact One Section*/}
          <section className='contact-one-section'>
            <div className='container'>
              <h5>{contactPage.fields.contactPageTitle}</h5>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='contact-one-image'>
                    <img
                      src={contactPage.fields.contactPageImage.fields.file.url}
                      alt=''
                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <form onSubmit={handleSubmit} className='contact-one-form'>
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div
                          className={`input-box ${
                            errors.fullName ? "input-error" : ""
                          }`}
                        >
                          <input
                            type='text'
                            name='fullName'
                            placeholder='Your full name'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                          {errors.fullName && (
                            <p className='error'>{errors.fullName}</p>
                          )}
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div
                          className={`input-box ${
                            errors.email ? "input-error" : ""
                          }`}
                        >
                          <input
                            type='email'
                            name='email'
                            placeholder='Your E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <p className='error'>{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div
                          className={`input-box ${
                            errors.phoneNumber ? "input-error" : ""
                          }`}
                        >
                          <input
                            type='text'
                            name='phoneNumber'
                            placeholder='Phone Number'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                          {errors.phoneNumber && (
                            <p className='error'>{errors.phoneNumber}</p>
                          )}
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div
                          className={`input-box ${
                            errors.subject ? "input-error" : ""
                          }`}
                        >
                          <input
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                          {errors.subject && (
                            <p className='error'>{errors.subject}</p>
                          )}
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div
                          className={`input-box ${
                            errors.message ? "input-error" : ""
                          }`}
                        >
                          <textarea
                            name='message'
                            placeholder='Please let us know how we can assist you'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                          {errors.message && (
                            <p className='error'>{errors.message}</p>
                          )}
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='contact__btn'>
                          <button type='submit' className='theme-btn'>
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/*End Contact One Section*/}

          <section className='google_map'>
            <iframe
              src={contactPage.fields.googleMapLink}
              className='google-map__contact'
            ></iframe>
          </section>

          {/*Start ContactinfoSection */}
          <section className='contactinfo'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-4 col-lg-4'>
                  {/*Contactinfo Single*/}
                  <div className='contactinfo-single'>
                    <div className='contactinfo-icon'>
                      <span className='far fa-envelope-open'></span>
                    </div>
                    <div className='contactinfo-content'>
                      <h4>Mail Address</h4>
                      <Link href={`mailto:${contactPage.fields.mailAddress}`}>
                        {contactPage.fields.mailAddress}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4'>
                  {/*Contactinfo Single*/}
                  <div className='contactinfo-single'>
                    <div className='contactinfo-icon'>
                      <span className='far fa-phone'></span>
                    </div>
                    <div className='contactinfo-content'>
                      <h4>Call Us</h4>
                      <Link href={`tel:+91 ${contactPage.fields.phoneNumber}`}>
                        +91 {contactPage.fields.phoneNumber}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4'>
                  {/*Contactinfo Single*/}
                  <div className='contactinfo-single'>
                    <div className='contactinfo-icon'>
                      <span className='far fa-map-pin'></span>
                    </div>
                    <div className='contactinfo-content'>
                      <h4>Visit us</h4>
                      <p>{contactPage.fields.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End ContactinfoSection */}
        </div>
      </Layout>
    </>
  );
}
