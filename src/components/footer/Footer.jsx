import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Mahardhika Alif Surya</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Tentang Saya</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Keahlian</a>
                </li>
                <li>
                    <a href="#portofolio" className="footer__link">Portofolio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/mahardhikalif" className="footer__social-link" target="_blank">
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.github.com/Mahardhikas" className="footer__social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Mahardhika Alif Surya. All right reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer