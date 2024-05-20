
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio"
import '../Portfolio/portfolio.css'
import portfolio from "./portfolio.json"
function Portfolio() {

 
  
  return (

      <div className="container">
        {portfolio.map((item,index) =>
       <ItemPortfolio
       key={index}
       link={item.link}
       image={item.image + (index + 1)}
       title={item.title + (index + 1)}
       ></ItemPortfolio>
        )}

      </div>
    )

}
export default Portfolio