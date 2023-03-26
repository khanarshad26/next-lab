/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { workshops } from '../store/workshop';

const Workshops = ({limit = false}) => {
    const workshopsToShow = limit ? workshops.slice(0,3) : workshops;
    
  return (
    <>
    {/* ======= Popular Courses Section ======= */}
    <section id="popular-courses" className="courses">
        <div className="container">
          <div className="section-title">
            <h2>Workshops</h2>
            <p>Popular Workshops</p>
          </div>
          <div className="row">
            {workshopsToShow.map((workshop, i) => <Workshop key={'workshop_'+i} workshop={workshop} />)}
          </div>
        </div>
      </section>{/* End Popular Courses Section */}
    </>
  )
}

export const Workshop = ({workshop}) => {
    const {id, title, image, subject, summary} = workshop;  // Add trainer, enrolled
    return (
        <>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{marginBottom: '5px'}}>
              <div className="course-item">
                <img src={image} style={{height: '196px', width: '100%'}} className="img-fluid" alt="..." />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>{subject}</h4>
                  </div>
                  <h3><Link href={{ pathname: `/workshop/${id}` }} style={{textDecoration: 'none'}}>{title}</Link></h3>
                  <p>{summary}</p>
                </div>
              </div>
            </div>
        </>
    )
}

export default Workshops