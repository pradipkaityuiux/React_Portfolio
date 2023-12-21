import React from 'react'

function Services() {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className='services__title'>Product <br /> Design</h3>
                </div>
                <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <div className="uil uil-times services__modal-close"></div>
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quos, et incidunt veniam in nobis consequatur impedit eligendi debitis beatae?</p>

                        <ul className='services__modal-services grid'>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services