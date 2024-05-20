import "./ItemPortfolio.css"
 
function ItemPortfolio(props){
    return(
        <section className="portfolio">
        <div id="img1">
          <img className="img" src={props.image} alt="avatarGilberto" />
          <p>{props.title}</p>
        </div>
      </section>
    )
}
export default ItemPortfolio