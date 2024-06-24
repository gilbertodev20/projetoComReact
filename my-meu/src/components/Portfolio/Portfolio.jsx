
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio"
import '../Portfolio/portfolio.css'
import  "./portfolio.json"
function Portfolio({portfolio}) {

 
  
  return (

      <div className="container">
        {portfolio.map((item,index) =>
       <ItemPortfolio
       key={index}
       link={item.link}
       image={item.image}
       title={item.title}
       ></ItemPortfolio>
        )}

      </div>
    )

}
export default Portfolio