
const Technologies = () => {
    const techs = ['/assets/img/logos/arduino_tech_logo.png', '/assets/img/logos/rpi_tech_logo.png', '/assets/img/logos/iot_logo.png', '/assets/img/logos/robotics_tech_logo.png', '/assets/img/logos/embedded_systems_logo.png', '/assets/img/logos/simulation_logo.png'];
  return (
    <>
    <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="row">
            {techs.map((tech, i) => <Tech key={'tech_'+i} tech={tech} />)}
          </div>
        </div>
      </section>
    </>
  )
}

const Tech = ({tech}) => {
    return (
        <>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={tech} className="img-fluid" alt="" />
        </div>
        </>
    )
}

export default Technologies