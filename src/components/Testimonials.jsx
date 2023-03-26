import React from 'react';

const Testimonials = () => {
  const testimonies = [
    {
        name: 'Sunny Bauddh',
        image: '',
        profession: 'Robotics Engineer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita voluptatum iusto labore quo iste tempora, nesciunt quos soluta, distinctio asperiores voluptatem fugiat nostrum? Sapiente saepe dolores quos vel! Provident.'
    },
    {
        name: 'Prakash Kumar Varma',
        image: '',
        profession: 'Robotics Engineer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita voluptatum iusto labore quo iste tempora, nesciunt quos soluta, distinctio asperiores voluptatem fugiat nostrum? Sapiente saepe dolores quos vel! Provident.'
    },
    {
        name: 'Sunny Bauddh',
        image: '',
        profession: 'Robotics Engineer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita voluptatum iusto labore quo iste tempora, nesciunt quos soluta, distinctio asperiores voluptatem fugiat nostrum? Sapiente saepe dolores quos vel! Provident.'
    },
    {
        name: 'Sunny Bauddh',
        image: '',
        profession: 'Robotics Engineer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita voluptatum iusto labore quo iste tempora, nesciunt quos soluta, distinctio asperiores voluptatem fugiat nostrum? Sapiente saepe dolores quos vel! Provident.'
    },
  ];
  return (
    <>
    <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>
          <div className="testimonials-slider swiper">
            <div className="swiper-wrapper">
                {testimonies.map((testimony, i) => <Testimony key={'testimony_'+i} testimony={testimony} />)}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
    </>
  )
}

const Testimony = ({testimony}) => {
    const {image, name, profession, description} = testimony;
    return (
        <>
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src={image} className="testimonial-img" alt="" />
                    <h3>{name}</h3>
                    <h4>{profession}</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      {description}
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Testimonials