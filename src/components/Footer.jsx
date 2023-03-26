import Link from "next/link"

const Footer = () => {
  return (
    <>
    <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>ElectrogenLabs</h3>
                <p>
                  Hitech City, <br />
                  Hyderabad, Telangana<br />
                  India <br /><br />
                  <strong>Phone:</strong> +91 8299165446<br />
                  <strong>Email:</strong> info@electrogenlabs.com<br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <Link href="/" >Home</Link></li>
                  <li><i className="bx bx-chevron-right" /> <Link href="/about" >About us</Link></li>
                  <li><i className="bx bx-chevron-right" /> <Link href="/workshops" >Workshops</Link></li>
                  <li><i className="bx bx-chevron-right" /> <Link href="/blogs" >Blogs</Link></li>
                  <li><i className="bx bx-chevron-right" /> <Link href="/contact" >Contact Us</Link></li>
                </ul>
              </div>
              {/* <div className="col-lg-3 col-md-6 footer-links"> 
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <link href="/workshops">Workshops</link></li>
                  <li><i className="bx bx-chevron-right" /> <link href="/contact" >Consultation</link></li>
                  <li><i className="bx bx-chevron-right" /> <link href="/contact" >Corporate Training</link></li>
                  <li><i className="bx bx-chevron-right" /> <link href="/contact" >In-House Training</link></li>
                  <li><i className="bx bx-chevron-right" /> <link href="/contact" >Certification</link></li>
                </ul>
              </div> */}
              <div className="col-lg-4 col-md-6 footer-newsletter" style={{marginLeft: 'auto'}}>
                <h4>Join Our Newsletter</h4>
                <p>Join the community to learn more and support</p>
                <form method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright <strong><span>ElectrogenLabs</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}
              Designed by <span href="https://fimblr.com/" target="_blank">Fimblr.com</span>
            </div>
          </div>
          {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <span className="facebook"><i className="bx bxl-facebook" /></span>
            <span className="instagram"><i className="bx bxl-instagram" /></span>
            <span className="linkedin"><i className="bx bxl-linkedin" /></span>
          </div> */}
        </div>
      </footer>
    </>
  )
}

export default Footer