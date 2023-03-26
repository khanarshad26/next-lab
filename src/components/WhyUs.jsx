import Link from 'next/link';

const WhyUs = () => {
  return (
    <>
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose ElectrogenLabs?</h3>
                <p>
                We share the same passion for technology that you do. And for a student who aspires to become an engineer, 
                it is necessary to experience industrial exposure and gain technical knowledge. 
                ElectrogenLabs is one of the best places, focuses on the development of its aspiring students by giving them 
                proper practical knowledge and industrial exposure through Workshops & Technical Events
                </p>
                <div className="text-center">
                <Link href='/about' style={{textDecoration: 'none'}} className="more-btn"><span>Learn More <i className="bx bx-chevron-right" /></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch" >
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      {/* <i className="bx bx-receipt" /> */}
                      <h4>Learning Channels</h4>
                      <p>Onsite: Training Delivery at your Premises</p>
                      <p>Offsite: Training Delivery at our Partner Training Centre</p>
                      <p>Online: Live Interactive instructor led Virtual Training</p>
                      {/* <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p> */}
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      {/* <i className="bx bx-cube-alt" /> */}
                      <h4>Benefits</h4>
                      <p>Customized Training Programs</p>
                      <p>Affordable Price</p>
                      <p>Flexible Schedule</p>
                      <p>Hands-on Training</p>
                      <p>Advanced Training Resources</p>
                      {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p> */}
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      {/* <i className="bx bx-images" /> */}
                      <h4>Technical workshops and sessions</h4>
                      <p>We share the same passion for technology that you do, we help our students to explore new technologies and guide and assist them along the way</p>
                    </div>
                  </div>
                </div>
              </div>{/* End .content*/}
            </div>
          </div>
        </div>
      </section>{/* End Why Us Section */}
    </>
  )
}

export default WhyUs