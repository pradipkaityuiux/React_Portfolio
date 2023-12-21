import React, { useState } from 'react'
import "./Qualifications.css"

function Qualifications() {
    const [ toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index)
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={()=>toggleTab(1)} className={toggleState==1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                <div onClick={()=>toggleTab(2)} className={toggleState==2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState==1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">Nalanda University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className="qualification__data qualification__data_col">
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Nalanda University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Nalanda University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className="qualification__data qualification__data_col">
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Nalanda University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2017 - 2021
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState==2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">System Engineer</h3>
                            <span className="qualification__subtitle">TCS</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className="qualification__data qualification__data_col">
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">WIPRO</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Nalanda University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications