"use client";

import { useEffect, useState } from "react";
import { homePageFounderSection } from "@/lib/contentful/client";

export default function Cases() {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFounders = async () => {
      try {
        const data = await homePageFounderSection();
        setFounders(data);
      } catch (err) {
        console.error("Error fetching founder data:", err);
        setError("Failed to load founders.");
      } finally {
        setLoading(false);
      }
    };

    fetchFounders();
  }, []);

  if (error) return <p>{error}</p>;
  if (!founders.length) return null;

  return (
    <>
      {/*Start Team One Section */}
      <section className='team-one-section home-page two'>
        <div className='container'>
          <div className='thm-section-title text-center'>
            <h4 className='sub-title-shape-left section_title-subheading'>
              Meet Our Team
            </h4>
            <h2>Founders</h2>
          </div>
          <div className='row'>
            {founders.map((item) => (
              <div key={item.sys.id} className='col-xl-4 col-lg-4 col-md-6'>
                {/*Team One Single*/}
                <div
                  className='team-one-single wow fadeInLeft'
                  data-wow-delay='200ms'
                >
                  <div
                    className='team-one-img'
                    style={{
                      backgroundImage: `url(${item.fields.founderImage.fields.file.url})`,
                    }}
                  >
                    <img
                      src={item.fields.founderImage.fields.file.url}
                      alt={item.fields.founderName}
                    />
                  </div>
                  <div className='team-one-content'>
                    <h3>{item.fields.founderName}</h3>
                    <p>{item.fields.founderPosition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*End Team One Section */}
    </>
  );
}
