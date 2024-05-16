
import avatarGilberto from "../../assets/WhatsApp Image 2024-04-15 at 18.08.56.jpeg"
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio"
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
        {portfolio.map((portfolio) =>
       <ItemPortfolio
       link={portfolio.link}
       image={portfolio.image}
       title={portfolio.title}

       ></ItemPortfolio>
        )}
      </div>
    </>
  )
}
export default Portfolio