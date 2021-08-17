import { SButton, SCard } from "./StyledComponents";
import { icons } from "./Constants";

function ProductCard() {
  const imageLink = 'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606551657/sweat02-removebg_sebikw.png'
  return (
    <SCard>
      <div className="image">
        <img className="product__image" src={imageLink} alt="" />

      </div>
      <p className="product__price">₦6,500</p>
      <div className="details">
        <p className="product__category">SWEATSHIRT</p>
        <p className="product__name">Apollo Sweats</p>
        <SButton>
          <span className="text">Add to cart</span>
          <div className="icon">{icons.plus}</div>
        </SButton>
      </div>
    </SCard>
  )
}

export default ProductCard
