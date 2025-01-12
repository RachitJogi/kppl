import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Career'>
      <section className='career-section'>
        <div className='container'>
          <p>
            At Kutch Potash Pvt. Ltd., we believe that our success is driven by
            the talent, dedication, and passion of our team. As we expand our
            presence in the chemical industry, we are always on the lookout for
            innovative, skilled, and motivated individuals who are eager to
            contribute to our vision of sustainability and excellence.
          </p>
          <h4>Why Work With Us?</h4>
          <ul>
            <li>
              Innovation-Driven Environment: Join a team that values creativity
              and encourages out-of-the-box thinking. We foster an environment
              where new ideas are welcomed and explored.
            </li>
            <li>
              Career Development: We are committed to the growth of our
              employees. Through continuous training, mentorship programs, and
              professional development opportunities, we ensure that you have
              the tools needed to advance your career.
            </li>
            <li>
              Sustainability Focus: Be part of a company that prioritizes
              environmental responsibility and sustainable practices. Your work
              will contribute to meaningful projects that have a positive impact
              on the community and the planet.
            </li>
            <li>
              Collaborative Culture: We promote teamwork and collaboration
              across all levels of the organization. You will work alongside
              passionate professionals who are committed to achieving common
              goals.
            </li>
          </ul>
          <h4>Current openings</h4>
          <p>
            We are currently seeking talented individuals for the following
            positions:
          </p>
          <div className='position-list'>
            <div className='position-item'>
              <h5>[Position Title]</h5>
              <p>Location: [Locatiion]</p>
              <p>Job Responsibilities: [Brief description of duties]</p>
              <p>Qualifications: [List of required qualifications]</p>
            </div>
            <div className='position-item'>
              <h5>[Position Title]</h5>
              <p>Location: [Locatiion]</p>
              <p>Job Responsibilities: [Brief description of duties]</p>
              <p>Qualifications: [List of required qualifications]</p>
            </div>
            <div className='position-item'>
              <h5>[Position Title]</h5>
              <p>Location: [Locatiion]</p>
              <p>Job Responsibilities: [Brief description of duties]</p>
              <p>Qualifications: [List of required qualifications]</p>
            </div>
          </div>
          <p>
            For a complete list of current job openings, please visit our job
            portal [insert link].
          </p>
          <h4>How to apply?</h4>
          <p>
            If you are interested in joining our team, please submit your resume
            and a cover letter detailing your qualifications and interest in
            Kutch Potash Pvt. Ltd. to [Insert Email Address].
          </p>
          <p>Subject line: Career Application - [Position Title]</p>
          <p>Join Us in Shaping the Future</p>
          <p>
            At Kutch Potash Pvt. Ltd., we are committed to building a diverse
            and inclusive workplace. We welcome applications from individuals of
            all backgrounds and experiences. Together, we can make a difference
            in the chemical industry and contribute to a sustainable future.
          </p>
          <p>We look forward to hearing from you!</p>
        </div>
      </section>
    </Layout>
  );
};

export default page;
