import React from 'react'

const Info = () => {
  return (
      <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about--icon'></i>
            <h3 className="about__title">Pengalaman</h3>
            <span className="about__subtitle">1 tahun projek</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about--icon' ></i>
            <h3 className="about__title">Selesai</h3>
            <span className="about__subtitle">2 projek</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about--icon' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
      </div>
  )
}

export default Info
