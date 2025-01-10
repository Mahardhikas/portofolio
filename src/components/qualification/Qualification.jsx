import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Kualifikasi</h2>
        <span className="section__subtitle"></span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Sistem Informasi</h3>
                            <span className="qualification__subtitle">Institut Bisnis dan Informatik Kesatuan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                            </div> 2020 - 2024
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">IPA</h3>
                            <span className="qualification__subtitle">SMA</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                            </div> 2017 - 2020
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">IT Support</h3>
                            <span className="qualification__subtitle">PT Kenlee Indonesia</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                            </div> Februari 2024 - sekarang
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Frontend Web Developer</h3>
                            <span className="qualification__subtitle">Magang dan Studi Independen Bersertifikat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                            </div> Februari 2024 - Juni 2024
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">Frontend Web Developer</h3>
                            <span className="qualification__subtitle">Magang dan Studi Independen Bersertifikat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                            </div> Februari 2023 - Juni 2023
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification