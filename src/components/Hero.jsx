import Link from 'next/link';

const Hero = () => {
  return (
    <>
    <section id="hero" style={{marginTop: '60px'}} className="d-flex justify-content-center align-items-center">  
        <div className="container position-relative">
          <h1>Learning Today,<br />Leading Tomorrow</h1>
          <h2>Experience industrial exposure and gain practical technical knowledge through our Workshops & Events</h2>
          <Link href='/workshops'>
            <span style={{textDecoration: 'none', marginLeft: '0px', marginTop: '10px'}} className="get-started-btn">Get Started</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Hero