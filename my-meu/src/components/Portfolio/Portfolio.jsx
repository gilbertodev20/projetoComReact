
import avatarGilberto from "../../assets/WhatsApp Image 2024-04-15 at 18.08.56.jpeg"
import '../Portfolio/portfolio.css'

function Portfolio() {

  const portfolio = [
    {
      link: "https://academy.comeialabs.com.br/",
      image: { avatarGilberto },
      title: "portfolio 1",
    },
    {
      link: "https://academy.comeialabs.com.br/",
      image: { avatarGilberto },
      title: "portfolio 2",
    },
    {
      link: "https://academy.comeialabs.com.br/",
      image: { avatarGilberto },
      title: "portfolio 3",
    }
  ]
  return (
    <>
      <div className="container">
        {portfolio.map((portfolio,index) =>
        <section key={index} className="portfolio" >
            <div id="img1">
              <img className="img" src={avatarGilberto} alt="avatarGilberto" />
              <p>{portfolio.title}</p>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
export default Portfolio