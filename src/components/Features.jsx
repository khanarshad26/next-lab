import React from 'react';

const Features = () => {
    const features = [
        {
            label: 'Arduino',
            icon: 'ri-store-line',
            color: '#ffbb2c'
        },
        {
            label: 'Raspberry Pi',
            icon: 'ri-bar-chart-box-line',
            color: '#5578ff'
        },
        {
            label: 'IOT',
            icon: 'ri-calendar-todo-line',
            color: '#e80368'
        },
        {
            label: 'Networks',
            icon: 'ri-paint-brush-line',
            color: '#e361ff'
        },
    ];
  return (
    <>
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
        <div className="container">
          <div className="row">
            {features.map((feature, index) => <Feature key={'feature_'+index} feature={feature}/>) }
          </div>
        </div>
      </section>{/* End Features Section */}
    </>
  )
}

const Feature = ({feature}) => {
    const {label, icon, color} = feature;
    return (
        <>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className={icon} style={{color}} />
                <h3>{label}</h3>
              </div>
            </div>
        </>
    )
}

export default Features