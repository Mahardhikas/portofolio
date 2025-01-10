import React from 'react'
import "./portofolio.css"
import Works from './Works'

const Portofolio = () => {
  return (
    <section className="portofolio section" id="portofolio">
        <h2 className="section__title">Portofolio</h2>
        <span className="section__subtitle"></span>

        <Works />
    </section>
  )
}

export default Portofolio