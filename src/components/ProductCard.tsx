import { SCard } from "./StyledComponents";

function ProductCard() {
  const imageLink = 'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606551657/sweat02-removebg_sebikw.png'
  return (
    <SCard>

      <img className="product__image" src={imageLink} alt="" />
    </SCard>
  )
}

export default ProductCard
