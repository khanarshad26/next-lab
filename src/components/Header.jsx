import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

const Header = () => {
  const headerLinks = [
    "Home",
    "About",
    "Workshops",
    // "Projects",
    "Blogs",
    "Contact",
  ];
  const [activeTab, setActiveTab] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          {/* <h1 className="logo me-auto"><Link to='/'>ElectrogenLabs</Link></h1> */}
          {/* <Link href="/" className="logo me-auto"> */}
          {/* <h1 className="logo me-auto">ElectrogenLabs</h1>  */}
            <div className="logo me-auto" style={{position: 'relative'}}>
            <Link href="/"><Image src="/assets/img/ElectrogenLab.png" alt="" width='250px' height='50px'/></Link>
            </div>
          {/* </Link> */}
          <nav id="navbar" className="navbar">
            <ul>
              {headerLinks.map((link, index) => {
                const location =
                  "/" + (link === "Home" ? "" : link.toLowerCase());
                return (
                  <li key={"headerlink" + index}>
                    <Link
                      href={location}
                      className={activeTab === link ? "active" : ""}
                      onClick={() => setActiveTab(link)}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {!toggle ? (
              <i
                className="bi bi-list mobile-nav-toggle"
                onClick={() => setToggle(true)}
              />
            ) : (
              <CloseIcon className="mobileNav" onClick={() => setToggle(false)} />
            )}
          </nav>
          <Link href="/workshops">
            <span style={{textDecoration: 'none'}} className="get-started-btn hide-in-mobile">Get Started</span>
          </Link>
        </div>
        <div
          className="mobileNav container"
          style={!toggle ? {display: 'none'} : {}}
        >
          <ul style={{ listStyleType: "none", marginBottom: "0px" }}>
            {headerLinks.map((link, index) => {
              const location =
                "/" + (link === "Home" ? "" : link.toLowerCase());
              return (
                <li key={"headerlink_mobile_" + index}>
                  <Link
                    href={location}
                    className={
                      activeTab === link ? "active headerLinks" : "headerLinks"
                    }
                    style={{textDecoration: 'none'}}
                    onClick={() => setToggle(false)}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
