/* eslint-disable @next/next/no-img-element */

import AboutMain from "./AboutMain";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" style={{ marginBottom: "30px" }}>
          <div className="section-title" style={{ marginTop: "60px" }}>
            <h2>About Us</h2>
            <p>Who we are</p>
          </div>
          <div className="row" style={{flexDirection: 'row-reverse'}}>
            <div className="col-lg-6">
              <img
                src="assets/img/landing_intro.jpg"
                style={{ borderRadius: "1rem", width: '-webkit-fill-available' }}
                className="img-fluid ps-lg-4"
                alt=""
              />

            </div>
            <div className="col-lg-6">
              <h3>Learning today, Leading Tomorrow</h3>
              <p>
                We are the comapny of Three friends graduated from NIT
                Andhrapradesh in Mechanical Engineering, Electrical Engineering
                and Electronics Engineering. We three share the same passion and
                suffered the same issues that college students face while trying
                different techs to keep our hands on. Sometimes resources so
                sometimes guidance we lacked, was the biggest trouble for the
                most parts. So we always had a dream to provide engineering
                students and aspiring technologist to guide and support as
                better as we can. hence we formed this company to help students
                all over india.
              </p>

            </div>
          </div>
        </div>
        <AboutMain />
      </section>
    </>
  );
};

export default About;
