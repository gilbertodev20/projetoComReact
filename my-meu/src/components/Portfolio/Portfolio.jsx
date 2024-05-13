import React from "react";
import avatarGilberto from "../../assets/WhatsApp Image 2024-04-15 at 18.08.56.jpeg"
import '../Portfolio/portfolio.css'

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <div id="container">
          <div id="img1">
            <img className="img" src={avatarGilberto} alt="avatarGilberto" />
            <p>Descrição desse item é portfólio!</p>
          </div>
          <div id="img2">
            <img className="img" src={avatarGilberto} alt="avatarGilberto" />
            <p>Descrição desse item é portfólio!</p>
          </div>
          <div id="img3">
            <img className="img" src={avatarGilberto} alt="avatarGilberto" />
            <p>Descrição desse item é portfólio!</p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Portfolio