"use client";
import Layout from "@/components/layout/Layout";
import { getContactPage } from "@/lib/contentful/client";
import Link from "next/link";
import { use, useState } from "react";

const contactPage = await getContactPage();

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Contact'>
        <div>
          {/*Start Contact One Section*/}
          <section className='contact-one-section'>
            <div className='container'>
              <h5>{contactPage[0].fields.contactPageTitle}</h5>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='contact-one-image'>
                    <img
                      src={
                        contactPage[0].fields.contactPageImage.fields.file.url
                      }
                      alt=''
                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <form onSubmit={handleSubmit} className='contact-one-form'>
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='fullName'
                            placeholder='Your full name'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='email'
                            name='email'
                            placeholder='Your E-mail'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                          />
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='phoneNumber'
                            placeholder='Phone Number'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            required
                          />
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                            required
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='input-box'>
                          <textarea
                            name='message'
                            placeholder='Please let us know how we can assist you'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                          ></textarea>
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
              src={contactPage[0].fields.googleMapLink}
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
                      <Link
                        href={`mailto:${contactPage[0].fields.mailAddress}`}
                      >
                        {contactPage[0].fields.mailAddress}
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
                      <Link
                        href={`tel:+91 ${contactPage[0].fields.phoneNumber}`}
                      >
                        +91 {contactPage[0].fields.phoneNumber}
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
                      <p>{contactPage[0].fields.address}</p>
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
