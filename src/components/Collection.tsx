import ProductCard from "./ProductCard"
import { Container, SCollections } from "./StyledComponents"

const Collection = () => {
  return (
    <Container>
      <div className="title">
        <h2 className="collection__title">Our Collections</h2>
      </div>
      <SCollections>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SCollections>
    </Container>
  )
}

export default Collection